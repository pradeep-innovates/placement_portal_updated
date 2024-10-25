import React, { useState, useEffect } from "react";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import Sidebar from "./Sidebar";

const ResumeBuild = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch students data from the backend
    const fetchStudents = async () => {
      try {
        const response = await fetch('http://localhost:3001/students');
        if (!response.ok) {
          throw new Error('Failed to fetch students');
        }
        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchStudents();
  }, []);

  // Function to download a single resume
  const downloadResume = (resumeLink) => {
    const link = document.createElement("a");
    link.href = resumeLink;
    link.download = resumeLink.split('/').pop(); // Use the file name from the link
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Function to download all resumes as a ZIP file
  const downloadAllResumes = async () => {
    const zip = new JSZip();

    // Fetching all resume files and adding them to the zip
    const fetchPromises = students.map(async (student) => {
      const response = await fetch(student.resumeLink); // Fetch the resume file
      const blob = await response.blob(); // Get the blob of the file
      zip.file(`${student.name}.pdf`, blob); // Add it to the zip with the student's name
    });

    // Wait for all fetches to complete
    await Promise.all(fetchPromises);

    // Generate the zip file
    zip.generateAsync({ type: "blob" }).then((content) => {
      // Trigger download
      saveAs(content, "resumes.zip");
    });
  };

  // Function to handle search input change
  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
  };

  // Filter students based on the search query
  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchQuery)
  );

  return (
    <div>
      <div className="container-fluid mb-5">
        <div className="row">
          <Sidebar />
          <main className="col-md-8 ms-sm-auto col-lg-9 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Resume Bank</h1>
            </div>

            {/* Search input for filtering resumes */}
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search by student name"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>

            {/* Table for student resumes */}
            <div>
              <table className="table">
                <thead>
                  <tr>
                    <th>Student Name</th>
                    <th>Resume</th>
                    <th>Download</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStudents.length > 0 ? (
                    filteredStudents.map((student, index) => (
                      <tr key={index}>
                        <td>{student.name}</td>
                        <td>
                          <a href={student.resumeLink} target="_blank" rel="noopener noreferrer">
                            View Resume
                          </a>
                        </td>
                        <td>
                          <button
                            className="btn btn-primary"
                            onClick={() => downloadResume(student.resumeLink)}
                          >
                            Download
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3" className="text-center">No students found</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Button to download all resumes, aligned to the left */}
            <div className="d-flex justify-content-start">
              <button
                className="btn btn-success"
                onClick={downloadAllResumes}
              >
                Download All Resumes
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuild;
