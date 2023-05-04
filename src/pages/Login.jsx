import React from 'react'
import Img4 from "../img/food4.jpg"
import { Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [redirect, setRedirect] = useState(false)

  const handleSubmit = e => {
    e.preventDefault();
    if (validate()) {
      setRedirect(true)
    }
    
  };

  const validate = () => {
    let isValid = true;

    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Invalid email address');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    } else if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      isValid = false;
    } else {
      setPasswordError('');
    }

    return isValid;
  };

 if(redirect) {
  return <Navigate to={'/'} />
 }
      
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5">

 <div className="sm:w-1/2 px-16 pt-14">
  <h2 className="font-bold text-2xl uppercase text-blue-500">Login</h2>
  <p className="text-sm mt-4 text-blue-400">How're you doing</p>

  <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
    <input className="p-2 mt-8  rounded-xl border"   type="text" placeholder="Enter your Email" 
    value={email}
    onChange={e => setEmail(e.target.value)}/>
    {emailError && <div className='text-red-500'>{emailError}</div>}
    <input className="p-2 rounded-xl border"  type="password" placeholder="Enter Password" 
    value={password}
    onChange={e => setPassword(e.target.value)}/>
      {passwordError && <div className='text-red-500'>{passwordError}</div>}
    <button className="uppercase bg-blue-500 rounded-xl text-white py-2">Login</button>
  </form>

 </div>

<div className="w-1/2 sm:block hidden ">
  <img src={Img4} alt=""  className="rounded-2xl "/>
</div>


      </div>      
</div>
  )
}

export default Login