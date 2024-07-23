import React, { useState } from 'react'

export default function Hookslearn() {


    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const handleLogin = (e) =>{
        e.preventDefault()
        const data  = {
            email: email,
            password: password,
        }

        console.log(data)
    }

    return (
        <div className='flex justify-center place-content-center mt-11'>
            <div className='border w-96 p-12 rounded'>
                <div className='text-indigo-800 font-bold mb-5'>Login </div>
                <form className='flex flex-col gap-3' >
                    <input onChange={(e)=>{setEmail(e.target.value)}} value={email} type='text' className=' border p-2 outline-none focus:border-indigo-800 bg-white rounded-md' placeholder='Email' />
                    <input onChange={(e)=>{setPassword(e.target.value)}} value={password} type='password' className='border p-2 outline-none focus:border-indigo-800 bg-white rounded-md' placeholder='Password' />
                    <button onClick={(e)=>handleLogin(e)} className='bg-indigo-800 text-white p-2 rounded-md hover:bg-indigo-900'>Login</button>
                </form>
            </div>
        </div>

    )
}
