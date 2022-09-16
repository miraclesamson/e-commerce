import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { fireAuth } from "../firebase";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .label("Email")
    .required("Email is Required"),
  password: Yup.string()
    .min(8, "Must be 6 characters or more")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
      "Password must contain at least one lowercase letter, one uppercase letter, one number and one special character"
    )
    .label("Password")
    .required("Password is required"),
});

function Login() {
    const formik = useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        console.log(values);
        createUserWithEmailAndPassword(fireAuth, values.email, values.password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            // ..
          });
      },
    });
  

export default Login;
