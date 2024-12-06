const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Student = require("./models/student.model");
const cors = require("cors");


app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(cors());


mongoose
  .connect("mongodb://127.0.0.1:27017/student")
  .then(() => {
    console.log(`Connected to DB`);
  })
  .catch((error) => {
    console.log(error);
  });

app.post("/api/students", async (req, res) => {
  try {
    console.log(req.body);
    const student = await Student.create(req.body);
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.get("/api/students", async (req, res) => {
  try {
    const student = await Student.find({});
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.get("/api/students/classes/:classNumber", async (req, res) => {
  const { classNumber } = req.params;

  try {
    // Fetch students belonging to the specified class
    const students = await Student.find({ admission_to_class: classNumber });
    
    // If no students found, return a message
    if (students.length === 0) {
      return res.status(404).json({
        message: `No students found for class ${classNumber}`,
      });
    }

    res.status(200).json({
      class: classNumber,
      students: students,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});



// API route to get a specific student by ID
app.get("/api/student/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const student = await Student.findById(id);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


app.delete("/api/student/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const student = await Student.findByIdAndDelete(id)
      if(!student){
        return res.status(404).json({
            message: "Student not found"
        })
      }
      res.status(200).json({
        message: "Student deleted successfully"
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  });

app.put("/api/student/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const student = await Student.findByIdAndUpdate(id, updateData, {
        new: true, runValidators: true
    });
    if(!student){
        return res.status(404).json({
            message: "Student not found"
        })
    }
    res.status(200).json(student)
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.listen(3000, () => {
  console.log(`Server is up and running on PORT 3000`);
});
