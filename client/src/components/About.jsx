import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
    return (
        <section id="about" className="pb-5">
                <div className="container my-5 py-5">
                    <div className="row"> 
                        <div className="col-md-6">
                            <img src="/assets/about1.jpg" alt="About" className="w-75 mt-5" />
                        </div>
                        <div className="col-md-6">
                            <h3 className="fs-5 mb-0">About Us</h3>
                            <h1 className="display-6 mb-2">Who <b>We</b> Are</h1>
                            <hr className="w-50"/>
                            <p className="lead mb-4">Discover the gateway to career advancement with VESIT's Placement Management Portal. As a premier institution, we empower students with essential tools like resume crafting and interview readiness. Leveraging our extensive alumni network and streamlined admissions process, we facilitate connections between skilled individuals and recruiters. Join our platform to kickstart your journey towards success at Vivekanand Education Society’s Institute of Technology (VESIT)!</p>
                            <NavLink to="/login" className="btn btn-primary rounded-pill px-4 py-2">Get Started</NavLink>
                            <NavLink to="/contact" className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">Contact Us</NavLink>
                        </div>
                    </div>
                </div>
            </section>
    );
}

export default About;
