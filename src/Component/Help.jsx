import React from 'react'
import { MdOutlineDone } from "react-icons/md";
import { CgBoy } from "react-icons/cg";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";



const Help = () => {
  return (
    <>
      <div className='w-[480px] bg-white rounded-2xl p-4'>
        <div className='flex justify-center'>
          <div className='bg-[#EF5A24] rounded-full p-3'>
            <MdOutlineDone size={25} color='white' />
          </div>
        </div>
        <div className='text-center text-xl font-bold mt-3 '>Your Booking is Confirmed!</div>
        <div className='text-center text-xs text-[#0C0C0C8A] mt-2'>Your call is scheduled, get ready to connect!</div>
        <hr className='mt-5'></hr>
        <div className='text-center text-[#F1580C] mt-3 font-bold'>Booking ID - 20231104</div>
        <div className='flex justify-center mt-4'>
          <div className='bg-[#EF5A24] rounded-full p-2'><CgBoy size={25} color='white' />
          </div>
        </div>
        <div className='text-center font-bold mt-3'>David Smith</div>
        <div className='flex gap-5 justify-center items-center mt-3 text-[#0C0C0C8A]'>
        <div className='flex gap-3'>
          <div className='flex justify-center items-center'><FaRegCalendarAlt /></div>
          <div>Wed 24th May 2023</div>
        </div>
        <div>|</div>
        <div className='flex gap-3'>
          <div className='flex justify-center items-center'><MdOutlineAccessTime /> </div>
          <div>10:00 AM - 10:30 AM</div>
        </div>
        </div>
        <button type="submit" className="w-full mt-5 text-white bg-[#EF5A24]  font-medium rounded-lg text-sm px-5 py-2.5 text-center">DONE</button>

      </div>
    </>
  )
}

export default Help
