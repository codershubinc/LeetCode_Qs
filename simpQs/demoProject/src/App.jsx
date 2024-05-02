import { useState } from "react"



function App() {
  const [todo, setTodo] = useState([]);
  const [error, setError] = useState()
  const onSubmit = () => {
    event.preventDefault()
    if (todoInput.value === '') {
      setError('Please Enter Todo')

    } else {
      setTodo([...todo, todoInput.value])
      console.log(todoInput.value);
      setError()
      todoInput.value = ''
    }
  }

  const deleteTodo = (useId) => {
    console.log(useId);
    document.getElementById(useId).remove()
  }
  const completedTodo = (useId) => {
    console.log(useId);
    document.getElementById(useId).classList.toggle('line-through')
  }

  return (
    <>
      <form onSubmit={onSubmit}  >
        <input type="text" id="todoInput" placeholder="Add todo" />
        <button type="submit" >Add</button>
      </form>
      <h2>
        {(error ? error : '')}

      </h2>
      <ul>
        {(todo ? todo.map((todo, useId = useId()) =>
          <div className="flex justify-between" key={useId} id={useId} >
            <li >{todo}</li>
            <div className="flex gap-1 ">
              <img src="https://www.flaticon.com/svg/vstatic/svg/3917/3917772.svg?token=exp=1714642847~hmac=ebbe272dc43dee601215ac4f15523ccb" className="w-[20px] h-6 cursor-pointer " onClick={() => deleteTodo(useId)} />
              <input type="checkbox" onChange={() => completedTodo(useId)} />
            </div>
          </div>) : <h3>No Todo Yet</h3>)}

      </ul>
    </>
  )
}

export default App
