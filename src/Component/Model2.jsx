import React from 'react'
import { CgBoy } from "react-icons/cg";
import { MdStarRate } from "react-icons/md";
import { RiCloseLargeFill } from "react-icons/ri";



const Model2 = () => {
  return (
    <>
      <div className='w-[480px] bg-white rounded-2xl p-4'>
      <div className='flex justify-end mr-6 mt-3'><RiCloseLargeFill size={20}/>
      </div>
        <div className='flex justify-center mt-4'>
          
          <div className='bg-[#EF5A24] rounded-full p-2'><CgBoy size={60} color='white' />
          </div>
        </div>
        <div className='text-center font-bold mt-3 text-xl'>David Smith</div>

        <div className='border p-4 rounded-md mx-6 mt-6'>
          <div className='text-center text-[#0C0C0C8A]'>How was your experience with our video call expert? We'd love to hear your feedback!</div>
          <div className='flex justify-center gap-2 mt-3'>
            <div><MdStarRate size={30} color='#0C0C0C8A'/></div>
            <div><MdStarRate size={30} color='#0C0C0C8A'/></div>
            <div><MdStarRate size={30} color='#0C0C0C8A'/></div>
            <div><MdStarRate size={30} color='#0C0C0C8A'/></div>
            <div><MdStarRate size={30} color='#0C0C0C8A'/></div>
          </div>
        </div>
        <button type="submit" className="w-full mt-5 text-white bg-[#EF5A24]  font-medium rounded-lg text-sm px-5 py-2.5 text-center">DONE</button>

      </div>
    </>
  )
}

export default Model2
