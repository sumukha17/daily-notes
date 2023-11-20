import { PlusCircle, Trash } from "@phosphor-icons/react";
import React, { useState } from "react";


function Todo(){
    const [list,setList] = useState([])
    const [input,setInput] = useState("")


    const addTodo = (todo) =>{
        const newTodo = {
            id : Math.random(),
            todo : todo,
        };

        setList([...list,newTodo]);
        setInput("");
    }
    const delTodo = (id) =>{
        const newList = list.filter((todo)=>todo.id !== id);
        setList(newList);
    } 
    return(
        <div className="Todo d-grid justify-content-center align-items-center mb-5">
            <div className="toDoHead display-5 p-4 d-flex justify-content-center align-items-center">TODO for the day!</div>
            <div className="Container rounded-3 shadow-lg" style={{backgroundColor:"WhiteSmoke"}}>
            <div className="Input d-flex justify-content-center align-items-center pb-4 pt-3">
                <input className="inputField " type="text" placeholder="Enter your TODO" value={input} onChange={(e)=>setInput(e.target.value)} />
                <button className="btn btn-success" onClick={()=>addTodo(input)}><PlusCircle size={23} /></button>
            </div>
            <div className="Output d-grid justify-content-center align-items-center">
                <table className="table" >
                <tbody>
                <ul>
                {list.map((todo)=>(
                    <li key={todo.id} className="d-flex justify-content-around" style={{backgroundColor:"WhiteSmoke"}}>
                    <td className="tododata d-flex flex-column" style={{width:"auto"}}>{todo.todo}</td>
                    <td><button className="btn btn-danger d-flex justify-content-end mx-5 " onClick={()=>{delTodo(todo.id)} }> <Trash size={23} /></button></td>
                    </li>
                ))}
                </ul>
                </tbody>
                </table>
                </div>
            </div>
        </div>
    )
}

export default Todo;