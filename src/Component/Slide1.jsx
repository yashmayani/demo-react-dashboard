import React from 'react'
import { FaPhotoVideo } from "react-icons/fa";

const Slide1 = () => {
    return (
        <>
            <div className='w-full border border-[#CACACA] bg-white rounded-2xl p-7'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className='w-full border border-[#CACACA] bg-white rounded-2xl p-7'>
                        <div className='flex flex-col justify-center items-center my-20'>
                            <div><FaPhotoVideo size={70} color='#0C0C0C8A' /></div>
                            <div className='text-[#0C0C0C8A] my-5 text-xl'>Drag photos or video here</div>
                            <button type="submit" className="w-[250px] text-white bg-[#EF5A24] font-medium rounded-lg text-sm px-5 py-2.5 text-center">SELECT FROM COMPUTER</button>
                        </div>
                    </div>

                    <div>
                        <div className='w-full h-[200px] border border-[#CACACA] bg-white rounded-2xl p-7'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestib ulum porttitor egestas orci, vitae ullamcorper risus consectetur id. Donec at velit vestibulum, rutrum massa quis, porttitor
                        </div>
                        <div className='flex flex-col gap-7 md:flex-row mt-[130px]'>
                            <button type="submit" className="w-full md:w-[48%] mt-5 text-white bg-[#EF5A24] font-medium rounded-lg text-sm px-5 py-2.5 text-center">SHARE</button>
                            <button type="submit" className="w-full md:w-[48%] mt-5 text-black bg-white border border-[#CACACA] font-medium rounded-lg text-sm px-5 py-2.5 text-center">CANCEL</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Slide1;
