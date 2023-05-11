import React, { useState, useEffect } from "react";
import Img5 from "../img/food5.jpeg";
import { useFormik } from "formik";
import { basicSchema } from "../schema";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {registerUser} from "../user/userSlice";

function Signup() {
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const onSubmit = (values, actions) => {
    dispatch(registerUser(values));
  };

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
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
  }, [user]);

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-fit p-5">
        <div className="sm:w-1/2 px-16">
          <h2 className="font-bold text-2xl uppercase text-blue-500">Signup</h2>
          <p className="text-sm mt-4 mb-4 text-blue-400">You're welcome</p>

          <form
            className="flex flex-col gap-10"
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              className={`p-2   rounded-xl border ${
                errors.lastName && touched.lastName
                  ? "border-[red]"
                  : "border-[#53352d80]"
              }`}
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.firstName && touched.firstName && (
              <p className="text-[red] mt-2">{errors.firstName}</p>
            )}

            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              className={`p-2   rounded-xl border ${
                errors.lastName && touched.lastName
                  ? "border-[red]"
                  : "border-[#53352d80]"
              }`}
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.lastName && touched.lastName && (
              <p className="text-[red]">{errors.lastName}</p>
            )}

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

            <input
              type="password"
              name="confirm_password"
              id="confrimPassword"
              placeholder="******"
              className={`p-2 rounded-xl border ${
                errors.password && touched.password
                  ? "border-[red]"
                  : "border-[#53352d80]"
              }`}
              value={values.confirm_password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.confirm_password && touched.confirm_password && (
              <p className="text-[red]">{errors.confirm_password}</p>
            )}
            <button
              type="Submit"
              className="uppercase bg-blue-500 rounded-xl text-white py-2"
            >
              Signup
            </button>
          </form>
        </div>

        <div className="w-1/2 sm:block hidden ">
          <img src={Img5} alt="" className="rounded-2xl " />
        </div>
      </div>
    </div>
  );
}

export default Signup;
