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
                            <p className="pb-3">Looking for a unique vacation destination? Then maybe a trip to one of the 10 most unique tourist destinations might.</p>
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