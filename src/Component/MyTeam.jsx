import React, { useEffect } from 'react'
import { useState } from 'react';

const MyTeam = () => {

  const [search, setSearch] = useState();


  const data = [
    {
      name: "Dhaval Bhimani",
      email: "dhavalbhimani.software@gmail.com",
      position: "Admin"
    },
    {
      name: "Ankit Kathiriya",
      email: "ankitkathiriya.software@gmail.com",
      position: "Admin"
    },
    {
      name: "Sonali Malaviya",
      email: "sonalimalaviya.software@gmail.com",
      position: "HR"
    },
    {
      name: "Shivang Patel",
      email: "shivangpatel.software@gmail.com",
      position: "BDE"
    },
    {
      name: "Hardik Bhimani",
      email: "hardikbhimani.software@gmail.com",
      position: "PM"
    },
    {
      name: "Bhavesh Tank",
      email: "bhaveshtank.software@gmail.com",
      position: "PM"
    },
    {
      name: "Parth Miroliya",
      email: "parthmiroliya.software@gmail.com",
      position: "TL"
    },
    {
      name: "Parth Buha",
      email: "parthbuha.software@gmail.com",
      position: "TL"
    },
    {
      name: "Yash Mayani",
      email: "yashmayani.software@gmail.com",
      position: "Backend Developer"
    },
    {
      name: "Piyush Tejani",
      email: "piyushtejani.software@gmail.com",
      position: "Backend Developer"
    },

    {
      name: "Santosh Dudhat",
      email: "santoshdudhat.software@gmail.com",
      position: "IOS Developer"
    },
    {
      name: "Raxil Dudhat",
      email: "raxildudhat.software@gmail.com",
      position: "IOS Developer"
    },

    {
      name: "Sagar Chotaliya",
      email: "sagarchotaliya.software@gmail.com",
      position: "UI/UX Designer"
    },
    {
      name: "Drashti Khanpara",
      email: "drashtikhanpara.software@gmail.com",
      position: "UI/UX Designer"
    },
    {
      name: "Hignesh Nasit",
      email: "higneshnasit.software@gmail.com",
      position: "Android Developer"
    },
    {
      name: "Daxit Kakadiya",
      email: "daxitakakadiya.software@gmail.com",
      position: "Android Developer"
    },
    {
      name: "Keyur Dudhat",
      email: "keyurdudhat.software@gmail.com",
      position: "Flutter Developer"
    },
    {
      name: "Drashti Kanani",
      email: "drashtikanani.software@gmail.com",
      position: "Flutter Developer"
    },

  ]
  const [filterData, setFilterData] = useState(data);

  useEffect(() => {
    if (search?.length > 0) {
      const fildata = data.filter((d) => d.name.toLowerCase().includes(search.toLowerCase()) || d.position.toLowerCase().includes(search.toLowerCase()));
      setFilterData(fildata)
    } else {
      setFilterData(data)
    }
  }, [search])

  return (
   
        <>
          <div className='text-4xl font-bold text-black mb-5'>
            Employee
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
                <input value={search} onChange={e => setSearch(e.target.value)} type="search" id="default-search" autoComplete={'off'} className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required />

              </div>
            </form>
          </div>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Position
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {filterData.map((d, index) => {
                  return <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {d.name}
                    </th>
                    <td className="px-6 py-4">
                      {d.email}
                    </td>
                    <td className="px-6 py-4">
                      {d.position}
                    </td>

                    <td className="px-6 py-4">
                      <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                    </td>
                  </tr>
                })}
              </tbody>
            </table>
          </div>
      
    </>
  )
}

export default MyTeam
