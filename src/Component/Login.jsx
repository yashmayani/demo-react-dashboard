import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { NavLink } from 'react-router-dom'


const Login = ({ isLogin, setIsLogin }) => {
    const [email, SetEmail] = useState('');
    const [password, SetPassword] = useState('');
    const [loading, SetLoading] = useState(false);
    


    const handleSubmit = async (e) => {
        e.preventDefault();
        SetLoading(true);
        const userData = {
            "email_or_phone": email,
            "password": password,
        };

        try {
            const response = await fetch('https://api.happiclips.com/api/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });
            const data = await response.json();
            SetLoading(false);

            // console.log(data);
            if (data.data.user) {
                console.log(data.data.user);
                localStorage.setItem('authToken', data.data.token)
                toast.success("login completed");
                setIsLogin(true)
            } else {
                console.log('something went wrong!')
            }
        } catch (error) {
            alert('Error while submitting the form');
            console.error('Error:', error);
        }
    }


    return (
        <>
            {
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
                    </>
                    :
                    <>
                        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
                            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                                <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">

                                    Portal
                                </a>
                                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                            Sign in to your account
                                        </h1>
                                        <div>
                                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                            <input type="email" name="email" value={email} onChange={(e) => SetEmail(e.target.value)} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                        </div>
                                        <div>
                                            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                            <input type="password" name="password" value={password} onChange={(e) => SetPassword(e.target.value)} id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                        </div>

                                        <button type="submit" className="w-full text-white bg-[#000] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                            Don’t have an account yet? <NavLink to="/registration" className="font-medium text-[blue] hover:underline dark:text-primary-500">Sign up</NavLink>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </>
            }

        </>
    )
}

export default Login
