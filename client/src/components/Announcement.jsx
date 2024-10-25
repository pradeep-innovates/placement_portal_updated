import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is installed

const Announcement = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [companyForm, setCompanyForm] = useState({
    name: "",
    description: "",
    jobDescription: "",
    driveDate: "",
  });

  const handleApplyClick = (company) => {
    setSelectedCompany(company);
    setIsPopupOpen(true);
  };

  const handleCloseClick = () => {
    setIsPopupOpen(false);
    setSelectedCompany(null);
  };

  // Fetch announcements from the database on component mount
  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    const response = await fetch("http://localhost:3001/companies");
    const data = await response.json();
    setAnnouncements(data);
  };

  const handleChange = (e) => {
    setCompanyForm({
      ...companyForm,
      [e.target.name]: e.target.value,
    });
  };

  const addCompany = async () => {
    if (
      companyForm.name &&
      companyForm.description &&
      companyForm.jobDescription &&
      companyForm.driveDate
    ) {
      const response = await fetch("http://localhost:3001/companies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(companyForm),
      });
      const newCompany = await response.json();
      setAnnouncements((prevCompanies) => [...prevCompanies, newCompany]);
      setCompanyForm({ name: "", description: "", jobDescription: "", driveDate: "" });
      setShowModal(false);
    }
  };

  return (
    <div>
      <div className="container-fluid mb-5">
        <div className="row">
          <Sidebar />

          <main className="col-md-8 ms-sm-auto col-lg-9 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Announcements</h1>
            </div>

            {announcements.length === 0 ? (
              <p>No announcements to display.</p>
            ) : (
              <table className="table">
                <thead>
                  <tr>
                    <th>Company Name</th>
                    <th>Description</th>
                    <th>Job Role</th>
                    <th>Registration Deadline</th>
                  </tr>
                </thead>
                <tbody>
                  {announcements.map((company) => (
                    <tr key={company._id}> {/* Use _id instead of id */}
                      <td>{company.name}</td>
                      <td>{company.description}</td>
                      <td>{company.jobDescription}</td>
                      <td>{company.driveDate}</td>
                      <td>
                        <button className="btn btn-primary" onClick={() => handleApplyClick(company)}>
                          Apply
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {/* Modal for Posting Company Announcements */}
            {showModal && (
              <div className="modal show" style={{ display: "block", backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title">Post Company Announcement</h5>
                      <button
                        type="button"
                        className="btn-close"
                        onClick={() => setShowModal(false)}
                      ></button>
                    </div>
                    <div className="modal-body">
                      <input
                        type="text"
                        name="name"
                        placeholder="Company Name"
                        value={companyForm.name}
                        onChange={handleChange}
                        className="form-control mb-2"
                      />
                      <textarea
                        name="description"
                        placeholder="Description"
                        value={companyForm.description}
                        onChange={handleChange}
                        className="form-control mb-2"
                      />
                      <input
                        name="jobDescription"
                        placeholder="Job Role"
                        value={companyForm.jobDescription}
                        onChange={handleChange}
                        className="form-control mb-2"
                      />
                      <input
                        type="date"
                        name="driveDate"
                        value={companyForm.driveDate}
                        onChange={handleChange}
                        className="form-control mb-2"
                      />
                    </div>
                    <div className="modal-footer">
                      <button
                        className="btn btn-secondary"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                      <button className="btn btn-success" onClick={addCompany}>
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Popup for Applying to Company */}
            {isPopupOpen && selectedCompany && (
              <div className="popup-overlay">
                <div className="popup-form">
                  <h2>Apply for the Job at {selectedCompany.name}</h2>
                  <form>
                    <div className="form-group">
                      <label htmlFor="name">Name:</label>
                      <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email:</label>
                      <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="resume">Resume:</label>
                      <input type="file" id="resume" name="resume" required />
                    </div>
                    <div className="form-actions">
                      <button type="submit">Submit</button>
                      <button type="button" onClick={handleCloseClick}>Close</button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
