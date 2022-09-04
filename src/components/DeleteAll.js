import React, { useState } from "react";

const DeleteAll = (props) => {
    const { num } = props;
    return (
        <div className="Delete-box">
            <div className="delete-box__container">
                <div className="delete-note__pending-tasks">
                    <span>You have <span className="pendingTaks"> {num} </span> pending tasks</span>
                </div>
                <div className="delete-todo-button__container">
                    <button className="delete-button-all"
                    >Clear All</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteAll