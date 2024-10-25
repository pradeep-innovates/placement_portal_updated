import { useContext } from 'react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useEffect } from "react";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const context = useContext('auth')

  const user = {
    name: "Admin",
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
          <Sidebar/>

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
