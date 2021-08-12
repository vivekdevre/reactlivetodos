import React from 'react'
import {TodoItem} from "./TodoItem"

export const Todos = (props) => {
    let myStyle={
        minHeight:"45vh"
    }
    return (
        <div className="container my-3" style={myStyle}>
            <h3 className="my-3">
                To-Do's List
            </h3>
            {props.todos.length===0? "No To-Do's to display":props.todos.map((todo)=>{
                console.log(todo.sno);
                return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
                
            })}
        </div>
    )  
}
