import { useState } from "react"
import './App.css'


function App() {
  const [todo, setTodo] = useState([]);
  const [error, setError] = useState()

  const onSubmit = (useId = new Date().getTime()) => {
    event.preventDefault()
    if (todoInput.value === '') {
      setError('Please Enter Todo')

    } else {

      setTodo([...todo, { Id: useId, key: useId, todo: todoInput.value }])
      console.log(todo);
      setError()

      todoInput.value = ''
    }
  }

  // const deleteTodo = (useId) => {
  //   console.log("delete", useId);
  //   document.getElementById(useId).remove()
  // }
  // const completedTodo = (useId) => {
  //   console.log(useId);
  //   document.getElementById(useId).classList.toggle('line-through')
  // }

  return (
    <>
      <div className="h-screen  w-full   bgGrad m-0  text-white">
        <div className="flex flex-wrap justify-center  p-3  ">
          <form onSubmit={onSubmit} className="flex gap-3" >
            <input
              type="text" id="todoInput"
              placeholder="Add todo"
              className="bg-[#0a0d10] p-2 rounded-lg w-80 "
            />
            <button type="submit" >
              <img src="https://cdn-icons-png.flaticon.com/512/2312/2312400.png"
                className="w-[50px]  hover:scale-110  cursor-pointer" alt=""
              />
            </button>
          </form>

        </div>
        <div className="ul">
          {todo.map((todo) => {
            return <h1>{todo}</h1>
          })}
        </div>

      </div>
    </>
  )
}

export default App
