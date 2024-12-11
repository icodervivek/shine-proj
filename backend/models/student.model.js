const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    student_id: {
      type: Number,
      unique: true,
    },
    name: {
      type: String,
      required: [true, "Student's name is required."],
    },
    father_name: {
      type: String,
      required: [true, "Father's name is required."],
    },
    mother_name: {
      type: String,
      required: [true, "Mother's name is required."],
    },
    dob: {
      type: Date,
      required: [true, "Date of birth is required."],
    },
    blood_group: {
      type: String,
      required: [true, "Blood group is required."],
    },
    guardian_number: {
      type: Number,
      required: [true, "Guardian number is required."],
    },
    address: {
      type: String,
      required: [true, "Address is required."],
    },
    landmark: {
      type: String,
    },
    pincode: {
      type: Number,
      required: [true, "Pin code is required."],
    },
    post_office: {
      type: String,
      required: [true, "Post office is required."],
    },
    district: {
      type: String,
      required: [true, "District is required."],
    },
    state: {
      type: String,
      required: [true, "State is required."],
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter a valid email address.",
      ],
    },
    admission_to_class: {
      type: Number,
      required: [true, "Class number is required."],
    },
    date_of_admission: {
      type: Date,
      required: [true, "Date of admission is required."],
    },
    aadhar_number: {
      type: Number,
      required: [true, "Aadhar number is required."],
    },
    payment_status: {
      type: String,
      enum: ["success", "not_paid"], // Ensures only valid statuses are allowed
      required: [true, "Payment status is required."],
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields automatically
  }
);

studentSchema.pre("save", async function (next) {
  const doc = this;

  if (!doc.isNew) return next(); // Skip if not a new document

  try {
    const count = await mongoose.model("Student").countDocuments();
    doc.student_id = count + 1; // Set student_id to current count + 1
    next();
  } catch (err) {
    next(err);
  }
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
