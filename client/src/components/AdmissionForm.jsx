import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    father_name: "",
    mother_name: "",
    dob: "",
    blood_group: "",
    guardian_number: "",
    address: "",
    landmark: "",
    pincode: "",
    post_office: "",
    district: "",
    state: "",
    email: "",
    admission_to_class: "",
    aadhar_number: "",
    payment_status: "",
    date_of_admission: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/students",
        formData
      );
      if (response.status === 200) {
        toast.success("Student added successfully!");
        setFormData({
          name: "",
          father_name: "",
          mother_name: "",
          dob: "",
          blood_group: "",
          guardian_number: "",
          address: "",
          landmark: "",
          pincode: "",
          post_office: "",
          district: "",
          state: "",
          email: "",
          admission_to_class: "",
          aadhar_number: "",
          payment_status: "",
          date_of_admission: "",
        });
      } else {
        toast.error("Failed to add student. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please check your input and try again.");
    }
  };

  return (
    <>
      <form
        className="container bg-white mt-5 rounded p-5"
        onSubmit={handleSubmit}
      >
        <h3 className="text-center text-success">Add new student</h3>

        {/* Form Row 1 */}
        <div className="row g-3 mt-3">
          <div className="col-md-4">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Father&apos;s Name</label>
            <input
              type="text"
              className="form-control"
              name="father_name"
              value={formData.father_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Mother&apos;s Name</label>
            <input
              type="text"
              className="form-control"
              name="mother_name"
              value={formData.mother_name}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Form Row 2 */}
        <div className="row g-3 mt-3">
          <div className="col-md-4">
            <label className="form-label">Date of Birth</label>
            <input
              type="date"
              className="form-control"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Blood Group</label>
            <input
              type="text"
              className="form-control"
              name="blood_group"
              value={formData.blood_group}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Guardian Number</label>
            <input
              type="number"
              className="form-control"
              name="guardian_number"
              value={formData.guardian_number}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Form Row 3 */}
        <div className="row g-3 mt-3">
          <div className="col-md-4">
            <label className="form-label">Address</label>
            <input
              type="text"
              className="form-control"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Landmark</label>
            <input
              type="text"
              name="landmark"
              value={formData.landmark}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Pin Code</label>
            <input
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              type="number"
              className="form-control"
            />
          </div>
        </div>

        {/* Form Row 4 */}
        <div className="row g-3 mt-3">
          <div className="col-md-4">
            <label className="form-label">Post Office</label>
            <input
              type="text"
              name="post_office"
              value={formData.post_office}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">District</label>
            <input
              type="text"
              name="district"
              value={formData.district}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">State</label>
            <input
              name="state"
              value={formData.state}
              onChange={handleChange}
              type="text"
              className="form-control"
            />
          </div>
        </div>

        {/* Form Row 5 */}
        <div className="row g-3 mt-3">
          <div className="col-md-4">
            <label className="form-label">Email Address</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Admission to Class</label>
            <input
              type="number"
              name="admission_to_class"
              value={formData.admission_to_class}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Date of Admission</label>
            <input
              name="date_of_admission"
              type="date"
              value={formData.date_of_admission}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>

        <div className="row g-3 mt-3">
          <div className="col-md-4">
            <label className="form-label">Aadhar Number</label>
            <input
              type="number"
              name="aadhar_number"
              value={formData.aadhar_number}
              onChange={(e) => {
                const value = e.target.value;
                // Ensure the value contains only digits and restrict to 12 digits
                if (/^\d{0,12}$/.test(value)) {
                  handleChange(e);
                }
              }}
              className="form-control"
              maxLength={12} // Optionally set maxlength for UI restriction
              required
            />
          </div>

          <div className="col-md-4">
            <label className="form-label">Payment Status</label>
            <select
              className="form-control"
              name="payment_status"
              value={formData.payment_status}
              onChange={handleChange}
              required
            >
              <option value="">Select...</option>
              <option value="success">Payment Success</option>
              <option value="not_paid">Not Paid</option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <div className="d-grid gap-2 mt-4">
          <button type="submit" className="btn btn-success">
            Add Student
          </button>
        </div>
      </form>

      {/* Toast Container */}
      <ToastContainer />
    </>
  );
};

export default AdmissionForm;
