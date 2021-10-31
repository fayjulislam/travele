import React from 'react';
import './Banner.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <section className="banner-bg">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-8 mx-auto">
                        <div className="banner-text text-center">
                            <h1 className="pb-3 fw-bolder">TRAVELLING AROUND THE WORLD</h1>
                            <p className="pb-3">Taciti quasi, sagittis excepteur hymenaeos, id temporibus hic proident ullam, eaque donec delectus tempor consectetur nunc, purus congue? Rem volutpat sodales! Mollit. Minus exercitationem wisi.</p>
                            <Link to="/bookNow">
                                <Button className="fs-6 fw-bolder text-white" variant="danger">Continue Reading</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;