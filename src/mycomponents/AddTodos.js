import React, { useState } from 'react';

export const AddTodos = ({addTodo}) => {
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");
    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description cannot be empty!")
        }else {
            addTodo(title, desc);
            settitle("");
            setdesc("");
        }
    }
    return (
        <div className="container my-3">
            <h3>Add a To-do!</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">To-Do Title</label>
                    <input type="text" value={title} onChange={(e)=>{settitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp" spellCheck="false"/>
                </div>
                    <div className="mb-3">
                        <label htmlFor="desc" className="form-label">To-Do description</label>
                        <textarea type="text" value={desc} onChange={(e)=>{setdesc(e.target.value)}} className="form-control" id="desc" spellCheck="false"/>
                    </div>
                            <button type="submit" className="btn btn-success btn-sm">Add To-Do</button>
            </form>
        </div>
                    )
}
