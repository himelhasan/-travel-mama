import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
const Register = () => {
  const { googleLogIn, createUserWithEmail } = useContext(AuthContext);

  const [newUserInfo, setNewUserInfo] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handelFnameChange = (e) => {
    setNewUserInfo({ ...newUserInfo, fName: e.target.value });
  };
  const handelLnameChange = (e) => {
    setNewUserInfo({ ...newUserInfo, lName: e.target.value });
  };
  const handelEmailChange = (e) => {
    setNewUserInfo({ ...newUserInfo, email: e.target.value });
  };
  const handelPasswordChange = (e) => {
    setNewUserInfo({ ...newUserInfo, password: e.target.value });
  };
  const handelConfirmPasswordChange = (e) => {
    setNewUserInfo({ ...newUserInfo, confirmPassword: e.target.value });
  };

  const SignUpWithEmail = (event) => {
    event.preventDefault();
    const fName = newUserInfo.email;
    const lName = newUserInfo.lName;
    const email = newUserInfo.email;
    const password = newUserInfo.password;
    const confirmPassword = newUserInfo.confirmPassword;
    console.log(fName, lName, email, password, confirmPassword);

    createUserWithEmail(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 pt-10 pb-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <form
            onSubmit={SignUpWithEmail}
            className="mt-6 mb-0 space-y-4 rounded-lg p-8 border"
          >
            <p className="text-2xl font-semibold">Create an account</p>
            {/* first Name */}
            <div>
              <div className="relative mt-1">
                <input
                  type="text"
                  onChange={handelFnameChange}
                  name="fname"
                  className="w-full rounded-lg border-b-2 border-slate-200  rounded-none	 p-4 pr-12 text-sm shadow-sm"
                  placeholder="First Name"
                />

                <span className="absolute inset-y-0 right-4 inline-flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </span>
              </div>
            </div>
            {/* Last Name */}
            <div>
              <div className="relative mt-1">
                <input
                  type="text"
                  onChange={handelLnameChange}
                  className="w-full rounded-lg border-b-2 border-slate-200  rounded-none	 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Last Name"
                />

                <span className="absolute inset-y-0 right-4 inline-flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </span>
              </div>
            </div>
            {/* Email address */}
            <div>
              <div className="relative mt-1">
                <input
                  type="email"
                  id="email"
                  onChange={handelEmailChange}
                  className="w-full rounded-lg border-b-2 border-slate-200  rounded-none	 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Enter Email"
                />

                <span className="absolute inset-y-0 right-4 inline-flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>
            {/* Enter Password */}
            <div>
              <div className="relative mt-1">
                <input
                  type="password"
                  id="password"
                  onChange={handelPasswordChange}
                  className="w-full rounded-lg border-b-2 border-slate-200  rounded-none	 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Enter Password"
                />

                <span className="absolute inset-y-0 right-4 inline-flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>
            {/* Confirm Password */}
            <div>
              <div className="relative mt-1">
                <input
                  type="password"
                  id="password"
                  onChange={handelConfirmPasswordChange}
                  className="w-full rounded-lg border-b-2 border-slate-200  rounded-none	 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Confirm Password"
                />

                <span className="absolute inset-y-0 right-4 inline-flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="block w-full rounded-lg bgYellow px-5 py-3 text-sm font-medium text-black"
            >
              Sign in
            </button>

            <p className="text-center text-sm text-gray-500">
              Already have an account?
              <Link className="underline textYellow font-bold px-2" to="/login">
                Login
              </Link>
            </p>
          </form>
        </div>
        <div className="relative flex py-1 items-center w-1/4 mx-auto">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="text-xl flex-shrink mx-4 text-gray-400">or</span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <button
          onClick={googleLogIn}
          className="flex mx-auto rounded-lg border items-center w-full justify-center lg:w-1/4 text-center py-3 text-sm font-medium text-black"
        >
          {" "}
          <FcGoogle /> <p className="px-2">Continue with google</p>
        </button>
        <button
          onClick={googleLogIn}
          className="flex mx-auto my-2 rounded-lg border items-center w-full justify-center lg:w-1/4 text-center  py-3 text-sm font-medium text-black"
        >
          {" "}
          <BsFacebook className="text-blue-700" />{" "}
          <p className="px-2">Continue with Facebook</p>
        </button>
      </div>
    </div>
  );
};

export default Register;
