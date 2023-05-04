import React, { useState,useEffect } from "react";
import Img5 from "../img/food5.jpeg"
import {useNavigate } from "react-router-dom";


function Signup() {
const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',

  });


  const [errors, setErrors] = useState({});
  const [direct, setDirect] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length === 0) {
      setDirect(true)
    } else {
      setErrors(validationErrors);
    }
  };

  const validate = (data) => {
    const errors = {};
    if (!data.firstName.trim()) {
      errors.firstName = 'First name is required';
    }

    if (!data.lastName.trim()) {
      errors.lastName = 'Last name is required';
    }
    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(data.email)) {
      errors.email = 'Invalid email address';
    }
    if (!data.password.trim()) {
      errors.password = 'Password is required';
    } else if (data.password.trim().length < 8) {
      errors.password = 'Password must be at least 8 characters long';
    }
    if (!data.confirmPassword.trim()) {
      errors.confirmPassword = 'Please confirm your password';
    } else if (data.password.trim() !== data.confirmPassword.trim()) {
      errors.confirmPassword = 'Passwords do not match';
    }
    return errors;
    
  };
  
  if(direct) {
    return <navigate to={'/Login'} />
   }
      

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };


  /* useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
  }, [user]); */

   
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-fit p-5">

 <div className="sm:w-1/2 px-16">
  <h2 className="font-bold text-2xl uppercase text-blue-500">Signup</h2>
  <p className="text-sm mt-4 text-blue-400">You're welcome</p>

  <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
    
    <input className="p-2 mt-8  rounded-xl border"   type="text" placeholder="Enter your FirstName " name="firstName"
         onChange={handleChange} 
    />
    {errors.firstName && <span className='text-red-500'>{errors.firstName}</span>}
    <input className="p-2   rounded-xl border"   type="text" placeholder="Enter your LastName" name="lastName"
    
       onChange={handleChange}
    />
    {errors.lastName && <span className='text-red-500'>{errors.lastName}</span>}
    <input className="p-2 rounded-xl border"  type="text" placeholder="Enter your Email" name="email"
  
    onChange={handleChange}
    />
    {errors.email && <span className='text-red-500'>{errors.email}</span>}
    <input className="p-2 rounded-xl border"  type="password" placeholder="Enter Password" name="password"
    
    onChange={handleChange}
    />
     {errors.password && <span className='text-red-500'>{errors.password}</span>}
    <input className="p-2 rounded-xl border"  type="password" placeholder="Confirm Password" name="confirmPassword"
  
    onChange={handleChange}
    />
     {errors.confirmPassword && <span className='text-red-500'>{errors.confirmPassword}</span>}
    <button className="uppercase bg-blue-500 rounded-xl text-white py-2">Signup</button>
  </form>

 </div>

<div className="w-1/2 sm:block hidden ">
  <img src={Img5} alt=""  className="rounded-2xl "/>
</div>


      </div>      
</div>
  )
}

export default Signup