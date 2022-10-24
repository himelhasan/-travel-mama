import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";

const Login = () => {
  const { googleLogIn } = useContext(AuthContext);

  const handelGoogleLogin = () => {
    googleLogIn()
      .then((response) => {
        const user = response.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 pt-10 pb-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <form action="" className="mt-6 mb-0 space-y-4 rounded-lg p-8 border">
            <p className="text-2xl font-semibold">Login</p>

            <div>
              <div className="relative mt-1">
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Enter email"
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

            <div>
              <div className="relative mt-1">
                <input
                  type="password"
                  id="password"
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Enter password"
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
              No account?
              <Link className="underline textYellow font-bold px-2" to="/register">
                Sign up
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
          onClick={handelGoogleLogin}
          className="flex mx-auto rounded-lg border items-center w-full justify-center lg:w-1/4 text-center py-3 text-sm font-medium text-black"
        >
          {" "}
          <FcGoogle /> <p className="px-2">Login with google</p>
        </button>
        <button
          onClick={handelGoogleLogin}
          className="flex mx-auto my-2 rounded-lg border items-center w-full justify-center lg:w-1/4 text-center  py-3 text-sm font-medium text-black"
        >
          {" "}
          <BsFacebook className="text-blue-700" />{" "}
          <p className="px-2">Login with Facebook</p>
        </button>
      </div>
    </div>
  );
};

export default Login;
