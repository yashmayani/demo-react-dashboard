import { Avatar, Card, CardActions, CardHeader, CardMedia, Dialog, IconButton } from '@mui/material'
import React from 'react'
import { VscChromeClose } from "react-icons/vsc";


const ViewProject = ({ handleClose, open, currDate }) => {
    return (
        <Dialog onClose={handleClose} open={open}
            maxWidth="xl" >
            <div className='p-4'>
                <div className='flex justify-end cursor-pointer ' onClick={handleClose}><VscChromeClose /></div>
                <div className='flex justify-center mb-5 font-bold text-2xl'>View Project</div>
                <hr></hr>
                <div className='flex gap-2 pt-5'>
                    <div className='font-semibold'>Project Name :</div>
                    <div> {currDate?.project_name}</div>
                </div>
                <div className='flex gap-2'>
                    <div className='font-semibold'>Project Id :</div>
                    <div>{currDate?.project_id}</div>
                </div>
                <div className='flex gap-2'>
                    <div className='font-semibold'> Tracker :</div>
                    <div>{currDate?.tracker}</div>
                </div>
                <div className='flex gap-2'>
                    <div className='font-semibold'>Technology Stack :</div>
                    <div>{currDate?.technology_stack}</div>
                </div>
                <div className='flex gap-2'>
                    <div className='font-semibold'>Start Date :</div>
                    <div>{currDate?.start_date}</div>
                </div>
                <div className='flex gap-2'>
                    <div className='font-semibold'>Client Name :</div>
                    <div>{currDate?.client_name}</div>
                </div>
                <div className='flex gap-2'>
                    <div className='font-semibold'>Project Manager :</div>
                    <div>{currDate?.project_manager}</div>
                </div>
                <div className='flex gap-2'>
                    <div className='font-semibold'>Team :</div>
                    <div>{currDate?.team}</div>
                </div>
            </div>
        </Dialog>
    )
}

export default ViewProject
