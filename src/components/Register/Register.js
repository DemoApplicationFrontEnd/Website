import React from "react";
import "./register.css";
import Person2TwoToneIcon from "@mui/icons-material/Person2TwoTone";
import { useNavigate } from "react-router-dom";
import Footer from "./../Footer";

export const Register = () => {
  const navigate = useNavigate();
  const handlechange = () => {
    navigate("/login");
  };

  return (
    <div className="wrapper">
      <div className="Container">
        <div className="pic">
          <Person2TwoToneIcon />
        </div>
        <h2 className="title">Register</h2>
        <form className="form1">
          <label for="username">Username</label>
          <input
            type="text"
            className="input"
            autoComplete="off"
            placeholder="username"
          ></input>
          <label for="email">Email</label>
          <input
            type="email"
            className="input"
            autoComplete="off"
            placeholder="email"
          ></input>
          <label for="password">Password</label>
          <input
            type="password"
            className="input"
            autoComplete="off"
            placeholder="password"
          ></input>
          <label for="name">Name</label>
          <input
            type="text"
            className="input"
            autoComplete="off"
            placeholder="name"
          ></input>
          <button
            className="mybtn"
            type="button"
            style={{
              background: "green",
              padding: "10px 6px",
              marginTop: "15px",
            }}
          >
            Register
          </button>
          <p className="paragraph">
            Already have an account?{" "}
            <span onClick={handlechange} className="ancher">
              Click to Login
            </span>
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
};
