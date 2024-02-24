import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


const SignUp = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  //handle form submition
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('signup call at client')
    try {
      const res = await axios.post(`${process.env.REACT_APP_API}/auth/register`, { name, email, password })
      if (res.data.success) {
        toast.success(res.data.message)
        navigate('/login')
      } else {
        toast.error(res.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error('Error while SignUp')
    }
  }

  return (

    <div className="grid grid-cols-10 gap-4 items-center">
      <div className="col-span-4 bg-cyan-800 flex flex-col items-center justify-center h-screen text-white">
        <h1 className='text-2xl font-bold'>Welcome Back!</h1>
        <p>To keep connected with us please login with your personal info</p>
        <Link to='/signIn' className='border border-white rounded-2xl text-white p-3 m-3 font-normal text-xs '>SIGN IN</Link>
      </div>
      <form onSubmit={handleSubmit} className="col-span-6 flex flex-col items-center justify-center h-screen" >
        <h1 className="text-center text-2xl font-bold text-yellow-500 mb-5" > Create Account</h1 >
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Name" className="col-span-1 mb-4 bg-slate-100 text-sm p-3 rounded-md" />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Email" className="col-span-1 mb-4 bg-slate-100 text-sm p-3 rounded-md" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Password" className="col-span-1 mb-4 bg-slate-100 text-sm p-3 rounded-md" />
        <button className='bg-yellow-500 rounded-2xl text-white p-3 font-normal text-xs '>SIGN UP</button>
      </form >
    </div >

  )
}

export default SignUp