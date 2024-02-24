import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const SignIn = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    //handle form submition
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('signIn call at client')
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/auth/login`, { email, password })
            if (res.data.success) {
                toast.success(res.data.message)
                navigate('/')
            } else {
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error('Error while SignIn')
        }
    }

    return (
        <div className="grid grid-cols-10 gap-4 items-center">
            <form onSubmit={handleSubmit} className="col-span-6 flex flex-col items-center justify-center h-screen">
                <h1 className="text-center text-2xl font-bold text-yellow-500 mb-5">Sign In to your Account</h1>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Email" className="col-span-1 mb-4 bg-slate-100 text-sm p-3 rounded-md" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Password" className="col-span-1 mb-4 bg-slate-100 text-sm p-3 rounded-md" />
                <p className='text-sm text-slate-500 underline p-2'>Forgot password?</p>
                <button className='bg-yellow-500 rounded-2xl text-white p-3 font-normal text-xs '>SIGN IN</button>
            </form>
            <div className="col-span-4 bg-cyan-800 flex flex-col items-center justify-center h-screen text-white">
                <h1 className='text-2xl font-bold'>Hello Friend!</h1>
                <p>Enter your personal details and start your journey with us</p>
                <button className='border border-white rounded-2xl text-white p-3 m-3 font-normal text-xs '>SIGN UP</button>
            </div>
        </div>
    )
}

export default SignIn