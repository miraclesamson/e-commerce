import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { fireAuth } from "../firebase";
let navigate = useNavigate();

const validationSchema = Yup.object({
  username: Yup.string()
    .min(8)
    .label("username")
    .required("username is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
    ),
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
  retypePassword: Yup.string()
    .required("Please retype your password.")
    .oneOf([Yup.ref("password")], "Your passwords do not match."),
});

function Signup() {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      const auth = getAuth();
      createUserWithEmailAndPassword(
        fireAuth,
        auth,
        values.username,
        values.email,
        values.password,
        values.retypePassword
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
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
  navigate("./login.jsx");

  return (
    <div className="flex justify-center items-center mt-10">
      <div className="bg-rose-50 w-[500px] h-[450px] drop-shadow-xl rounded-xl px-3">
        <form onSubmit={formik.handleSubmit} className="w-full">
          <div className="mb-4 mt-4">
            <input
              id="username"
              type="text"
              placeholder="Enter username"
              className="h-[50px] p-4 w-full border-2 rounded-[5px] mt-4"
              {...formik.getFieldProps("username")}
            />
            {formik.touched.username && formik.errors.username ? (
              <div>{formik.errors.username}</div>
            ) : null}
          </div>
          <div className="mb-4 mt-4">
            <input
              id="email"
              type="text"
              {...formik.getFieldProps("email")}
              placeholder="email address"
              className="h-[50px] p-4 w-full border-2 rounded-[5px] mt-4"
            />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </div>

          <div className="mb-4">
            <input
              id="password"
              type="text"
              placeholder="password"
              {...formik.getFieldProps("password")}
              className="h-[50px] p-4 w-full border-2 rounded-[5px] mt-4"
            />
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </div>

          <div className="mb-4">
            <input
              id="retypePassword"
              type="text"
              placeholder="retypePassword"
              {...formik.getFieldProps("retypePassword")}
              className="h-[50px] p-4 w-full border-2 rounded-[5px] mt-4"
            />
            {formik.touched.retypePassword && formik.errors.retypePassword ? (
              <div>{formik.errors.retypePassword}</div>
            ) : null}
          </div>

          <button
            type="submit"
            className="bg-blue-500 w-full h-[50px] rounded-[5px] text-white font-medium text-[24px]"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}
export default Signup;
