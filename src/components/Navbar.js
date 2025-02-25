import React, { useState } from "react";
import "./Navbar.css";
import Logo from "./../assets/NIRMAAAN.png"; // Ensure this is the HD version of the logo
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./sidebar/Sidebar";
import "./analytic.css";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div className="navbar">
        <div className="navbar-left">
          <div className="menu-icon">
            {openMenu ? (
              <Sidebar setOpenMenu={setOpenMenu} />
            ) : (
              <MenuIcon onClick={() => setOpenMenu(true)} />
            )}
          </div>

          <div className="logo-container">
            <img className="logo" src={Logo} alt="Nirmaan Logo" />
            <div className="logo-text">
              <h1 className="logo-title">Nirmaan</h1>
              <h1 className="logo-subtitle">Constructions</h1>
            </div>
          </div>
        </div>

        <div className="navbar-right">
          <div className="nav-links">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/analytic" className="nav-link">
              About Us
            </Link>
            <Link to="/newproject" className="nav-link">
              Our Projects
            </Link>
            <Link to="/ourService" className="nav-link">
              Services
            </Link>
            <Link to="/ourpackage" className="nav-link">
              Our Packages
            </Link>
            <Link to="/cards" className="nav-link">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
