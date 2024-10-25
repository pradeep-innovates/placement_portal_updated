import React from "react";

const Services = () => {
  return (
    <div>
      <section id="service">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-12">
              <h3 className="fs-5 text-center mb-0">Our Features</h3>
              <h1 className="display-6 text-center mb-4">
                Our <b>Awesome</b> Features
              </h1>
              <hr className="w-25 mx-auto" />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4">
              <a
                href="https://www.tucareers.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <div className="card p-3 ">
                  <div className="card-body text-center">
                    <i className="fa fa-cogs fa-4x mb-4 text-primary"></i>
                    <h5 className="card-title mb-3 fs-4 fw-bold">Career Guidance</h5>
                    <p className="card-text lead">
                      Access comprehensive career guidance, shaping your professional path.                  </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4">
              <a
                href="https://unstop.com/workshops-webinars"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <div className="card p-3 ">
                  <div className="card-body text-center">
                    <i className="fa fa-mobile fa-4x mb-4 text-primary"></i>
                    <h5 className="card-title mb-3 fs-4 fw-bold">Events and Workshops</h5>
                    <p className="card-text lead">
                      Discover diverse career events and workshops, enriching your professional journey.
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4">
              <a
                href="https://vesit.ves.ac.in/alumni-speaks"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <div className="card p-3 ">
                  <div className="card-body text-center">
                    <i className="fa fa-users fa-4x mb-4 text-primary"></i>
                    <h5 className="card-title mb-3 fs-4 fw-bold">Alumni Network</h5>
                    <p className="card-text lead">
                      Leverage our robust alumni network to expand your professional horizons.
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4">
              <a
                href="https://www.indiabix.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <div className="card p-3 ">
                  <div className="card-body text-center">
                    <i className="fa fa-laptop fa-4x mb-4 text-primary"></i>
                    <h5 className="card-title mb-3 fs-4 fw-bold">Skill Assessment Tests</h5>
                    <p className="card-text lead">
                      Engage in comprehensive skill assessment tests, refining your professional aptitude.
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4">
              <a
                href="https://www.resumebuilder.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <div className="card p-3 ">
                  <div className="card-body text-center">
                    <i className="fa fa-file-code-o fa-4x mb-4 text-primary"></i>
                    <h5 className="card-title mb-3 fs-4 fw-bold">Resume Builder</h5>
                    <p className="card-text lead">
                      Utilize our streamlined Resume Builder to craft professional resumes effortlessly.
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-4">
              <a
                href="https://collegedunia.com/college/15528-vivekanand-education-society-institute-of-technology-vesit-mumbai/reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <div className="card p-3 ">
                  <div className="card-body text-center">
                    <i className="fa fa-star-half-o fa-4x mb-4 text-primary"></i>
                    <h5 className="card-title mb-3 fs-4 fw-bold">Feedback and Reviews</h5>
                    <p className="card-text lead">
                      Explore insightful feedback and reviews, shaping your career journey effectively.
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
