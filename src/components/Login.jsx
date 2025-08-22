import React from 'react'
import { useNavigate } from 'react-router'

const Login = () => {
  const navigate = useNavigate();
  const handleclick = () => {
     navigate("/profile");
  }

  return (
    
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>

      <div className='bg-white shadow-lg rounded-2xl p-6 w-100 h-70 text-center'>
           
           <h1 className='font-bold text-2xl'>Sign in to your PopX account</h1>

           <input type="email" placeholder='Enter email address' className='border-1 mt-6 rounded-lg w-full p-1.25' />

           <input type="password" placeholder='Enter password' className='border-1 mt-4 rounded-lg w-full p-1.25' />

           <button onClick={handleclick} className='mt-4 w-full bg-blue-600 p-2 rounded-lg text-white hover:bg-blue-500 cursor-pointer'>Create Account</button>

           
      </div>

    </div>


  )
}

export default Login