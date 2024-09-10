import React from "react";
import { Link } from "react-router-dom";

export default function Logout_Header({ setUserLogin }) {
  return (
    <div className="flex items-center ps-6">
      <Link to="/" onClick={() => setUserLogin(false)}>
        Logout
      </Link>
    </div>
  );
}
