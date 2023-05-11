import * as yup from "yup";

export const basicSchema = yup.object().shape({
    firstName:yup.string().required("firstName is required"),
    lastName:yup.string().required("lastName is required"),
    email: yup.string().email("Email is not valid").required("Email is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 5 characters")
      .max(15, "Password must be 12 characters or less")
      .required("Password is required"),
      confirm_password:yup.string().oneOf([yup.ref("password"), null], "Passwords must match").required("Passwords must match")
  });

  
export const loginSchema = yup.object().shape({
    email: yup.string().email().required("Please enter email"),
    password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Enter new password"),
    });