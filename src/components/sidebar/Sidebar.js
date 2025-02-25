import React from "react";
import { Link } from "react-router-dom";
import CancelIcon from "@mui/icons-material/Cancel";

const Sidebar = ({ setOpenMenu }) => {
  const handleLinkClick = () => {
    setOpenMenu(false); // Close the sidebar when a link is clicked
  };

  return (
    <div
      className={`bg-gradient-to-b from-[#ff6b6b] to-[#ff9e2a] fixed top-0 left-0 h-full w-[250px] z-50 transition-transform transform ${
        setOpenMenu ? "translate-x-0" : "-translate-x-full"
      } sm:relative sm:translate-x-0 sm:h-auto sm:bg-transparent sm:flex sm:flex-col sm:w-[250px] sm:bg-none`}
    >
      <div className="flex flex-col w-full p-6 gap-8 sticky top-0">
        {/* Close Icon for Mobile */}
        <div className="sm:hidden flex justify-end">
          <CancelIcon
            onClick={() => setOpenMenu(false)}
            className="cursor-pointer text-white"
            fontSize="large"
          />
        </div>

        {/* Menu Items */}
        <div className="flex flex-col gap-6 mt-10">
          <Link
            to="/"
            className="link text-white text-xl font-bold hover:bg-[#ff9e2a] py-2 px-4 rounded-md transition duration-300"
            onClick={handleLinkClick}
          >
            Home
          </Link>
          <Link
            to="/analytic"
            className="link text-white text-xl font-bold hover:bg-[#ff9e2a] py-2 px-4 rounded-md transition duration-300"
            onClick={handleLinkClick}
          >
            About Us
          </Link>
          <Link
            to="/newproject"
            className="link text-white text-xl font-bold hover:bg-[#ff9e2a] py-2 px-4 rounded-md transition duration-300"
            onClick={handleLinkClick}
          >
            Our Projects
          </Link>
          <Link
            to="/ourService"
            className="link text-white text-xl font-bold hover:bg-[#ff9e2a] py-2 px-4 rounded-md transition duration-300"
            onClick={handleLinkClick}
          >
            Services
          </Link>
          <Link
            to="/ourpackage"
            className="link text-white text-xl font-bold hover:bg-[#ff9e2a] py-2 px-4 rounded-md transition duration-300"
            onClick={handleLinkClick}
          >
            Our Packages
          </Link>
          <Link
            to="/cards"
            className="link text-white text-xl font-bold hover:bg-[#ff9e2a] py-2 px-4 rounded-md transition duration-300"
            onClick={handleLinkClick}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
