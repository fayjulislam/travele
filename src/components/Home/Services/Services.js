import React from 'react';
import './Services.css';
import UseServices from '../../../Hooks/UseServices';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
import Newslater from '../Newslater/Newslater';

const Services = () => {
    const [services] = UseServices();
    return (
        <>
            <section className="mb-5 mt-5">
                <div className="container shadow-lg px-2 py-3 p-md-5">
                    <h1 className="text-center fw-bolder">TOP NOTCH DESTINATIONS</h1>
                    <Row xs={1} md={3} className="g-4 mt-3">
                        {
                            services.map(service => (<Service
                                key={service.id}
                                service={service}
                            ></Service>))
                        }
                    </Row>
                </div>
            </section>
            <Newslater></Newslater>
        </>
    );
};

export default Services;