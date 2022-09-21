import React from 'react';
import Todo from './Todo'
function TodoList({todos, settodos}){
    return (
        <div className="todo-container">
                <ul className="todo-list">
                    {todos.map(todo => (
                        <Todo todo = {todo} todos = {todos} settodos = {settodos} key={todo.id} text={todo.text}/>
                    ))}
                </ul>
            </div>
    )
}
export default TodoList