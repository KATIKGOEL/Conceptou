import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload(true)
  }
  return (
    <>
      <nav className="h-[11vh] bg-[#C0EEF2] flex items-center justify-between px-4 flex-col md:flex-row">
        <div className="flex items-center ">
          <img
            src="/Conceptou_transparent-removebg-preview.png"
            alt=""
            className="h-[7vh] md:h-[10vh] px-3"
          />
          <h1 className="font-Montserrat text-xl text-[#181823] font-semibold sm:text-3xl md:text-4xl">Conceptou</h1>
        </div>
        <ul className="flex ">
          <li>
            <Link to="/" className="text-[0.5rem] sm:text-[xs] md:text-[0.75rem] lg:text-[1rem] px-1 md:px-2 hover:text-[#9DB2BF]">
              Home
            </Link>
          </li>
          |
          <li>
            <Link to="/about" className="text-[0.5rem] sm:text-[xs] md:text-[0.75rem] lg:text-[1rem] px-1 md:px-2 hover:text-[#9DB2BF]">
              About Us
            </Link>
          </li>
          |
          <li>
            <Link to="/services" className="text-[0.5rem] sm:text-[xs] md:text-[0.75rem] lg:text-[1rem] px-1 md:px-2 hover:text-[#9DB2BF]">
              Services
            </Link>
          </li>
          |
          <li>
            <Link to="/blogs" className="text-[0.5rem] sm:text-[xs] md:text-[0.75rem] lg:text-[1rem] px-1 md:px-2 hover:text-[#9DB2BF]">
              Blogs
            </Link>
          </li>
          |
          <li>
            <Link to="/contact" className="text-[0.5rem] sm:text-[xs] md:text-[0.75rem] lg:text-[1rem] px-1 md:px-2 hover:text-[#9DB2BF]">
              Contact Us
            </Link>
          </li>
          {localStorage.getItem("token")?<li onClick={logOut}><Link className="text-[0.5rem] sm:text-[xs] md:text-[0.75rem] lg:text-[1rem] px-1 md:px-2 hover:text-[#9DB2BF]">|<b> Log Out</b></Link><i className="text-[0.5] md:text[1rem] md:px-2 fa-solid fa-right-from-bracket"></i></li>:<></>}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
