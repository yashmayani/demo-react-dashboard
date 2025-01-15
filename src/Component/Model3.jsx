import React from 'react'
import { RiCloseLargeFill } from "react-icons/ri";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { RiCheckboxCircleFill } from "react-icons/ri";


const Model3 = () => {
    return (
        <>
            <div className='w-[480px] bg-white rounded-2xl p-7'>
                <div className='flex justify-between items-center'>
                    <div className='text-2xl font-semibold'>Delete My Account</div>
                    <div><RiCloseLargeFill />
                    </div>
                </div>
                <hr className='mt-5'></hr>
                <div className='mt-3 text-[#0C0C0C8A]'>
                    Hold on! Before you go, are you certain you want to delete your account? This action is final and will erase all your information.
                </div>
                <div className='mt-5'>
                    <div className='flex justify-between iterms-center'>
                        <div className='font-semibold'>i am no longer using my account</div>
                        <div><RiCheckboxBlankCircleLine size={20} color='#EF5A24' /></div>
                    </div>
                    <hr className='my-3'></hr>
                    <div className='flex justify-between iterms-center'>
                        <div className='font-semibold'>The service is too expensive</div>
                        <div><RiCheckboxBlankCircleLine size={20} color='#EF5A24' /></div>
                    </div>
                    <hr className='my-3'></hr>
                    <div className='flex justify-between iterms-center'>
                        <div className='font-semibold'>I want to change my phone number</div>
                        <div><RiCheckboxBlankCircleLine size={20} color='#EF5A24' /></div>
                    </div>
                    <hr className='my-3'></hr>
                    <div className='flex justify-between iterms-center'>
                        <div className='font-semibold'>I don’t understand how to use</div>
                        <div><RiCheckboxBlankCircleLine size={20} color='#EF5A24' /></div>
                    </div>
                    <hr className='my-3'></hr>
                    <div className='flex justify-between iterms-center'>
                        <div className='font-semibold'>Other</div>
                        <div><RiCheckboxCircleFill size={20} color='#EF5A24' />
                        </div>
                    </div>
                    <hr className='my-3'></hr>
                </div>
                <button type="submit" className="w-full mt-5 text-white bg-[#EF5A24]  font-medium rounded-lg text-sm px-5 py-2.5 text-center">DELETE MY ACCOUNT</button>

            </div>
        </>
    )
}

export default Model3
