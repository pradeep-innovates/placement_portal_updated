import React from "react"
import { NavLink } from 'react-router-dom';
import Sidebar from "./Sidebar";


const CompaniesVisited = (props) => {
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
              <h1 className="h2">Companies Visited</h1>
            </div>
            <div className="row mt-5">
              <div className="col-md-4">
                <div class="card p-3">
                  <div class="card-body text-center">
                    <img
                      src="/assets/image2.jpg"
                      alt="image2"
                      className="w-75 mt-4"
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div class="card p-3">
                  <div class="card-body text-center">
                    <img
                      src="/assets/image3.png"
                      alt=""
                      className="w-75 mt-4"
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div class="card p-3">
                  <div class="card-body text-center">
                    <img
                      src="/assets/image5.jpg"
                      alt=""
                      className="w-75 mt-4"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-md-4">
                <div class="card p-3">
                  <div class="card-body text-center">
                    <img
                      src="/assets/image.jpg"
                      alt=""
                      className="w-75 mt-4"
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div class="card p-3">
                  <div class="card-body text-center">
                    <img
                      src="/assets/img4.png"
                      alt=""
                      className="w-75 mt-4"
                    />
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div class="card p-3">
                  <div class="card-body text-center">
                    <img
                      src="/assets/img7.png"
                      alt="jpmc"
                      className="w-75 mt-4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
};

export default CompaniesVisited;
