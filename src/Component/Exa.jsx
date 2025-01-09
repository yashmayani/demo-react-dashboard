import { Password } from '@mui/icons-material';
import React, { useState } from 'react'

const Exa = () => {
  const [name, SetName] = useState('');
  const [email, SetEmail] = useState('');
  const [phone, SetPhone] = useState('');

  const click =() =>{
        const obj = {
          "Name" : name,
          "Email" : email,
          "Phone" : phone
        }
        console.log (obj);
  }
  return (
    <>
      <div>
        <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name :</label>
        <input type="text" name="name" value={name} onChange={(e) => SetName(e.target.value)} id="name" placeholder="Enter your name" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
      </div>
      <div>
        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email :</label>
        <input type="email" name="email" value={email} onChange={(e) => SetEmail(e.target.value)} id="email" placeholder="Enter your email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
      </div>
      <div>
        <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone No :</label>
        <input type="num" name="phone" value={phone} onChange={(e) => SetPhone(e.target.value)} id="phone" placeholder="Enter your Phone no" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
      </div>
      <div className='flex justify-center mt-5'>
      <button onClick={click} className=' rounded-md p-2  bg-black text-white'>Click Me</button>
      </div>
      
    </>
  )
}

export default Exa
