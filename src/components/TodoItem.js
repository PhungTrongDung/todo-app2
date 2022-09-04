import React, { useState } from "react";

import AddTodoBox from './AddTodoBox'
import TodoList from "./TodoList";


const TodoItem = (props) => {
    const { item, deleteTodoItem } = props;

    const deleteButton = document.querySelector('todoItem-item.todo-item-cancel');

    return (
        <li>
            <div className="todo-item" key={item.id}>
                <div className="todo-item__container">
                    <div className="todoItem-item todo-item-check-box__wrapper">
                        <input className="todoItem-item todo-item__check-box"
                            type="checkbox"
                            // onChange={() => completed(item)}
                            checked={item.isDone}
                        />
                    </div>

                    <div className="todoItem-item todo-item-content__wrapper">
                        <div className="todo-item-content">{item.name} </div>
                    </div>

                    <div className="todoItem-item todo-item-cancel__wrapper">
                        <button className="todoItem-item todo-item-cancel"
                            onClick={() => deleteTodoItem(item)}

                        >   <i class="cancel-icon fa-solid fa-trash-can"></i>
                        </button>
                    </div>

                </div>

            </div>
        </li>
    )
}


export default TodoItem