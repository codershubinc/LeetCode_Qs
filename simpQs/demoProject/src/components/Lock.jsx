import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom' 
function Lock() {
    const [passError, setPassError] = useState(false)
    const navigate = useNavigate()
    const submit = () => {
        const val = document.querySelector('.val').value
        const storedVal = localStorage.getItem('password')
        if (val === storedVal) {
            document.querySelector('.pass').style.display = 'none'
            setPassError(false)
            navigate('/todo')

        } else setPassError(true)

    }
    return (
        <div className=' text-white pass fixed w-full h-full flex flex-row justify-center bg-black '>
            <div className='w-96 h-96 flex flex-col justify-center'>
                <h2 className='text-center text-3xl'>Enter Password</h2>
                <input type="text" className='val w-96 h-12 rounded-xl mt-5 text-black px-3.5  ' placeholder='Enter Password' />
                <button onClick={submit} className="bg-gray-800 text-white hover:bg-gray-700 px-4 py-2 rounded-md shadow-md">submit</button>

                <div className=''>
                    {passError ?
                        <>
                            <p className='text-red-500 text-center mt-3 text-5xl'>'Wrong Password'</p>
                            <div>
                                <NavLink to='/forgotPass' className={`text-center`}>Forgot pass / Create Pass</NavLink>
                            </div>
                        </> : ''}
                </div>
            </div>
        </div>
    )
}

export default Lock
