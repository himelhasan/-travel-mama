import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";

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
      <button onClick={handelGoogleLogin}>login with google </button>
    </div>
  );
};

export default Login;
