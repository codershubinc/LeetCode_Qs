import { useEffect, useState } from "react"
import TodoForm from "./TodoForm"
import TodoItem from "./TodoItem"
import {  TodoProvider } from "../context" 
import '../App.css'

function Todo() { 
    const [todos, setTodos] = useState([]) 
    const addTodo = (todo) => {
        setTodos((prev) => [{ ...todo, id: Date.now(), Date: new Date().getDate() }, ...prev])
    }

    const updateTodo = (id, todo) => {
        setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
    }

    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id))
    }

    const toggleComplete = (id) => {
        setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo)))
    }



    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem('todos'))
        if (todos && todos.length > 0) {
            setTodos(todos)

        }
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    return (

        <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>

            <div className="h-screen  w-full   bgGrad m-0  text-white">
                <div className="flex flex-wrap justify-center  p-3  ">
                    {/*form*/}
                    <TodoForm />
                </div>
                <div className="h-[70vh] overflow-auto ">
                    {/* todo list here */}
                    {todos.map((todo) => (
                        <div key={todo.id}
                        >
                            <TodoItem todo={todo} />
                        </div>
                    ))}
                </div>

            </div>
        </TodoProvider>

    )
}

export default Todo
