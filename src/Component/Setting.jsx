import React from 'react'
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import { IoMdClose } from "react-icons/io";
import { toast } from 'react-toastify';
import { useEffect } from 'react';

const Setting = () => {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const [firstname, SetFirstName] = useState('');
  const [lastname, SetLastName] = useState('');
  const [email, SetEmail] = useState('');
  const [phone, SetPhone] = useState('');


  const handleClose = () => {
    setOpen(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = {
        "account_type": 0,
        "event_id": 82,
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
        body: JSON.stringify(userData),             // Stringify user data to send as JSON
      })
        .then(response => response.json())            // Convert the response to JSON
        .then(data => console.log('Success:', data))  // Handle success
        .catch((error) => console.error('Error:', error));
      toast.success("Data added successfulluy");
      SetFirstName('');
      SetLastName('');
      SetEmail('');
      SetPhone('');
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };



  // Fetch data from the API when the component mounts
  useEffect(() => {
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

    fetchData();
  }, []);
  console.log(users);


  return (
    <>
      <div className='flex justify-end'>
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
              <th scope="col" className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
          {users.data && users.data.length > 0 ? (
              users.data.map((user) => (
            <tr key={user.id}  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {user.id}
              </th>
              <td className="px-6 py-4">{user.first_name}</td>
              <td className="px-6 py-4">{user.last_name}</td>
              <td className="px-6 py-4">{user.email}</td>
              <td className="px-6 py-4">{user.phone}</td>
              <td className="px-6 py-4">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
              </td>

            </tr>
              ))
            ):(


            <tr>
              <td colSpan="8" className="text-center px-6 py-4">No results found.</td>
            </tr>
            )}
          </tbody>
        </table>
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
    </>
  )
}

export default Setting
