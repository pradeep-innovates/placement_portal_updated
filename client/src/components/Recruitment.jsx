  import React from "react";
  import { NavLink } from "react-router-dom";
  import Sidebar from './Sidebar';

  const Recruitment = (props) => {
    const applications = [
      { date: "2024-08-20", company: "TechCorp", status: "Applied" },
      {
        date: "2024-08-21",
        company: "Innovate Ltd",
        status: "Interview Scheduled",
      },
      { date: "2024-08-22", company: "DevWorks", status: "Rejected" },
    ];

    return (
      <div>
        <div className="container-fluid mb-5">
          <div className="row">
          <Sidebar />

            <main className="col-md-8 ms-sm-auto col-lg-9 px-md-4">
              <div className="chartjs-size-monitor">
                <div className="chartjs-size-monitor-expand">
                  <div className=""></div>
                </div>
                <div className="chartjs-size-monitor-shrink">
                  <div className=""></div>
                </div>
              </div>
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Application Tracking</h1>
              </div>
              <div>
                <table className="application-table">
                  <thead>
                    <tr>
                      <th>Date of the Drive</th>
                      <th>Company Name</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {applications.map((app, index) => (
                      <tr key={index}>
                        <td>{app.date}</td>
                        <td>{app.company}</td>
                        <td>{app.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  };

  export default Recruitment;
