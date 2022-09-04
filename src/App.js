import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

import Header from './components/Header';
import AddTodoBox from './components/AddTodoBox';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import DeleteAll from './components/DeleteAll';

function App() {

  const [work, setWork] = useState('');
  // console.log("test: ", localStorage.getItem('item'))
  const [value, setValue] = useState(JSON.parse(localStorage.getItem('work') )  || []);
  const [num, setNum] = useState(value.length);


  const addTodo = (name) => {
    setValue(prev => {
      const newWork = { id: Date.now(), name: name, isDone: false }
      const newValue = [...prev, newWork]
      localStorage.setItem('item', JSON.stringify(newValue))
      return newValue
    })
    setWork('')
  }

  const deleteTodoItem = (it) => {
    const newValue = value.filter(ele => ele.id !== it.id)
    setValue((value) => value.filter((ele) => ele.id !== it.id));
    localStorage.setItem('work', JSON.stringify(newValue))
    console.log(newValue)
  }


  // const completed = (it) => {
  //   setItem((items) => {
  //     items.map((item) =>
  //       item.id === it.id ? { ...item, isDone: !item.isDone } : item
  //     )
  //   });
  // }

  return (
    <div className="TodoApp">
      <div className='TodoApp-container'>
        <Header />
        <AddTodoBox addTodo={addTodo} />
        <TodoList
          value={value}
          setValue={setValue}
          work={work}
          setWork={setWork}
          deleteTodoItem={deleteTodoItem}
        // completed={completed}
        />
        <DeleteAll
          num={value.length}
        />
      </div>

    </div>
  );
}

export default App;
