import React, { useState } from "react";
import axios from "axios";

const StudentDetails = () => {
  const [students, setStudents] = useState([]);
  const [classSelected, setClassSelected] = useState(null);
  const [studentDetails, setStudentDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch students based on selected class
  const fetchStudents = async (classNumber) => {
    setLoading(true);
    setClassSelected(classNumber);
    setStudentDetails(null); // Clear student details when class is changed
    try {
      const response = await axios.get(`http://localhost:3000/api/students/classes/${classNumber}`);
      setStudents(response.data.students);
    } catch (error) {
      console.error("Error fetching student data:", error);
      setStudents([]);
    } finally {
      setLoading(false);
    }
  };

  // Fetch individual student details based on student ID
  const fetchStudentDetails = async (studentId) => {
    setStudentDetails(null); // Clear previous student details when a new student is clicked
    try {
      const response = await axios.get(`http://localhost:3000/api/student/${studentId}`);
      setStudentDetails(response.data);  // Set the detailed information of the student
    } catch (error) {
      console.error("Error fetching student details:", error);
    }
  };




  return (
    <div className="container text-black bg-gradient bg-success rounded p-5 mt-5">
      <div className="m-5 text-center">
        <div className="col-md-8 m-auto desc_section">
          <h3 className="mb-4">Class Wise Student Details</h3>
          <div className="d-grid gap-3 d-md-flex justify-content-center flex-wrap">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((classNumber) => (
              <button
                key={classNumber}
                type="button"
                className="btn btn-outline-dark"
                onClick={() => fetchStudents(classNumber)}
              >
                Class {classNumber}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-5">
          {loading && <p>Loading students...</p>}
          {!loading && classSelected && (
            <div>
              <h4>Total Students in Class {classSelected} is {students.length}.</h4>
              {students.length > 0 ? (
                <ul className="list-group">
                  {students.map((student, index) => (
                    <li
                      key={index}
                      className="list-group-item"
                      style={{ cursor: "pointer" }}
                      onClick={() => fetchStudentDetails(student._id)}
                    >
                      {student.name}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No students found for this class.</p>
              )}
            </div>
          )}

          {/* Display selected student's details */}
          {studentDetails && (
            <div className="mt-5">
              <h4>{studentDetails.name}</h4>
              {/* <pre>{JSON.stringify(studentDetails, null, 2)}</pre> */}
              <h5>Father&apos;s Name - {studentDetails.father_name}</h5>
              <h5>Mother&apos;s Name - {studentDetails.mother_name}</h5>
              <h5>Date of Birth - {studentDetails.dob.slice(0,10)}</h5>
              <h5>Blood Group - {studentDetails.blood_group}</h5>
              <h5>Address - {studentDetails.address}</h5>
              <h5>Landmark - {studentDetails.landmark}</h5>
              <h5>Pincode - {studentDetails.pincode}</h5>
              <h5>Post Office - {studentDetails.post_office}</h5>
              <h5>District - {studentDetails.district}</h5>
              <h5>State - {studentDetails.state}</h5>
              <h5>Email - {studentDetails.email}</h5>
              <h5>Class - {studentDetails.admission_to_class}</h5>
              <h5>Admission Date - {studentDetails.date_of_admission.slice(0,10)}</h5>
              <h5>Aadhar Number - {studentDetails.aadhar_number}</h5>
              <h5>Payment Status - {studentDetails.payment_status}</h5>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
