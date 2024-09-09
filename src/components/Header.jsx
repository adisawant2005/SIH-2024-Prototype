import { useState } from "react";
import { Link } from "react-router-dom";
import { LoginOrSignup, Logout } from "../components";

// Remove after development
import { FaToggleOn } from "react-icons/fa";
import { FaToggleOff } from "react-icons/fa";

export default function Header() {
  const [userLogin, setUserLogin] = useState(true);

  return (
    <div className="grid grid-cols-12 gap-4 h-[10vh] bg-amber-600 border-b-4 border-white font-bold text-xl text-white">
      <div className="flex items-center">
        <button onClick={() => setUserLogin(!userLogin)}>
          {userLogin ? <FaToggleOn /> : <FaToggleOff />}
        </button>
      </div>
      <div className="flex items-center col-start-7 ps-4">
        <Link to="/">Home</Link>
      </div>
      <div className="flex items-center">
        <Link to="/services">Services</Link>
      </div>
      <div className="flex items-center">
        <Link to="/about">About Us</Link>
      </div>
      <div className="flex items-center ps-1">
        <Link to="/contactus">Contact Us</Link>
      </div>
      {userLogin ? <Logout setUserLogin={setUserLogin} /> : <LoginOrSignup />}
    </div>
  );
}
