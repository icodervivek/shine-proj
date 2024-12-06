import React, { useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Signup = () => {
  // State variables for form inputs
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    password: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const response = await axios.post("http://localhost:3000/api/students", formData);
      console.log("Response:", response.data);
      toast.success("Signed Up Successfully!", { autoClose: 2000 });
      // Optionally reset the form
      setFormData({ name: "", number: "", email: "", password: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to sign up. Please try again.", { autoClose: 2000 });
    }
  };

  return (
    <>
      <form className="container bg-white mt-5 rounded p-5" onSubmit={handleFormSubmit}>
        <h3 className="text-center text-primary">Register with us</h3>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            id="number"
            placeholder="Mobile Number"
            value={formData.number}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-success">
            Sign Up
          </button>
        </div>
        <ToastContainer theme="dark" transition={Bounce} />
      </form>
      <br />
    </>
  );
};

export default Signup;
