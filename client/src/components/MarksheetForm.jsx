import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InputField = ({ label, name, type = "text", value, onChange }) => (
  <div className="col-md-4">
    <label className="form-label">{label}</label>
    <input
      type={type}
      className="form-control"
      name={name}
      value={value}
      onChange={onChange}
      required
    />
  </div>
);

const SelectField = ({ label, name, value, onChange, options }) => (
  <div className="col-md-4">
    <label className="form-label">{label}</label>
    <select
      className="form-control"
      name={name}
      value={value}
      onChange={onChange}
      required
    >
      <option value="">Select...</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

const MarksheetForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    father_name: "",
    mother_name: "",
    roll_number: "",
    class: "",
    section: "",
    exam_type: "",
  });

  const [marks, setMarks] = useState({}); // Holds marks for each subject
  const subjects = [
    "Mathematics",
    "Science",
    "Social Science",
    "Computer",
    "English",
    "Hindi",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleMarksChange = (e, subject) => {
    const { value } = e.target;
    setMarks((prevMarks) => ({
      ...prevMarks,
      [subject]: parseInt(value) || 0,
    }));
  };

  const calculateTotalMarks = () => {
    return Object.values(marks).reduce((acc, mark) => acc + mark, 0);
  };

  const calculatePercentage = () => {
    const totalObtained = calculateTotalMarks();
    const totalMarks = subjects.length * 100; // Total marks for all subjects
    return ((totalObtained / totalMarks) * 100).toFixed(2); // Calculate percentage
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Marksheet generated successfully!");
  };

  return (
    <>
      <form
        className="container bg-white mt-5 rounded p-5"
        onSubmit={handleSubmit}
      >
        <h3 className="text-center text-secondary">
          Shine International School, Jamudag
        </h3>
        <p className="text-center text-secondary">
          {formData.exam_type + " Marksheet"}
        </p>

        <div className="row g-3 mt-3">
          <InputField
            label="Student Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <InputField
            label="Father's Name"
            name="father_name"
            value={formData.father_name}
            onChange={handleChange}
          />
          <InputField
            label="Mother's Name"
            name="mother_name"
            value={formData.mother_name}
            onChange={handleChange}
          />
        </div>

        <div className="row g-3 mt-3">
          <InputField
            label="Roll Number"
            name="roll_number"
            value={formData.roll_number}
            onChange={handleChange}
          />
          <InputField
            label="Class"
            name="class"
            value={formData.class}
            onChange={handleChange}
          />
          <InputField
            label="Section"
            name="section"
            value={formData.section}
            onChange={handleChange}
          />
        </div>

        <div className="row g-3 mt-3">
          <SelectField
            label="Exam Type"
            name="exam_type"
            value={formData.exam_type}
            onChange={handleChange}
            options={["Unit Test", "Final Exam"]}
          />
        </div>

        <table className="table table-secondary text-center mt-3">
          <thead>
            <tr>
              <th scope="col">S. No.</th>
              <th scope="col">Subject</th>
              <th scope="col">Marks Obtained</th>
              <th scope="col">Total Marks</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((subject, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{subject}</td>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Marks"
                    onChange={(e) => handleMarksChange(e, subject)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    value="100"
                    readOnly
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="container mt-3">
          <h5>Total Marks Obtained: {calculateTotalMarks()}</h5>
          <h5>Percentage: {calculatePercentage()}%</h5>
        </div>

        <div className="row justify-content-between mt-5 container">
          <div className="col-md-6 text-start">
            <p>Principal&apos;s Signature</p>
          </div>
          <div className="col-md-6 text-end">
            <p>Parent&apos;s Signature</p>
          </div>
        </div>

        <div className="d-grid gap-2 mt-4">
          <button type="submit" className="btn btn-danger">
            Generate
          </button>
        </div>

      </form>

      <ToastContainer />
    </>
  );
};

export default MarksheetForm;
