import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { LuLayoutDashboard } from "react-icons/lu";
import { BiChart } from "react-icons/bi";
import { BiBookmarkAltPlus } from "react-icons/bi";
import { BiCandles } from "react-icons/bi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { RiSettingsLine } from "react-icons/ri";
import { TbHelpOctagon } from "react-icons/tb";
import { TbLogout } from "react-icons/tb";
import LogoutModal from './LogoutModal';


import Dialog from '@mui/material/Dialog';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { IoMdClose } from "react-icons/io";
import { Padding } from '@mui/icons-material';
const Layout = ({ children }) => {


    const [open, setOpen] = useState(false);
    const [loading, SetLoading] = useState(false);

    const handleClose = () => {
        setOpen(false)
    }


    const handleLogout = () => {
        localStorage.removeItem("authToken")
        SetLoading(false);
        window.location.reload()
        window.location.href = '/';

    };

    return (
        <>
            <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start rtl:justify-end">
                            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                                <span className="sr-only">Open sidebar</span>
                                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                                </svg>
                            </button>
                            <a href="https://flowbite.com" className="flex ms-2 md:me-24">
                                <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 me-3" alt="FlowBite Logo" />
                                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Portal</span>
                            </a>
                        </div>
                        <div className="flex items-center">
                            <div className="flex items-center ms-3">
                                <div>
                                    <button type="button" className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                                        <span className="sr-only">Open user menu</span>
                                        <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo" />
                                    </button>
                                </div>
                                <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
                                    <div className="px-4 py-3" role="none">
                                        <p className="text-sm text-gray-900 dark:text-white" role="none">
                                            Neil Sims
                                        </p>
                                        <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                                            neil.sims@flowbite.com
                                        </p>
                                    </div>
                                    <ul className="py-1" role="none">
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Earnings</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div style={{ marginLeft: "266px", marginTop: "80px", padding: "20px" }}>
                {children}
            </div>
            <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
                <div className="flex flex-col   justify-between h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                    <ul className="space-y-4 font-medium">
                        <li>
                            <NavLink to="/" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <div><LuLayoutDashboard size={20} /></div>
                                <span className="ms-3">Dashboard</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/projects" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <div><BiChart size={20} /></div>
                                <span className="flex-1 ms-3 whitespace-nowrap">Projects</span>

                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/transaction" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <div><BiBookmarkAltPlus size={20} /></div>
                                <span className="flex-1 ms-3 whitespace-nowrap">Transaction</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/my team" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                    <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">My Team</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/research data" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <div><BiCandles size={20} /></div>
                                <span className="flex-1 ms-3 whitespace-nowrap">Research Data</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/reports" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <div><BiMessageSquareDetail size={20} />
                                </div>
                                <span className="flex-1 ms-3 whitespace-nowrap">Reports</span>
                            </NavLink>
                        </li>
                        <hr></hr>
                        <li>
                            <NavLink to="/setting" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <div><RiSettingsLine size={20} /></div>
                                <span className="flex-1 ms-3 whitespace-nowrap">Setting</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/help" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <div><TbHelpOctagon size={20} /></div>
                                <span className="flex-1 ms-3 whitespace-nowrap">Help</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/model2" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <div><TbHelpOctagon size={20} /></div>
                                <span className="flex-1 ms-3 whitespace-nowrap">Model-2</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/model3" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <div><TbHelpOctagon size={20} /></div>
                                <span className="flex-1 ms-3 whitespace-nowrap">Model-3</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/model4" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <div><TbHelpOctagon size={20} /></div>
                                <span className="flex-1 ms-3 whitespace-nowrap">Model-4</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/slide1" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <div><TbHelpOctagon size={20} /></div>
                                <span className="flex-1 ms-3 whitespace-nowrap">Slide-1</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/slide2" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <div><TbHelpOctagon size={20} /></div>
                                <span className="flex-1 ms-3 whitespace-nowrap">Slide-2</span>
                            </NavLink>
                        </li>

                    </ul>


                    <div>
                        <NavLink
                            to="#"
                            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            onClick={() => setOpen(true)}
                        >
                            <div>
                                <TbLogout size={20} />
                            </div>
                            {/* <span className="flex-1 ms-3 whitespace-nowrap">Log Out</span> */}
                            <span className="flex-1 ms-3 whitespace-nowrap">Log Out</span>

                        </NavLink>
                    </div>
                </div>
            </aside>
            <>{
                loading == true ?
                    <>
                        <div className='flex justify-center items-center h-[100vh]'>
                            <div className="dot-spinner">
                                <div className="dot-spinner__dot"></div>
                                <div className="dot-spinner__dot"></div>
                                <div className="dot-spinner__dot"></div>
                                <div className="dot-spinner__dot"></div>
                                <div className="dot-spinner__dot"></div>
                                <div className="dot-spinner__dot"></div>
                                <div className="dot-spinner__dot"></div>
                                <div className="dot-spinner__dot"></div>
                            </div>
                        </div>
                        </> :
                    <>
                        <Dialog onClose={handleClose} open={open} >
                            <Card >
                                <CardHeader

                                    action={
                                        <IconButton aria-label="settings" onClick={handleClose}>
                                            <IoMdClose />
                                        </IconButton>
                                    }
                                />
                                <div className='flex flex-col justify-center items-center gap-3 p-4'>
                                    <div><TbLogout size={35} /></div>
                                    <div className='font-bold'>Log Out</div>
                                    <div className='w-[76%] text-center'>Are you sure you want to log out from this account ?</div>
                                    <button onClick={handleLogout} className='border rounded-md p-2 w-[300px] mb-4 bg-[#dc3545] text-white'>Logout</button>
                                </div>



                            </Card>
                        </Dialog>
                    </>
            }
            </>
        </>
    )
}


export default Layout
