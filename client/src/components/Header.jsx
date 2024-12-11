import React from "react";
import NavBrand from "../assets/nav-brand.jpg"
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

const Header = () => {
  // const notify = () => toast("Logout Successfully !");
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={NavBrand} draggable="false" alt="" className="rounded-circle nav-brand-img"  />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/login">
                School Login
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link text-white" to="/signup">
                Sign Up
              </Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link text-white" to="/students/marksheet" 
              // onClick={notify}
              >
                Generate Marksheet
              </Link>
              {/* <ToastContainer theme="dark" /> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
