import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Chart from "react-apexcharts";
import Sidebar from "./Sidebar";

const PlacementStats = (props) => {
  const [state] = useState({
    options: {
      chart: {
        id: "basic-bar444 ",
      },
      xaxis: {
        categories: [2016, 2017, 2018, 2019, 2020, 2021, 2022],
      },
    },
    series: [
      {
        name: "Total number of offers",
        data: [583, 597, 687, 604, 630, 775, 529],
      },
      {
        name: "Total placed",
        data: [513, 549, 572, 498, 492, 623, 503],
      },
    ],
  });

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
              <h1 className="h2">Placement Statistics</h1>
            </div>

            <div className="App">
              <h3>Previous Years Placement Record</h3>
              <div className="row">
                <div className="col-4">
                  <Chart
                    options={state.options}
                    series={state.series}
                    type="bar"
                    width="900"
                  />
                  <br />
                </div>
              </div>
            </div>

            <h3 className="justify-content-center">2023-24 Statistics</h3>
            <div className="row mt-5">
              <div className="col-3">
                <div className="card p-1 ">
                  <div className="card-body text-center">
                    <i className="fa  fa-4x mb-4 text-primary"></i>
                    <p className="card-text lead">Total companies visited</p>
                    <h5 className="card-title mb-3 fs-4 fw-bold">61<sup className="supp">*</sup></h5>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card p-1 ">
                  <div className="card-body text-center">
                    <i className="fa  fa-4x mb-4 text-primary"></i>
                    <p className="card-text lead">Total numbers of offers</p>
                    <h5 className="card-title mb-3 fs-4 fw-bold">266<sup className="supp">*</sup></h5>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card p-1 ">
                  <div className="card-body text-center">
                    <i className="fa  fa-4x mb-4 text-primary"></i>
                    <p className="card-text lead">Highest Salary</p>
                    <h5 className="card-title mb-3 fs-4 fw-bold">14.5 LPA<sup className="supp">*</sup></h5>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card p-1 ">
                  <div className="card-body text-center">
                    <i className="fa fa-4x mb-4 text-primary"></i>
                    <p className="card-text lead">Total Placed</p>
                    <h5 className="card-title mb-3 fs-4 fw-bold">261<sup className="supp">*</sup></h5>
                  </div>
                </div>
              </div>
              <div className="asdf">
                <h6>
                  <br />* still counting...2024.</h6>
              </div>
            </div>
<br />
<br />
            <h3 className="justify-content-center">2022-23 Statistics</h3>
            <div className="row mt-5">
              <div className="col-3">
                <div className="card p-1 ">
                  <div className="card-body text-center">
                    <i className="fa  fa-4x mb-4 text-primary"></i>
                    <p className="card-text lead">Total companies visited</p>
                    <h5 className="card-title mb-3 fs-4 fw-bold">96</h5>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card p-1 ">
                  <div className="card-body text-center">
                    <i className="fa  fa-4x mb-4 text-primary"></i>
                    <p className="card-text lead">Total numbers of offers</p>
                    <h5 className="card-title mb-3 fs-4 fw-bold">529</h5>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card p-1 ">
                  <div className="card-body text-center">
                    <i className="fa  fa-4x mb-4 text-primary"></i>
                    <p className="card-text lead">Highest Salary</p>
                    <h5 className="card-title mb-3 fs-4 fw-bold">29 LPA</h5>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card p-1 ">
                  <div className="card-body text-center">
                    <i className="fa fa-4x mb-4 text-primary"></i>
                    <p className="card-text lead">Total Placed</p>
                    <h5 className="card-title mb-3 fs-4 fw-bold">503</h5>
                  </div>
                </div>
              </div>
            </div>


            <br />
<br />
            <h3 className="justify-content-center">2021-22 Statistics</h3>
            <div className="row mt-5">
              <div className="col-3">
                <div className="card p-1 ">
                  <div className="card-body text-center">
                    <i className="fa  fa-4x mb-4 text-primary"></i>
                    <p className="card-text lead">Total companies visited</p>
                    <h5 className="card-title mb-3 fs-4 fw-bold">114</h5>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card p-1 ">
                  <div className="card-body text-center">
                    <i className="fa  fa-4x mb-4 text-primary"></i>
                    <p className="card-text lead">Total numbers of offers</p>
                    <h5 className="card-title mb-3 fs-4 fw-bold">775</h5>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card p-1 ">
                  <div className="card-body text-center">
                    <i className="fa  fa-4x mb-4 text-primary"></i>
                    <p className="card-text lead">Highest Salary</p>
                    <h5 className="card-title mb-3 fs-4 fw-bold">29.25 LPA</h5>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card p-1 ">
                  <div className="card-body text-center">
                    <i className="fa fa-4x mb-4 text-primary"></i>
                    <p className="card-text lead">Total Placed</p>
                    <h5 className="card-title mb-3 fs-4 fw-bold">623</h5>
                  </div>
                </div>
              </div>
            </div>


            <br />
<br />
            <h3 className="justify-content-center">2020-21 Statistics</h3>
            <div className="row mt-5">
              <div className="col-3">
                <div className="card p-1 ">
                  <div className="card-body text-center">
                    <i className="fa  fa-4x mb-4 text-primary"></i>
                    <p className="card-text lead">Total companies visited</p>
                    <h5 className="card-title mb-3 fs-4 fw-bold">94</h5>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card p-1 ">
                  <div className="card-body text-center">
                    <i className="fa  fa-4x mb-4 text-primary"></i>
                    <p className="card-text lead">Total numbers of offers</p>
                    <h5 className="card-title mb-3 fs-4 fw-bold">630</h5>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card p-1 ">
                  <div className="card-body text-center">
                    <i className="fa  fa-4x mb-4 text-primary"></i>
                    <p className="card-text lead">Highest Salary</p>
                    <h5 className="card-title mb-3 fs-4 fw-bold">22 LPA</h5>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card p-1 ">
                  <div className="card-body text-center">
                    <i className="fa fa-4x mb-4 text-primary"></i>
                    <p className="card-text lead">Total Placed</p>
                    <h5 className="card-title mb-3 fs-4 fw-bold">492</h5>
                  </div>
                </div>
              </div>
            </div>

            <br />
<br />
            <h3 className="justify-content-center">2019-20 Statistics</h3>
            <div className="row mt-5">
              <div className="col-3">
                <div className="card p-1 ">
                  <div className="card-body text-center">
                    <i className="fa  fa-4x mb-4 text-primary"></i>
                    <p className="card-text lead">Total companies visited</p>
                    <h5 className="card-title mb-3 fs-4 fw-bold">95</h5>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card p-1 ">
                  <div className="card-body text-center">
                    <i className="fa  fa-4x mb-4 text-primary"></i>
                    <p className="card-text lead">Total numbers of offers</p>
                    <h5 className="card-title mb-3 fs-4 fw-bold">604</h5>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card p-1 ">
                  <div className="card-body text-center">
                    <i className="fa  fa-4x mb-4 text-primary"></i>
                    <p className="card-text lead">Highest Salary</p>
                    <h5 className="card-title mb-3 fs-4 fw-bold">14 LPA</h5>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card p-1 ">
                  <div className="card-body text-center">
                    <i className="fa fa-4x mb-4 text-primary"></i>
                    <p className="card-text lead">Total Placed</p>
                    <h5 className="card-title mb-3 fs-4 fw-bold">498</h5>
                  </div>
                </div>
              </div>
            </div>

            <br />
<br />
            <h3 className="justify-content-center">2018-19 Statistics</h3>
            <div className="row mt-5">
              <div className="col-3">
                <div className="card p-1 ">
                  <div className="card-body text-center">
                    <i className="fa  fa-4x mb-4 text-primary"></i>
                    <p className="card-text lead">Total companies visited</p>
                    <h5 className="card-title mb-3 fs-4 fw-bold">79</h5>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card p-1 ">
                  <div className="card-body text-center">
                    <i className="fa  fa-4x mb-4 text-primary"></i>
                    <p className="card-text lead">Total numbers of offers</p>
                    <h5 className="card-title mb-3 fs-4 fw-bold">687</h5>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card p-1 ">
                  <div className="card-body text-center">
                    <i className="fa  fa-4x mb-4 text-primary"></i>
                    <p className="card-text lead">Highest Salary</p>
                    <h5 className="card-title mb-3 fs-4 fw-bold">15.9 LPA</h5>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card p-1 ">
                  <div className="card-body text-center">
                    <i className="fa fa-4x mb-4 text-primary"></i>
                    <p className="card-text lead">Total Placed</p>
                    <h5 className="card-title mb-3 fs-4 fw-bold">572</h5>
                  </div>
                </div>
              </div>
            </div>

            <br />
<br />
            <h3 className="justify-content-center">2017-18 Statistics</h3>
            <div className="row mt-5">
              <div className="col-3">
                <div className="card p-1 ">
                  <div className="card-body text-center">
                    <i className="fa  fa-4x mb-4 text-primary"></i>
                    <p className="card-text lead">Total companies visited</p>
                    <h5 className="card-title mb-3 fs-4 fw-bold">52</h5>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card p-1 ">
                  <div className="card-body text-center">
                    <i className="fa  fa-4x mb-4 text-primary"></i>
                    <p className="card-text lead">Total numbers of offers</p>
                    <h5 className="card-title mb-3 fs-4 fw-bold">597</h5>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card p-1 ">
                  <div className="card-body text-center">
                    <i className="fa  fa-4x mb-4 text-primary"></i>
                    <p className="card-text lead">Highest Salary</p>
                    <h5 className="card-title mb-3 fs-4 fw-bold">16 LPA</h5>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card p-1 ">
                  <div className="card-body text-center">
                    <i className="fa fa-4x mb-4 text-primary"></i>
                    <p className="card-text lead">Total Placed</p>
                    <h5 className="card-title mb-3 fs-4 fw-bold">549</h5>
                  </div>
                </div>
              </div>
            </div>

            <br />
<br />
            <h3 className="justify-content-center">2016-17 Statistics</h3>
            <div className="row mt-5">
              <div className="col-3">
                <div className="card p-1 ">
                  <div className="card-body text-center">
                    <i className="fa  fa-4x mb-4 text-primary"></i>
                    <p className="card-text lead">Total companies visited</p>
                    <h5 className="card-title mb-3 fs-4 fw-bold">51</h5>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card p-1 ">
                  <div className="card-body text-center">
                    <i className="fa  fa-4x mb-4 text-primary"></i>
                    <p className="card-text lead">Total numbers of offers</p>
                    <h5 className="card-title mb-3 fs-4 fw-bold">583</h5>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card p-1 ">
                  <div className="card-body text-center">
                    <i className="fa  fa-4x mb-4 text-primary"></i>
                    <p className="card-text lead">Highest Salary</p>
                    <h5 className="card-title mb-3 fs-4 fw-bold">16 LPA</h5>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card p-1 ">
                  <div className="card-body text-center">
                    <i className="fa fa-4x mb-4 text-primary"></i>
                    <p className="card-text lead">Total Placed</p>
                    <h5 className="card-title mb-3 fs-4 fw-bold">513</h5>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default PlacementStats;