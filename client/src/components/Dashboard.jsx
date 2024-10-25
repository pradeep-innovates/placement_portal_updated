import { useContext } from 'react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useEffect } from "react";

const Dashboard = () => {
  const context = useContext('auth')

  const user = {
    name: "",
    password: "",
  };

  useEffect(() => {
    // JavaScript logic for collapsible elements
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }
  }, []);

  return (
    <div>
      <div className="container-fluid mb-5">
        <div className="row">
          <nav
            id="sidebarMenu"
            className="col-md-4 col-lg-3 d-md-block bg-light sidebar collapse"
          >
            <div className="position-sticky pt-3">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <NavLink className="nav-link active spaced-link" aria-current="page" to="/profile">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-user"
                      aria-hidden="true"
                      style={{ marginRight: '8px' }} // Adjust spacing as needed
                    >
                      <circle cx="12" cy="7" r="4"></circle>
                      <path d="M12 14c-2.67 0-8 1.337-8 4v2h16v-2c0-2.663-5.33-4-8-4z"></path>
                    </svg>
                    My Profile
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link spaced-link" to="/announcement">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-bell"
                      aria-hidden="true"
                      style={{ marginRight: '8px' }} // Adjust spacing as needed
                    >
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                    </svg>
                    Announcements
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link spaced-link" to="/recruitment">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-calendar"
                      aria-hidden="true"
                      style={{ marginRight: '8px' }} // Adjust spacing as needed
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    Application Tracking
                  </NavLink>
                </li>
                {/* <li className="nav-item">
                  <NavLink className="nav-link spaced-link" to="/resumebuild">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-file-text"
                      aria-hidden="true"
                      style={{ marginRight: '8px' }} // Adjust spacing as needed
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    Resume Builder
                  </NavLink>
                </li> */}
                <li className="nav-item">
                  <NavLink className="nav-link spaced-link" to="/companiesvisited">
                    <svg xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-map-pin"
                      aria-hidden="true"
                      style={{ marginRight: '8px' }} // Adjust spacing as needed
                    >
                      <path d="M12 22s-8-4.488-8-12a8 8 0 0 1 16 0c0 7.512-8 12-8 12z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>

                    Companies Visited
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link spaced-link" to="/placementstats">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-bar-chart-2"
                      aria-hidden="true"
                      style={{ marginRight: '8px' }} // Adjust spacing as needed
                    >
                      <line x1="18" y1="20" x2="18" y2="10"></line>
                      <line x1="12" y1="20" x2="12" y2="4"></line>
                      <line x1="6" y1="20" x2="6" y2="14"></line>
                    </svg>
                    Placement Statistics
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>

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
              <h1 className="h1">Welcome {user.name}!</h1>
            </div>
            <br />
            <br />
            <div className="">
              <h3 className="justify-content-center">UPCOMING COMPANIES</h3>
            </div>
            <div className="row mt-4">
              <div className="col-md-6">
                <div className="card p-3 ">
                  <div className="card-body">
                    <div className="card-content">
                      <img
                        src="./assets/image3.png"
                        alt="Company Logo"
                        className="logo"
                      />
                      <div>
                        <h5 className="card-title mb-3 fs-4 fw-bold">Nomura</h5>
                        <p className="card-text">
                          <span className="badge bg-light text-primary" style={{ marginRight: '10px' }}>
                            <i class="fa fa-check fa-lg me-2"></i>Product based
                          </span>
                          <span className="badge bg-light text-primary me-5" style={{ marginRight: '10px' }}>
                            <i class="fa fa-briefcase fa-lg me-2"></i>12 LPA
                          </span>
                        </p>
                        <p className="card-text">
                          <i class="fa fa-calendar me-2"></i>26 Jan 2023
                          <i className="me-3"></i>
                          <i class="fa fa-users fa-lg me-2 mb-3"></i>15 students
                          <i className="me-3"></i>
                          <i class="fa fa-user-secret fa-lg me-2"></i>Position - Java Developer
                        </p>
                        <a href="https://www.nomura.com/india/careers/" class="btn btn-primary mt-3" target="_blank">
                          Apply Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card p-3">
                  <div className="card-body">
                    <div className="card-content">
                      <img
                        src="./assets/image.jpeg"
                        alt="Company Logo"
                        className="logo"
                      />
                      <div>
                        <h5 className="card-title mb-3 fs-4 fw-bold">
                          BNP Paribas
                        </h5>
                        <p className="card-text">
                          <span className="badge bg-light text-primary" style={{ marginRight: '10px' }}>
                            <i class="fa fa-check fa-lg me-2"></i>Service based
                          </span>
                          <span className="badge bg-light text-primary me-5" style={{ marginRight: '10px' }}>
                            <i class="fa fa-briefcase fa-lg me-2"></i>9 LPA
                          </span>
                        </p>
                        <p className="card-text">
                          <i class="fa fa-calendar me-2"></i>26 Jan 2023
                          <i className="me-3"></i>
                          <i class="fa fa-users fa-lg me-2 mb-3"></i>15 students
                          <i className="me-3"></i>
                          <i class="fa fa-user-secret fa-lg me-2"></i>Position - Data Analyst
                        </p>
                        <a href="https://apac.bnppispl.com/dist/career/career.html" class="btn btn-primary mt-3" target="_blank">
                          Apply Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
