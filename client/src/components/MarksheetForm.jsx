import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MarksheetForm = () => {
  return (
    <>
      <form
        className="container bg-white mt-5 rounded p-5"
      >
        <h3 className="text-center text-secondary">Marksheet Form</h3>

        {/* Form Row 1 */}
        <div className="row g-3 mt-3">
          <div className="col-md-4">
            <label className="form-label">Student Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
            //   value={formData.name}
              required
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Father&apos;s Name</label>
            <input
              type="text"
              className="form-control"
              name="father_name"
            //   value={formData.father_name}
              required
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Mother&apos;s Name</label>
            <input
              type="text"
              className="form-control"
              name="mother_name"
            //   value={formData.mother_name}
              required
            />
          </div>
        </div>

        <div className="d-grid gap-2 mt-4">
          <button type="submit" className="btn btn-success">
            Add Student
          </button>
        </div>
      </form>

      <ToastContainer />
    </>
  );
};

export default MarksheetForm;
