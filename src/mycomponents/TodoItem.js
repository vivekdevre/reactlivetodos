import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
    return (
        <>
        <div className="container my-3">
            <h4>{todo.title}</h4>
            {/* <p>{todo.desc}</p> */}
            <textarea className="container my-3" rows="4">{todo.desc}</textarea>
            <button className="btn btn-danger btn-sm" onClick={()=>{onDelete(todo)}}>Delete</button>
        </div>
        <hr />
        </>
    )
}
