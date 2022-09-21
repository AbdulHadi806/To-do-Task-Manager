import React from 'react';
import {useState} from 'react'
function Form({setinputtext,todos, settodos,inputtext}){
    const inputtexthander = (e) => {
        console.log(e.target.value)
        setinputtext(e.target.value)
    }
    const submitTodos = (e) => {
        e.preventDefault()
        settodos([...todos, {text: inputtext, completed: false, id: Math.random() * 1000}])
        setinputtext("")
    }
    return (
        <form>
            <input value={inputtext} type="text" className="todo-input" onChange={inputtexthander} placeholder='What to do?'></input>
            <button onClick={submitTodos} className="to-main-bu">+</button>
        </form>
    )
}
export default Form;