import React from "react"
import { NavLink } from 'react-router-dom';
import Sidebar from './Sidebar';


const Profile = (props) => {
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
              <h1 className="h1">My Profile</h1>
            </div>
            <section style={{ backgroundColor: '#eee', padding: '20px' }}>

              <div class="row">
                <div class="col-lg-4">
                  <div class="card mb-4">
                    <div class="card-body text-center">
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                        class="rounded-circle img-fluid" style={{ width: '150px' }}></img>
                      <h5 class="my-3">Student1</h5>
                      <p class="text-muted mb-1">MCA-VESIT</p>
                      <p class="text-muted mb-4">Full Stack Developer</p>
                      <div class="d-flex justify-content-center mb-2">
                        <button type="button" class="btn btn-outline-primary">Follow</button>
                        <button type="button" class="btn btn-outline-primary ms-2">Message</button>
                      </div>
                    </div>
                  </div>
                  <div class="card mb-4 mb-lg-0">
                    <div class="card-body p-0">
                      <ul class="list-group list-group-flush rounded-3">
                        <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                          <i class="fa fa-globe fa-lg text-warning"></i>
                          <p class="mb-0">https://sampleweb.com</p>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                          <i class="fa fa-github fa-lg" style={{ color: '#333333' }}></i>
                          <p class="mb-0">sample-github</p>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                          <i class="fa fa-twitter fa-lg" style={{ color: '#55acee' }}></i>
                          <p class="mb-0">@sampletwitter</p>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                          <i class="fa fa-instagram fa-lg" style={{ color: '#ac2bac' }}></i>
                          <p class="mb-0">sampleinsta</p>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                          <i class="fa fa-facebook-f fa-lg" style={{ color: '#3b5998' }}></i>
                          <p class="mb-0">samplefacebook</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-lg-8">
                  <div class="card mb-4">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-sm-3">
                          <p class="mb-0">Name</p>
                        </div>
                        <div class="col-sm-9">
                          <p class="text-muted mb-0">Student1</p>
                        </div>
                      </div>
                      <hr />
                      <div class="row">
                        <div class="col-sm-3">
                          <p class="mb-0">Class</p>
                        </div>
                        <div class="col-sm-9">
                          <p class="text-muted mb-0">FYMCA-B</p>
                        </div>
                      </div>
                      <hr />
                      <div class="row">
                        <div class="col-sm-3">
                          <p class="mb-0">Mobile</p>
                        </div>
                        <div class="col-sm-9">
                          <p class="text-muted mb-0">(098) 765-4321</p>
                        </div>
                      </div>
                      <hr />
                      <div class="row">
                        <div class="col-sm-3">
                          <p class="mb-0">Email</p>
                        </div>
                        <div class="col-sm-9">
                          <p class="text-muted mb-0">student1@gmail.com</p>
                        </div>
                      </div>
                      <hr />
                      <div class="row">
                        <div class="col-sm-3">
                          <p class="mb-0">Address</p>
                        </div>
                        <div class="col-sm-9">
                          <p class="text-muted mb-0">Malabar Hill, Mumbai West</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="card mb-4 mb-md-0">
                        <div class="card-body">
                          <p class="mb-4"><span class="text-primary font-italic me-1">Coding Languages</span>
                          </p>
                          <p class="mb-1" style={{ fontSize: '.95rem' }}>Javascript</p>
                          <div class="progress rounded" style={{ height: '5px' }}>
                            <div class="progress-bar" role="progressbar" style={{ width: '75%' }} aria-valuenow="80"
                              aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <p class="mt-4 mb-1" style={{ fontSize: '.95rem' }}>Python</p>
                          <div class="progress rounded" style={{ height: '5px' }}>
                            <div class="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuenow="72"
                              aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <p class="mt-4 mb-1" style={{ fontSize: '.95rem' }}>Java</p>
                          <div class="progress rounded" style={{ height: '5px' }}>
                            <div class="progress-bar" role="progressbar" style={{ width: '55%' }} aria-valuenow="89"
                              aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <p class="mt-4 mb-1" style={{ fontSize: '.95rem' }}>SQL</p>
                          <div class="progress rounded" style={{ height: '5px' }}>
                            <div class="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="55"
                              aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                          <p class="mt-4 mb-1" style={{ fontSize: '.95rem' }}>MERN Stack</p>
                          <div class="progress rounded mb-2" style={{ height: '5px' }}>
                            <div class="progress-bar" role="progressbar" style={{ width: '75%' }} aria-valuenow="66"
                              aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="card mb-4 mb-md-0">
                        <div class="card-body">
                          <p class="mb-4"><span class="text-primary font-italic me-1">Courses</span>
                          </p>
                          <p class="mb-1" style={{ fontSize: '.95rem' }}>Simple React App from Scratch</p>
                          <div class="d-flex justify-content mb-2">
                            <button type="button" class="btn btn-outline-dark text-dark no-hover" style={{ fontSize: '.77rem' }}>Ongoing</button>
                            <button type="button" class="btn bg-success  border border-dark  text-white ms-2" style={{ fontSize: '.77rem' }}>Completed</button>
                          </div>
                          <p class="mt-4 mb-1" style={{ fontSize: '.95rem' }}>Python for Data Analysis</p>
                          <div class="d-flex justify-content mb-2">
                            <button type="button" class="btn bg-success  border border-dark  text-white" style={{ fontSize: '.77rem' }}>Ongoing</button>
                            <button type="button" class="btn btn-outline-dark text-dark no-hover ms-2" style={{ fontSize: '.77rem' }}>Completed</button>
                          </div>
                          <p class="mt-4 mb-1" style={{ fontSize: '.95rem' }}>DevOps Fundamentals</p>
                          <div class="d-flex justify-content mb-2">
                            <button type="button" class="btn bg-success  border border-dark  text-white" style={{ fontSize: '.77rem' }}>Ongoing</button>
                            <button type="button" class="btn btn-outline-dark text-dark no-hover ms-2" style={{ fontSize: '.77rem' }}>Completed</button>
                          </div>
                          <p class="mt-4 mb-1" style={{ fontSize: '.95rem' }}>Fundamentals of Database Engineering</p>
                          <div class="d-flex justify-content mb-2">
                            <button type="button" class="btn btn-outline-dark text-dark no-hover" style={{ fontSize: '.77rem' }}>Ongoing</button>
                            <button type="button" class="btn bg-success  border border-dark  text-white ms-2" style={{ fontSize: '.77rem' }}>Completed</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
};

export default Profile;
