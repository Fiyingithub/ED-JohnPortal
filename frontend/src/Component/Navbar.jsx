import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";
import logo from "../Assets/Images/ED-JOHN-LOGO.png";

const MobileNavbar = ({ navList, handleNavbar }) => {
  return (
    <div className="absolute top-20 left-0 w-full pb-10 bg-white shadow-lg z-10">
      <div className="flex flex-col items-start p-4 space-y-4">
        {navList.map((list, index) => (
          <Link
            key={index}
            to={list.path}
            onClick={handleNavbar}
            className="text-md hover:text-primary font-medium"
          >
            {list.name}
          </Link>
        ))}
      </div>
      <div className="justify-center px-4 items-center gap-2">
        <Link
          to="/get-started"
          className="bg-primary hover:bg-opacity-85 text-white py-2 px-6 rounded-full flex items-center"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

function Navbar() {
  const navList = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About Us", path: "/about" },
    { id: 3, name: "Applicants", path: "/applicants" },
    { id: 4, name: "Scholarship", path: "/scholarship" },
    { id: 5, name: "Our courses", path: "/courses" },
  ];

  const [open, setOpen] = useState(false);

  const handleNavbar = () => {
    setOpen(!open);
  };

  return (
    <div>
      <header className="bg-white py-3 px-4 lg:px-16 shadow-md sticky top-0 z-10 flex justify-center">
        <div className="flex flex-col lg:flex-row justify-between w-full items-center">
          <div className="font-bold md:text-lg flex items-center">
            <img src={logo} alt="Logo" className="h-[60px]" />
            <div className="flex flex-col ml-2">
              <p>ED-JOHN INSTITUTE OF MANAGEMENT</p>
              <p>AND TECHNOLOGY</p>
            </div>
          </div>
          <div className="hidden md:flex justify-center space-x-8 mt-3 md:mt-0">
            {navList.map((list, index) => (
              <Link
                key={index}
                to={list.path}
                className="text-md hover:text-primary font-medium"
              >
                {list.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex justify-center items-center gap-2">
            <Link
              to="/get-started"
              className="bg-primary hover:bg-opacity-85 text-white py-2 px-6 rounded-full flex items-center"
            >
              Get Started
            </Link>
          </div>
        </div>
        <div
          className="md:hidden p-2 border active:border-black cursor-pointer"
          onClick={handleNavbar}
        >
          <IoMenuSharp className="text-4xl mt-2" />
        </div>
        {open && <MobileNavbar navList={navList} handleNavbar={handleNavbar} />}
      </header>
    </div>
  );
}

export default Navbar;
