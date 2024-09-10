import React from "react";
import { Link } from "react-router-dom";

export default function LoginOrSignup() {
  return (
    <>
      <div className=" flex items-center ps-7">
        <Link to="/login">Login</Link>
      </div>
      <div className=" flex items-center">
        <Link to="/signup">Signup</Link>
      </div>
    </>
  );
}
