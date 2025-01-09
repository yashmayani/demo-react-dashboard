import React, { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import { IoMdClose } from "react-icons/io";
import { TbLogout } from "react-icons/tb";
import { toast } from 'react-toastify';



const ResearchData = () => {
  // State to store the fetched users
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [openmodel, setOpenModel] = useState(false);
  const [openmodelEdit, setOpenModelEdit] = useState(false);
  const [firstname, SetFirstName] = useState('');
  const [lastname, SetLastName] = useState('');
  const [email, SetEmail] = useState('');
  const [phone, SetPhone] = useState('');
  const [currData, SetCurrData] = useState('');


  const [editfirstname, setEditFirstName] = useState('');
  const [editlastname, setEditLastName] = useState('');
  const [editemail, setEditEmail] = useState('');
  const [editphone, setEditPhone] = useState('');


  const usersPerPage = 12; // You can change this number as per your requirement




  const handleClose = () => {
    setOpen(false)
  }

  const handleClose1 = () => {
    setOpenModel(false)
  }

  const handleClose2 = () => {
    setOpenModelEdit(false)
  }


  // create API  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = {
        "account_type": 0,
        "event_id": 83,
        "first_name": firstname,
        "last_name": lastname,
        "email": email,
        "phone": phone,
      };

      const authToken = localStorage.getItem('authToken');

      fetch('https://api.happiclips.com/api/guests/create', {
        method: 'POST',
        headers: new Headers({
          'Authorization': `Bearer ${authToken}`,
          'Content-Type': 'application/json'       // Set the content type to JSON
        }),
        body: JSON.stringify(userData),            
      })
        .then(response => response.json())            // Convert the response to JSON
        .then(data => console.log('Success:', data))  
        .catch((error) => console.error('Error:', error));
      toast.success("Data added successfully");
      SetFirstName('');
      SetLastName('');
      SetEmail('');
      SetPhone('');
      fetchData()
      setOpen(false)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


// edit API  

  const handleSubmitEdit = async (e) => {
    e.preventDefault();

    try {
      const userData = {
        "account_type": 0,
        "event_id": 83,
        "first_name": editfirstname,
        "last_name": editlastname,
        "email": editemail,
        "phone": editphone,
      };

      const authToken = localStorage.getItem('authToken');

      fetch(`https://api.happiclips.com/api/guests/update/${currData?.id}`, {
        method: 'POST',
        headers: new Headers({
          'Authorization': `Bearer ${authToken}`,
          'Content-Type': 'application/json'       // Set the content type to JSON
        }),
        body: JSON.stringify(userData),             // Stringify user data to send as JSON
      })
        .then(response => {response.json()
          fetchData();
        })            // Convert the response to JSON
        .then(data => console.log('Success:', data))  // Handle success
        .catch((error) => console.error('Error:', error));
      toast.success("Data added successfully");
     
      setOpenModelEdit(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };



  // Fetch data from the API when the component mounts

  const fetchData = async () => {
    try {
      const authToken = localStorage.getItem('authToken');

      const response = await fetch('https://api.happiclips.com/api/guests?page=1', {
        method: 'POST',
        headers: new Headers({
          'Authorization': `Bearer ${authToken}`,
          'Content-Type': 'application/json'       // Set the content type to JSON
        }),
      })

      const data = await response.json();
      setUsers(data.data);  // Assuming the API returns an object with a "users" property
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {

    fetchData();
  }, []);
  console.log(users);
  // Filter users based on the search term
  const filteredUsers = users.length > 0 && users.filter(user => {
    // const lowercasedSearch = search.toLowerCase();
    // return (
    //   user.firstName.toLowerCase().includes(lowercasedSearch) ||
    //   user.lastName.toLowerCase().includes(lowercasedSearch) ||
    //   user.email.toLowerCase().includes(lowercasedSearch) ||
    //   user.phone.toLowerCase().includes(lowercasedSearch) ||
    //   user.gender.toLowerCase().includes(lowercasedSearch) ||
    //   user.age.toString().toLowerCase().includes(lowercasedSearch)
    // );
  });

  // Get the current page users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.length > 0 && filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle next page
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Handle previous page
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };


  // Delete API 

  const handleOpenDelete = (user) => {
    SetCurrData(user)
    setOpenModel(true)
  }

  const handleDelete = () => {
    const authToken = localStorage.getItem('authToken');

    fetch(`https://api.happiclips.com/api/guests/delete/${currData?.id}`, {
      method: 'POST',
      headers: new Headers({
        'Authorization': `Bearer ${authToken}`,
        'Content-Type': 'application/json'       // Set the content type to JSON
      }),
    })
      .then(response => {response.json()
        fetchData();
      })            // Convert the response to JSON
      .then(data => console.log('Success:', data))  // Handle success
      .catch((error) => console.error('Error:', error));
    toast.success("Data deleted successfully")
   
    setOpenModel(false)
  }

  const handleOpenEdit = (user) => {
    setEditFirstName(user.first_name)
    setEditLastName(user.last_name)
    setEditEmail(user.email)
    setEditPhone(user.phone)
    SetCurrData(user)
    setOpenModelEdit(true)
  }

  return (
    <>
      <div className='mb-5'>
        <form>
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              type="search"
              id="default-search"
              autoComplete={'off'}
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
              required
            />
          </div>
        </form>
      </div>
      <div className='flex justify-end mr-2'>
        <button onClick={() => setOpen(true)} className='bg-black text-white py-2.5 px-10 rounded-lg mb-4'>Create</button>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Id</th>
              <th scope="col" className="px-6 py-3">First Name</th>
              <th scope="col" className="px-6 py-3">Last Name</th>
              <th scope="col" className="px-6 py-3">Email</th>
              <th scope="col" className="px-6 py-3">Phone</th>
              <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {users.data && users.data.length > 0 ? (
              users.data.map((user) => (
                <tr key={user.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {user.id}
                  </th>
                  <td className="px-6 py-4">{user.first_name}</td>
                  <td className="px-6 py-4">{user.last_name}</td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">{user.phone}</td>
                  <td className="px-6 py-4">
                    <a href="#" onClick={() => handleOpenEdit(user)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                  </td>
                  <td className="px-6 py-4">
                    <a href="#" onClick={() => handleOpenDelete(user)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center px-6 py-4">No results found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg disabled:opacity-50"
        >
          Previous
        </button>
        <div className="text-gray-700">
          Page {currentPage} of {totalPages}
        </div>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg disabled:opacity-50"
        >
          Next
        </button>
      </div>
      <Dialog onClose={handleClose} open={open} fullWidth>
        <form onSubmit={handleSubmit}>
          <div>
            <div className='flex justify-end'>
              <IconButton aria-label="settings" onClick={handleClose}>
                <IoMdClose />
              </IconButton>

            </div>

            <div className='p-4'>
              <div>
                <label>First Name :</label>
                <input type="text" name="firstname" value={firstname} onChange={(e) => SetFirstName(e.target.value)} id="firstname" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your First Name" required="" />
              </div>
              <div>
                <label>Last Name :</label>
                <input type="text" name="lastname" value={lastname} onChange={(e) => SetLastName(e.target.value)} id="lastname" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Last Name" required="" />
              </div>
              <div>
                <label>Email :</label>
                <input type="Email" name="email" value={email} onChange={(e) => SetEmail(e.target.value)} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="company@gmail.com" required="" />
              </div>
              <div>
                <label>Phone No :</label>
                <input type="number" name="phone" value={phone} onChange={(e) => SetPhone(e.target.value)} id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Phone No." required="" />
              </div>
              <button type="submit" className="w-full mt-5 text-white bg-[#000] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Submit</button>

            </div>



          </div>
        </form>
      </Dialog>

      {/* delete model */}

      <Dialog onClose={handleClose1} open={openmodel} fullWidth>
        <div>
          <div className='flex justify-end'>
            <IconButton aria-label="settings" onClick={handleClose1}>
              <IoMdClose />
            </IconButton>

          </div>

          <div className='p-4'>
            <div>
              <label>First Name : </label>
              {currData?.first_name}
            </div>
            <div>
              <label>Last Name : </label>
              {currData?.last_name}
            </div>
            <div>
              <label>Email : </label>
              {currData?.email}
            </div>
            <div>
              <label>Phone No : </label>
              {currData?.phone}
            </div>
            <button onClick={() => handleDelete()} type="submit" className="w-full mt-5 text-white bg-[#000] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Delete</button>

          </div>



        </div>

      </Dialog>


      {/* edit model */}

      <Dialog onClose={handleClose2} open={openmodelEdit} fullWidth>
        <form onSubmit={handleSubmitEdit}>
          <div>
            <div className='flex justify-end'>
              <IconButton aria-label="settings" onClick={handleClose2}>
                <IoMdClose />
              </IconButton>

            </div>

            <div className='p-4'>
              <div>
                <label>First Name : </label>
                <input type="text" name="firstname" value={editfirstname} onChange={(e) => setEditFirstName(e.target.value)} id="firstname" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />

              </div>
              <div>
                <label>Last Name : </label>
                <input type="text" name="firstname" value={editlastname} onChange={(e) => setEditLastName(e.target.value)} id="firstname" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
              </div>
              <div>
                <label>Email : </label>
                <input type="text" name="firstname" value={editemail} onChange={(e) => setEditEmail(e.target.value)} id="firstname" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
              </div>
              <div>
                <label>Phone No : </label>
                <input type="text" name="firstname" value={editphone} onChange={(e) => setEditPhone(e.target.value)} id="firstname" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />

              </div>
              <button type="submit" className="w-full mt-5 text-white bg-[#000] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Edit</button>

            </div>



          </div>
        </form>

      </Dialog>
    </>

  );
};

export default ResearchData;
