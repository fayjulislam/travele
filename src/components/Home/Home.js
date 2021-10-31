import React from 'react';
import Banner from './Bannar/Banner';
import Feature from './Feature/Feature';
import './Home.css';
import { Button, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Service from './Service/Service';
import UseServices from '../../Hooks/UseServices';
import Newslater from './Newslater/Newslater';
import Contact from '../Contact/Contact';
import Blogs from '../Blogs/Blogs';

const Home = () => {
    const [services] = UseServices();
    if (services.length === 0) {
        return (
            <div style={{ minHeight: '100vh' }} className="d-flex justify-content-center mt-5">
                <Spinner animation="grow" variant="danger" />
            </div>
        )
    }

    return (
        <div>
            <Banner></Banner>
            <Feature></Feature>

            <section className="container ">
                <div className="row ">
                    <div className="col-md-6 text-center">
                        <img className="img-fluid w-100 p-4" src="https://dtora.wpengine.com/wp-content/uploads/2019/03/world-img.png" alt="" />
                    </div>
                    <div className="col-md-6 mt-5">
                        <div>
                            <h1>The Best Great Tourism is Right Here</h1>
                        </div>
                        <div>
                            <p>Looking for a unique vacation destination? Then maybe a trip to one of the 10 most unique tourist destinations might.</p>
                            <p>There is not a better way to spend money, than spending money on travel. This is what we say, others and science.</p>
                            <p>We do our best to have you a wonderful experience by taking you to the wonderful and amazing places around the world.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Homepage Services Area  */}
            <section className="mb-5 mt-5">
                <div className="container shadow-lg px-2 py-3 p-md-5">
                    <h1 className="text-center fw-bolder">TOP NOTCH DESTINATIONS</h1>
                    <Row xs={1} md={4} className="g-4 mt-3">
                        {
                            services.slice(0, 8).map(service => (<Service
                                key={service.id}
                                service={service}
                            ></Service>))
                        }
                    </Row>
                </div>
                <div className="text-center mt-3">
                    <Link to="/packages">
                        <Button variant="danger" className="fs-6 fw-bolder text-white">See All Destinations</Button>
                    </Link>
                </div>
            </section>
            <Blogs></Blogs>
            <Contact></Contact>
            <Newslater></Newslater>
        </div>
    );
};

export default Home;