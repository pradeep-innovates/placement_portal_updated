import React from 'react';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <section id="home">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5">
                            <h1 className="display-4 fw-bolder mb-4 text-center text-white">VESIT Placement Portal</h1>
                            <p className="lead text-center fs-5 mb-5 text-white">Welcome to the Placement Management Portal of Vivekanand Education Society’s Institute of Technology (VESIT)! Established in 1959, VESIT is affiliated with the University of Mumbai and ensures fair admissions through government guidelines. Our portal provides students with career-enhancing resources such as resume building, interview prep, and counseling. With a strong alumni network and centralized admissions, we connect talented students with recruiters for mutual success.<br/>Join us and embark on your journey to success at VES!</p>
                            <div className="buttons d-flex justify-content-center">
                                <NavLink to="/contact" className="btn btn-light me-4 rounded-pill px-4 py-2">Ask Query</NavLink>
                                <NavLink to="/service" className="btn btn-outline-light rounded-pill px-4 py-2">Our Features</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <About/>
            <Services/>
            <Contact/>
        </div>
    );
}

export default Home;
