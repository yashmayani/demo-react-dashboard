import React, { useEffect } from 'react'
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import { IoMdClose } from "react-icons/io";
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ViewProject from './ViewProject';

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [currDate, setCurrentData] = useState();
  const [search, setSearch] = useState();
  const handleClose = () => {
    setOpen(false)
  }

  const data = [
    {
      project_name: "Comicfy",
      project_id: "7vUFGeA",
      tracker: "Dhaval - Upwork",
      technology_stack: "JavaScript, Python",
      start_date: "2024-08-14",
      client_name: "Kush Shah",
      project_manager: "Parth Miroliya",
      team: "2"
    },
    {
      project_name: "Motioon",
      project_id: "TINstQc",
      tracker: "Ankit - TopTracker",
      technology_stack: "C#, Java",
      start_date: "2024-09-12",
      client_name: "Remi-France",
      project_manager: "Ankit Kathiriya",
      team: "6"
    },
    {
      project_name: "Nexus",
      project_id: "qmIYTHZ",
      tracker: "Piyush Korat - TopTracker",
      technology_stack: "JavaScript, Python",
      start_date: "2024-12-03",
      client_name: "AnkitBhai Kathiriya",
      project_manager: "PiyushBhai Korat",
      team: "7"
    },
    {
      project_name: "It Park",
      project_id: "DRFGJRE2458",
      tracker: "Dhaval Bhimani -  Upwork",
      technology_stack: "C#, Java",
      start_date: "2024-12-03",
      client_name: "AnkitBhai Kathiriya",
      project_manager: "Hardikbhai Bhimani",
      team: "2"
    }
  ]
  
  const [filterData, setFilterData] = useState(data);

  useEffect(() => {
    if (search  ?.length > 0) {
      const fildata = data.filter((d) => d.project_name.toLowerCase().includes(search.toLowerCase()) || d.project_id.toLowerCase().includes(search.toLowerCase()) || d.tracker.toLowerCase().includes(search.toLowerCase()) || d.technology_stack.toLowerCase().includes(search.toLowerCase()) || d.start_date.toLowerCase().includes(search.toLowerCase()) || d.client_name.toLowerCase().includes(search.toLowerCase()) || d.project_manager.toLowerCase().includes(search.toLowerCase()) || d.team.toLowerCase().includes(search.toLowerCase()));
      setFilterData(fildata)
    } else {
      setFilterData(data)
    }
  }, [search])
  

  const handleOpen = (d) => {
    setCurrentData(d)
    setOpen(true)
  }
  
  return (
    <>
      <div className='text-4xl font-bold text-black mb-5'>
        Projects
      </div>
      <div className='mb-5 '>
        <form>
          <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input value={search} onChange={e => setSearch(e.target.value)} type="search" id="default-search" autoComplete={'off'} className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
          </div>
        </form>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                PROJECT NAME
              </th>
              <th scope="col" className="px-6 py-3">
                PROJECT ID
              </th>
              <th scope="col" className="px-6 py-3">
                TRACKER
              </th>
              <th scope="col" className="px-6 py-3">
                TECHNOLOGY STACK
              </th>
              <th scope="col" className="px-6 py-3">
                START DATE
              </th>
              <th scope="col" className="px-6 py-3">
                CLIENT NAME
              </th>
              <th scope="col" className="px-6 py-3">
                PROJECT MANAGER
              </th>
              <th scope="col" className="px-6 py-3">
                TEAM
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {filterData.map((d, index) => {
              return <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {d.project_name}
                </th>
                <td className="px-6 py-4">
                  {d.project_id}
                </td>
                <td className="px-6 py-4">
                  {d.tracker}
                </td>
                <td className="px-6 py-4">
                  {d.technology_stack}
                </td>
                <td className="px-6 py-4">
                  {d.start_date}
                </td>
                <td className="px-6 py-4">
                  {d.client_name}
                </td>
                <td className="px-6 py-4">
                  {d.project_manager}
                </td>
                <td className="px-6 py-4">
                  {d.team}
                </td>
                <td className="px-6 py-4">
                  <a href="#" onClick={() => handleOpen(d)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                </td>
              </tr>
            })}
          </tbody>
        </table>
      </div>

      <ViewProject handleClose={handleClose} open={open} currDate={currDate} />

    </>
  )
}

export default Projects;
