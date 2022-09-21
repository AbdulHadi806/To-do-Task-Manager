import React from "react";

const Todo = ({text,todo,todos, settodos}) => {
    //events are here
    const deleteHandler = () => {
        settodos(todos.filter(el => el.id !== todo.id))
    }
    const completeHandler = () =>{
        settodos(todos.map((item) => {
            if(item.id === todo.id){
                return {
                    ...item, completed: !item.completed,
                }
            }
            return item
        }))
    }
    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
                <p>{text}</p>
                <button onClick={completeHandler} className="complete-button">Check</button>
                <button onClick={deleteHandler} className="delete-button">Delete</button>
            </li>
        </div>
    )
}
export default Todo;