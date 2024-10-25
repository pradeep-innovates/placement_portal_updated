import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is installed

const PostAnnouncement = () => {
  const [companies, setCompanies] = useState([]);
  const [companyForm, setCompanyForm] = useState({
    name: "",
    description: "",
    jobDescription: "",
    driveDate: "",
  });
  const [showModal, setShowModal] = useState(false);

  // Fetch companies from the database on component mount
  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    const response = await fetch("http://localhost:3001/companies");
    const data = await response.json();
    setCompanies(data);
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
      setCompanies((prevCompanies) => [...prevCompanies, newCompany]);
      setCompanyForm({ name: "", description: "", jobDescription: "", driveDate: "" });
      setShowModal(false);
    }
  };

  return (
    <div>
      <div className="container-fluid mb-5">
        <div className="row">
          <Sidebar />
          <div className="col-9">
            <h2 className="my-3">Company Announcements</h2>

            {/* Displaying Company Details */}
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
                {companies.map((company, index) => (
                  <tr key={index}>
                    <td>{company.name}</td>
                    <td>{company.description}</td>
                    <td>{company.jobDescription}</td>
                    <td>{company.driveDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Post Announcement Button */}
            <div className="d-flex justify-content-start">
              <button
                className="btn btn-primary"
                onClick={() => setShowModal(true)}
              >
                Post Announcement
              </button>
            </div>

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostAnnouncement;
