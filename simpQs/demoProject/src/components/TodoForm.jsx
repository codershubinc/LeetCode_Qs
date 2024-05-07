import React from 'react'
import { useTodo } from '../context'
import { useState } from 'react'                         

function TodoForm() {
    const [todo, setTodo] = useState("")
    const { addTodo } = useTodo()
    const add = (e) => {
        e.preventDefault()
        if (!todo) return
        addTodo({todo, completed: false })
 setTodo("")
    }
    return (
        <form onSubmit={add} className="flex gap-3" >
            <input
                type="text" id="todoInput"
                placeholder="Add todo"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                className="bg-[#0a0d10] p-2 rounded-lg w-80 "
            />
            <button type="submit" >
                <img src="https://cdn-icons-png.flaticon.com/512/2921/2921226.png"
                    className="w-[50px]  hover:scale-110  cursor-pointer" alt=""
                    
                />
            </button>
        </form>
    )
}

export default TodoForm
