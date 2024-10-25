import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Sidebar from './Sidebar';

const Announcement = (props) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleApplyClick = () => {
        setIsPopupOpen(true);
    };

    const handleCloseClick = () => {
        setIsPopupOpen(false);
    };

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
              <h1 className="h2">Announcements</h1>
            </div>
            <div className="company-box">
              <div className="company-name">Saint Gobin</div>
              <div className="company-description">
                This is the company description.
              </div>
              <button className="apply-button" onClick={handleApplyClick}>Apply</button>
            </div>
            <div className="company-box">
              <div className="company-name">ImpactSure</div>
              <div className="company-description">
                This is the company description.
              </div>
              <button className="apply-button" onClick={handleApplyClick}>Apply</button>
            </div>

            {isPopupOpen && (
                <div className="popup-overlay">
                    <div className="popup-form">
                        <h2>Apply for the Job</h2>
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
