import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = () => {

    const navigate = useNavigate();

    const handlebutton1 = () => {
         navigate("/signup");
    }
    const handlebutton2 = () => {
         navigate("/login");
    }

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>

      <div className='bg-white shadow-lg rounded-2xl p-6 w-90 h-80 text-center'>

           <h1 className='text-2xl font-bold'>Welcome To Pop X</h1>
           <p className='mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, praesentium.</p>

           <button onClick={handlebutton1} className='mt-6 bg-blue-600 text-white p-2 rounded-lg w-full hover:bg-blue-500 cursor-pointer'>Create Account</button>

           <button onClick={handlebutton2} className='mt-6 bg-gray-300 text-black p-2 rounded-lg w-full hover:bg-gray-200 cursor-pointer'>Already registered? login</button>
           
      </div>

    </div>
  )
}

export default Card