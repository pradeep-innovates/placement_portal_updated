import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';

const StudentDatabase = () => {
  const [students, setStudents] = useState([]);
  const [studentForm, setStudentForm] = useState({
    name: "",
    className: "",
    email: "",
    phone: "",
    resumeLink: "",
    tenthPercentage: "",
    twelfthPercentage: "",
    graduationCGPA: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null); // State for the selected student

  useEffect(() => {
    fetch('http://localhost:3001/students')
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch students');
        }
        return res.json();
      })
      .then(data => setStudents(data))
      .catch(error => console.error('Error fetching students:', error));
  }, []);

  const handleChange = (e) => {
    setStudentForm({
      ...studentForm,
      [e.target.name]: e.target.value,
    });
  };

  // Function to handle adding or updating a student
  const handleStudentSubmit = () => {
    const method = selectedStudent ? 'PUT' : 'POST'; // Determine method based on selectedStudent
    const url = selectedStudent
      ? `http://localhost:3001/students/${selectedStudent._id}`
      : 'http://localhost:3001/students';

    fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(studentForm),
    })
      .then(res => res.json())
      .then(updatedStudent => {
        if (selectedStudent) {
          // Update the existing student in the state
          setStudents(students.map(student =>
            student._id === selectedStudent._id ? updatedStudent : student
          ));
        } else {
          // Add the new student to the state
          setStudents([...students, updatedStudent]);
        }
        resetForm();
      });
  };

  // Function to delete student
  const deleteStudent = (id) => {
    fetch(`http://localhost:3001/students/${id}`, {
      method: 'DELETE',
    }).then(() => {
      setStudents(students.filter(student => student._id !== id));
    });
  };

  // Function to reset the form
  const resetForm = () => {
    setStudentForm({
      name: "",
      className: "",
      email: "",
      phone: "",
      resumeLink: "",
      tenthPercentage: "",
      twelfthPercentage: "",
      graduationCGPA: "",
    });
    setSelectedStudent(null); // Reset selected student
    setShowModal(false); // Close modal
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter students based on search query (name and email)
  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Function to open the modal for updating a student
  const openUpdateModal = (student) => {
    setStudentForm(student); // Populate the form with the selected student's data
    setSelectedStudent(student); // Set the selected student
    setShowModal(true); // Open the modal
  };

  return (
    <div>
      <div className="container-fluid mb-5">
        <div className="row">
          <Sidebar />
          <div className="col-9">
            <h2 className="my-3">Student Database</h2>

            {/* Search input for filtering students */}
            <input
              type="text"
              placeholder="Search by name or email"
              value={searchQuery}
              onChange={handleSearchChange}
              className="form-control mb-3"
            />

            {/* Displaying Students */}
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Class</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Resume Link</th>
                  <th>10th %</th>
                  <th>12th %</th>
                  <th>Graduation CGPA</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.length > 0 ? (
                  filteredStudents.map((student, index) => (
                    <tr key={index}>
                      <td>{student.name}</td>
                      <td>{student.className}</td>
                      <td>{student.email}</td>
                      <td>{student.phone}</td>
                      <td>
                        <a href={student.resumeLink} target="_blank" rel="noopener noreferrer">
                          View Resume
                        </a>
                      </td>
                      <td>{student.tenthPercentage}</td>
                      <td>{student.twelfthPercentage}</td>
                      <td>{student.graduationCGPA}</td>
                      <td>
                        <button className="btn btn-warning" onClick={() => openUpdateModal(student)}>Update</button>
                        <button className="btn btn-danger ms-2" onClick={() => deleteStudent(student._id)}>Delete</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="9" className="text-center">No students found</td>
                  </tr>
                )}
              </tbody>
            </table>

            {/* Add Student Button */}
            <div className="d-flex justify-content-start">
              <button
                className="btn btn-primary"
                onClick={() => {
                  resetForm(); // Reset the form when opening modal to add a new student
                  setShowModal(true);
                }}
              >
                Add Student
              </button>
            </div>

            {/* Modal for Adding/Updating Students */}
            {showModal && (
              <div className="modal show" style={{ display: "block", backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">{selectedStudent ? "Update Student" : "Add Student"}</h5>
                      <button
                        type="button"
                        className="btn-close"
                        onClick={resetForm}
                      ></button>
                    </div>
                    <div className="modal-body">
                      {/* Form fields */}
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={studentForm.name}
                        onChange={handleChange}
                        className="form-control mb-2"
                      />
                      <input
                        type="text"
                        name="className"
                        placeholder="Class"
                        value={studentForm.className}
                        onChange={handleChange}
                        className="form-control mb-2"
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={studentForm.email}
                        onChange={handleChange}
                        className="form-control mb-2"
                      />
                      <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        value={studentForm.phone}
                        onChange={handleChange}
                        className="form-control mb-2"
                      />
                      <input
                        type="url"
                        name="resumeLink"
                        placeholder="Resume Link"
                        value={studentForm.resumeLink}
                        onChange={handleChange}
                        className="form-control mb-2"
                      />
                      <input
                        type="number"
                        name="tenthPercentage"
                        placeholder="10th Percentage"
                        value={studentForm.tenthPercentage}
                        onChange={handleChange}
                        className="form-control mb-2"
                      />
                      <input
                        type="number"
                        name="twelfthPercentage"
                        placeholder="12th Percentage"
                        value={studentForm.twelfthPercentage}
                        onChange={handleChange}
                        className="form-control mb-2"
                      />
                      <input
                        type="number"
                        name="graduationCGPA"
                        placeholder="Graduation CGPA"
                        value={studentForm.graduationCGPA}
                        onChange={handleChange}
                        className="form-control mb-2"
                      />
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={resetForm}
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={handleStudentSubmit}
                      >
                        {selectedStudent ? "Update Student" : "Add Student"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDatabase;
