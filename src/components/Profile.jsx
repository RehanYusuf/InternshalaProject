import React from 'react'
import { useNavigate } from 'react-router'

const Profile = () => {
  
    const navigate = useNavigate()
    const handleclick = () => {
        navigate("/");
    }

  return (
     
    <div className='flex justify-center pt-10 min-h-screen bg-gray-100'>
        
        <div className='bg-white shadow-lg rounded-2xl p-6 w-110 h-70 text-center'>
 
           <div className='flex flex-row justify-between'>

            <h1 className='font-bold text-black text-lg'>Account Settings</h1>
            <button onClick={handleclick} className='text-red-500 cursor-pointer hover:text-red-800'>Logout</button>

           </div>

           <hr className='text-gray-300 mt-5' />

           <div className='mt-2 flex flex-row gap-4'>

               <img src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg" className='h-20' />

               <div>
                <h1 className='font-bold'>marry</h1>
                <p className='text-gray-400'>marry@gmail.com</p>
               </div>

           </div>

           <hr className='mt-2 text-gray-300' />

           <p className='mt-2 text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, repellendus!</p>
           
           
        </div>
      

    </div>


  )
}

export default Profile