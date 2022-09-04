import React, { useEffect, useState } from "react";

import './common.css'

const AddTodoBox = (props) => {
    const { addTodo } = props;
    const [input, setInput] = useState("");

    const inputBox = document.querySelector("input.add-todo__input");

    const handleOnChange = (event) => {
        event.preventDefault();
        setInput(event.target.value);
        // console.log(event.target.value);
    }

    const handleAddTodo = (event) => {
        event.preventDefault();
        if (inputBox != null && inputBox != "") {
            addTodo(inputBox.value);
            inputBox.value = "";
        }
        else {
            alert("Input không hợp lệ!");
        }
    }



    return (
        <div className="Add-box">
            <div className="add-box__container">
                <div className="add-todo-input__container">
                    <input
                        type="text"
                        id="add-todo-input__id"
                        className="add-todo__input" size={20}
                        placeholder="Enter New Task"
                        onChange={(event) => handleOnChange(event)}
                    />
                </div>
                <div className="add-todo-button__container">
                    <button className="add-todo__btn" id="add-todo__id"
                        style={{ opacity: inputBox !== null ? 1 : 0.6 }}
                        onClick={(event) => handleAddTodo(event)}
                    >Add</button>
                </div>
            </div>
        </div>
    )
}

export default AddTodoBox
