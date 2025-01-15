import React from 'react'
import { CgBoy } from "react-icons/cg";

const Slide2 = () => {
    return (
        <>
            <div className='flex flex-col sm:flex-row justify-start mt-4 gap-7'>
                <div className='bg-[#EF5A24] rounded-full p-2'>
                    <CgBoy size={60} color='white' />
                </div>
                <div>
                    <div className='font-bold mt-3 text-xl'>David Smith</div>
                    <div className='flex flex-col sm:flex-row gap-5'>
                        <div className='flex gap-4'>
                            <div className='font-bold text-[#EF5A2A]'>50k</div>
                            <div> Followers</div>
                        </div>
                        <div className='flex gap-3'>
                            <div className='font-bold text-[#EF5A24]'>5 stars</div>
                            <div> Insider rating</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full mt-7 border border-[#CACACA] bg-white rounded-2xl p-7'>
                <div className='font-bold text-xl'>Schedules</div>
                <hr className='my-5' />
                <div className='font-bold text-lg'>Picking Duration of the Call</div>
                <div className='flex flex-wrap gap-5 mt-5'>
                    <div className='border border-[#CACACA] rounded-lg py-1 px-20 font-semibold cursor-pointer'>15 min</div>
                    <div className='border border-[#CACACA] rounded-lg py-1 px-20 font-semibold cursor-pointer bg-[#EF5A2A] text-white'>30 min</div>
                    <div className='border border-[#CACACA] rounded-lg py-1 px-20 font-semibold cursor-pointer'>45 min</div>
                </div>
                <hr className='my-7' />
                <div className='font-bold text-lg'>Available Time</div>
                <div className='flex flex-wrap gap-5 mt-5'>
                    <div className='border border-[#CACACA] rounded-lg py-1 px-20 font-semibold cursor-pointer'>09:00 am</div>
                    <div className='border border-[#CACACA] rounded-lg py-1 px-20 font-semibold cursor-pointer'>09:30 am</div>
                    <div className='border border-[#CACACA] rounded-lg py-1 px-20 font-semibold cursor-pointer bg-[#EF5A2A] text-white'>10:00 am</div>
                    <div className='border border-[#CACACA] rounded-lg py-1 px-20 font-semibold cursor-pointer'>10:30 am</div>
                    <div className='border border-[#CACACA] rounded-lg py-1 px-20 font-semibold cursor-pointer'>11:00 am</div>
                    <div className='border border-[#CACACA] rounded-lg py-1 px-20 font-semibold cursor-pointer'>11:30 am</div>
                </div>
            </div>
            
            <button type="submit" className="w-full mt-5 text-white bg-[#EF5A24] font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                $25 | SCHEDULE A CALL 
            </button>
        </>
    )
}

export default Slide2
