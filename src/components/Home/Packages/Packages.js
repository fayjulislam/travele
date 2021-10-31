import React from 'react';
import {Row } from 'react-bootstrap';
import UseServices from '../../../Hooks/UseServices';
import Service from '../Service/Service';

const Packages = () => {
    const [services] = UseServices();
    return (
        <div>
            <section className="mb-5 mt-5">
                <div className="container shadow-lg px-2 py-3 p-md-5">
                    <h1 className="text-center fw-bolder">OUR PACKAGES</h1>
                    <Row xs={1} md={4} className="g-4 mt-3">
                        {
                            services.map(service => (<Service
                                key={service.id}
                                service={service}
                            ></Service>))
                        }
                    </Row>
                </div>
            </section>
        </div>
    );
};

export default Packages;