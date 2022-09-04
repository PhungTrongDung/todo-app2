import React from "react";

import TodoItem from "./TodoItem";


const TodoList = (props) => {
    const { value, setValue, item, setItem, deleteTodoItem } = props


    return (
        <section className="todo-list__container">
            <ul className="todo-list">
                <li>
                    {value.map((it, index) => (
                        <TodoItem
                            key={it.id}
                            item={it}
                            deleteTodoItem={deleteTodoItem}
                            // completed={completed}
                        />
                    ))}
                </li>
            </ul>
        </section>
    )
}

export default TodoList