import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


export default function Registration() {
    const LOCAL_STORAGE_KEY = "Info";
    const navigate = useNavigate();
    
    

    const [Info, setInfo] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",


    });

    const register = async (e) => {
        e.preventDefault()

        if (!Info.name || !Info.email || !Info.password || !Info.password_confirmation) {
            console.log(Info)
            alert("Complete all the fields!!!")
            return
        }

        const response = await axios.post('http://www.ahoy.test/api/register', Info)
        // const response_data = response.data;

        // console.log(response.data)

        // redirect
        // history.push('/');
        // localStorage.clear();
        // window.location.href='/';
        return navigate('/login');
        

        
    }
    return (
      <>
        
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              create your account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={register}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Full name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="email"
                    value={Info.name} onChange={(e) => setInfo({ ...Info, name: e.target.value })}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={Info.email} onChange={(e) => setInfo({ ...Info, email: e.target.value })}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                 
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    value={Info.password} onChange={(e) => setInfo({ ...Info, password: e.target.value })}
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    confirm password
                  </label>
                 
                </div>
                <div className="mt-2">
                  <input
                    id="password_confirmation"
                    name="password_confirmation"
                    type="password"
                    autoComplete="current-password"
                    value={Info.password_confirmation} onChange={(e) => setInfo({ ...Info, password_confirmation: e.target.value })}                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
              already a member?{' '}
              <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                login your account
              </Link>
            </p>
          </div>
        </div>
      </>
    )
  }
  