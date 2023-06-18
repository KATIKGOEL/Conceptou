import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="h-[9vh] bg-[#C0EEF2] flex items-center justify-between px-4 ">
        <div className="flex items-center ">
          <img
            src="/Conceptou_transparent-removebg-preview.png"
            alt=""
            className=" h-[6vh] px-3"
          />
          <h1 className="font-Montserrat text-xl text-[#181823] font-semibold sm:text-3xl md:text-4xl">Conceptou</h1>
        </div>
        <ul className="flex max-[730px]:hidden">
          <li>
            <Link to="/" className="px-2 hover:text-[#9DB2BF]">
              Home
            </Link>
          </li>
          |
          <li>
            <Link to="/about" className="px-2 hover:text-[#9DB2BF]">
              About Us
            </Link>
          </li>
          |
          <li>
            <Link to="/services" className="px-2 hover:text-[#9DB2BF]">
              Services
            </Link>
          </li>
          |
          <li>
            <Link to="/blogs" className="px-2 hover:text-[#9DB2BF]">
              Blogs
            </Link>
          </li>
          |
          <li>
            <Link to="/contact" className="px-2 hover:text-[#9DB2BF]">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
