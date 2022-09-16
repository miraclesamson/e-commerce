import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";

import { fireAuth } from "../firebase";

const validationSchema = Yup.object({
  username: Yup.string().required("username is Required").label("username"),
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
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .label("comfirm Password")
    .required("comfirm Password"),
});

function Login() {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      comfirmPassword: "",
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
  return (
    <div className=" bg-[#f0f2f5] min-h-screen flex flex-row justify-center items-center "></div>
  );
}

export default signInWithPopup;
