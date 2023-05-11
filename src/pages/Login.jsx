import React, {useEffect} from 'react'
import Img4 from "../img/food4.jpg"
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "../schema/index";
import { loginUser } from '../user/userSlice';



const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user,isLoading } = useSelector((store) => store.user);
  console.log(isLoading);
  const onSubmit = (values, actions) => {
    dispatch(loginUser(values));
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [user]);


  const {
    values,
    errors,
    touched,
    isSubmitting,
    setFieldValue,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit,
  });


      
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5">

 <div className="sm:w-1/2 px-16 pt-14">
  <h2 className="font-bold text-2xl uppercase text-blue-500">Login</h2>
  <p className="text-sm mt-4 text-blue-400">How're you doing</p>

  <form className="flex flex-col gap-4" onSubmit={handleSubmit} autoComplete='off'>
  <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="examples@gmail.com"
                        className={`p-2 rounded-xl border ${
                          errors.email && touched.email
                            ? "border-[red]"
                            : "border-[#53352d80]"
                        }`}
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.email && touched.email && (
                        <p className="text-[red]">{errors.email}</p>
                      )}
    
    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="******"
                        className={`p-2 rounded-xl border ${
                          errors.password && touched.password
                            ? "border-[red]"
                            : "border-[#53352d80]"
                        }`}
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.password && touched.password && (
                        <p className="text-[red]">{errors.password}</p>
                      )}
   
    <button type='submit' className="uppercase bg-blue-500 rounded-xl text-white py-2">Login</button>
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