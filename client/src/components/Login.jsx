import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      toast.error("Please enter both Email and Password!"), {
        position: toast.POSITION.TOP_CENTER,
      };
    } else {
      toast.success("Logged In Successfully!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <>
    <form className="container bg-white mt-5 rounded p-5" method="get">
      <h3 className="text-center text-primary">Admin Login</h3>
      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Email address"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="">
        <Link to="#" className="text-white d-grid gap-2 login-btn">
          <button type="button" className="btn btn-primary " onClick={handleLogin}>
            Log In
          </button>
        </Link>
        <ToastContainer theme="dark" />
      </div>
    </form>
    <br />
    </>
  );
};

export default Login;
