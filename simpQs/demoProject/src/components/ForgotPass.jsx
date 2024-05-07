import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function ForgotPass() {
    const [setPass, setSetPass] = useState(false)
    const navigate = useNavigate()

    const submitPass = () => {
        const val = document.querySelector('.val').value
        document.querySelector('.pass').style.display = 'none'
        localStorage.setItem('password', val)
        navigate('/todo') 
    }
    return (
        <div className=' text-white pass fixed w-full h-full flex flex-row justify-center bg-black '>
            <div className='w-96 h-96 flex flex-col justify-center'>
                <h2 className='text-center text-3xl'>Enter New Password</h2>
                <input type="text" className='val w-96 h-12 rounded-xl mt-5 text-black px-3.5  ' placeholder='Enter Password' />
                <button onClick={submitPass} className="bg-gray-800 text-white hover:bg-gray-700 px-4 py-2 rounded-md shadow-md">submit</button>
                <p className='text-red-500 text-center mt-3 text-5xl'> {setPass ? 'New Password Set' : ''}</p>
            </div>
        </div>
    )
}

export default ForgotPass