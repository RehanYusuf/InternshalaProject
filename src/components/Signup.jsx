import React from 'react'
import { useNavigate } from 'react-router'

const Signup = () => {
  
    const navigate = useNavigate();
    const handlebutton = () => {
        navigate("/login");
    }

  return (
    
     <div className='flex justify-center items-center min-h-screen bg-gray-100'>

      <div className='bg-white shadow-lg rounded-2xl p-6 w-100 h-115 text-center'>
           <h1 className='font-bold text-2xl'>Create your PopX account</h1>

           <div className='mt-6'>

              <input type="text" placeholder='Full Name' className='border-1 p-1.25 w-full rounded-lg' />
              <input type="text" placeholder='Phone number'  className='border-1 p-1.25 w-full rounded-lg mt-4' />
              <input type="email" placeholder='email address'  className='border-1 p-1.25 w-full rounded-lg mt-4' />
              <input type="password" placeholder='Password'  className='border-1 p-1.25 w-full rounded-lg mt-4' />
              <input type="text" placeholder='Company Name'  className='border-1 p-1.25 w-full rounded-lg mt-4' />
               
           </div>

           
            <div >
                <p className='mt-4'>Are you an Agency?</p>
                <input type="checkbox"/>
                yes
                <input type="checkbox"/>
                no
                
            </div>

            <button onClick={handlebutton} className='mt-2 bg-blue-600 text-white p-2 rounded-lg w-full hover:bg-blue-500 cursor-pointer'>Create Account</button>
           
      </div>

    </div>

  )
}

export default Signup