import React, { useState } from "react";
import Sidebar from "./Sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';

const Recruitment = () => {
  // Example data for applications, including students and their statuses
  const applications = [
    {
      company: "TechCorp",
      driveDate: "2024-08-20",
      studentsApplied: 45,
      studentList: [
        { name: "John Doe", status: "Pending" },
        { name: "Jane Smith", status: "Interview Scheduled" },
        { name: "Bob Johnson", status: "Rejected" },
      ],
    },
    {
      company: "Innovate Ltd",
      driveDate: "2024-08-21",
      studentsApplied: 30,
      studentList: [
        { name: "Alice Brown", status: "Interview Scheduled" },
        { name: "Charlie Davis", status: "Pending" },
      ],
    },
    {
      company: "DevWorks",
      driveDate: "2024-08-22",
      studentsApplied: 50,
      studentList: [
        { name: "Eve Wilson", status: "Rejected" },
        { name: "Frank Moore", status: "Interview Scheduled" },
      ],
    },
  ];

  // State to control the visibility of the modal
  const [showModal, setShowModal] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);

  // Function to handle showing student list
  const showStudentList = (company) => {
    setSelectedCompany(company); // Set the selected company
    setShowModal(true); // Show the modal
  };

  return (
    <div>
      <div className="container-fluid mb-5">
        <div className="row">
          <Sidebar />
          <main className="col-md-8 ms-sm-auto col-lg-9 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Application Tracking</h1>
            </div>
            <div>
              <table className="application-table table">
                <thead>
                  <tr>
                    <th>Company Name</th>
                    <th>Drive Date</th>
                    <th>Students Applied</th>
                    <th>Show Student List</th>
                  </tr>
                </thead>
                <tbody>
                  {applications.map((app, index) => (
                    <tr key={index}>
                      <td>{app.company}</td>
                      <td>{app.driveDate}</td>
                      <td>{app.studentsApplied}</td>
                      <td>
                        <button
                          className="btn btn-primary"
                          onClick={() => showStudentList(app)}
                        >
                          Show List
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Modal for showing student list */}
            {showModal && selectedCompany && (
              <div className="modal show" style={{ display: "block", backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">{selectedCompany.company} - Student List</h5>
                      <button
                        type="button"
                        className="btn-close"
                        onClick={() => setShowModal(false)}
                      ></button>
                    </div>
                    <div className="modal-body">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Student Name</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {selectedCompany.studentList.map((student, index) => (
                            <tr key={index}>
                              <td>{student.name}</td>
                              <td>{student.status}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="modal-footer">
                      <button
                        className="btn btn-secondary"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Recruitment;
