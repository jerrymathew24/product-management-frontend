import React from 'react'

const SignUp = () => {
  return (
    <div className="grid grid-cols-10 gap-4 items-center">
      <div class="col-span-4 bg-cyan-800 flex flex-col items-center justify-center h-screen text-white">
        <h1 className='text-2xl font-bold'>Welcome Back!</h1>
        <p>To keep connected with us please login with your personal info</p>
        <button className='border border-white rounded-2xl text-white p-3 m-3 font-normal text-xs '>SIGN IN</button>
      </div>

      <div class="col-span-6 flex flex-col items-center justify-center h-screen">
        <h1 class="text-center text-2xl font-bold text-yellow-500 mb-5">Create Account</h1>
        <input type="text" placeholder="Name" className="col-span-1 mb-4 bg-slate-100 text-sm p-3 rounded-md" />
        <input type="email" placeholder="Email" className="col-span-1 mb-4 bg-slate-100 text-sm p-3 rounded-md" />
        <input type="password" placeholder="Password" className="col-span-1 mb-4 bg-slate-100 text-sm p-3 rounded-md" />
        <button className='bg-yellow-500 rounded-2xl text-white p-3 font-normal text-xs '>SIGN UP</button>
      </div>


    </div>

  )
}

export default SignUp