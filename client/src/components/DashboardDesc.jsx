import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import StudentSvg from "../assets/student.svg";

ChartJS.register(ArcElement, Tooltip, Legend);

const DashboardDesc = () => {
  const [studentCount, setStudentCount] = useState(0);
  const [classData, setClassData] = useState([]);

  useEffect(() => {
    // Fetch the total number of students and data grouped by class
    const fetchStudentData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/students");
        const data = await response.json();
        
        setStudentCount(data.length); // Total number of students

        // Count students by class
        const classCounts = {};
        data.forEach((student) => {
          const classNumber = student.admission_to_class;
          classCounts[classNumber] = (classCounts[classNumber] || 0) + 1;
        });

        // Convert classCounts object into an array for chart
        const classNames = Object.keys(classCounts);
        const classValues = Object.values(classCounts);
        setClassData({ labels: classNames, datasets: [{ data: classValues, backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#FF6347', '#3B9D8B', '#FF5733', '#DAF7A6'] }] });
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };

    fetchStudentData();
  }, []);

  return (
    <div className="container text-white bg-gradient bg-success rounded ">
      <div className="row m-5 text-center p-4">
        <div className="col-md-4 m-auto desc_section">
          <h5>Total Number of Students - {studentCount}</h5>
          <h6>Class Wise Distribution</h6>
          {classData.labels && classData.labels.length > 0 && (
            <Doughnut
             style={{ width: "100px", height: "100px" }}
              data={classData}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: "top",
                  },
                  tooltip: {
                    callbacks: {
                      label: function (tooltipItem) {
                        return tooltipItem.label + ": " + tooltipItem.raw;
                      },
                    },
                  },
                },
              }}
            />
          )}
        </div>
        <div className="col-md-6 p-2 my-auto">
          <img src={StudentSvg} className="book_svg" alt="" draggable="false" />
        </div>
      </div>
    </div>
  );
};

export default DashboardDesc;
