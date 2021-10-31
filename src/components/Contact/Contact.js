import React from 'react';
import { Container, Form, Row, Button } from 'react-bootstrap';

const Contact = () => {

    const contactImg = 'https://image.freepik.com/free-vector/online-app-tourism-traveler-with-mobile-phone-passport-booking-buying-plane-ticket_74855-10966.jpg';
    return (
        <>
            <section className="form-container py-5">
                <Container>
                    <Row>
                        <div className="col-12 col-md-8 mx-auto">
                            <h2 className="text-center display-3">
                                Get In Touch!
                            </h2>
                            <p className="text-cyan px-md-5 text-center mb-5">
                                We've answered our most common queries in the FAQs. · If you
                                have a query regarding a payment, or wish to change your billing
                                date, you can call usWe've answered our.
                            </p>
                        </div>
                    </Row>
                    <Row>
                        <div className="col-12 col-md-6">
                            <img
                                src={contactImg}
                                alt="contactImg"
                                className="img-fluid w-100 mt-5"
                            />
                        </div>
                        <div className="col-12 col-md-6">
                            <Form>
                                <Row>
                                    <div className="col-12 col-md-6">
                                        <label htmlFor="name" className="text-muted fw-semi-bold">
                                            Name
                                        </label>
                                        <input
                                            id="name"
                                            type="text"
                                            className="form-control border-0 shadow-none py-2 mt-2 mb-4"
                                            style={{ background: "#B1CCFE", color: '#fff' }}
                                        />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <label htmlFor="phone" className="text-muted fw-semi-bold">
                                            Phone
                                        </label>
                                        <input
                                            id="phone"
                                            type="text"
                                            className="form-control border-0 shadow-none py-2 mt-2 mb-4"
                                            style={{ background: "#B1CCFE", color: '#fff' }}
                                        />
                                    </div>
                                </Row>
                                <Row>
                                    <div className="col-12">
                                        <label
                                            htmlFor="address"
                                            className="text-muted fw-semi-bold"
                                        >
                                            Email
                                        </label>
                                        <input
                                            id="address"
                                            type="text"
                                            className="form-control border-0 shadow-none py-2 my-2"
                                            style={{ background: "#B1CCFE", color: '#fff' }}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <label
                                            htmlFor="address"
                                            className="text-muted fw-semi-bold"
                                        >
                                            Address
                                        </label>
                                        <input
                                            id="address"
                                            type="text"
                                            className="form-control border-0 shadow-none py-2 my-2"
                                            style={{ background: "#B1CCFE", color: '#fff' }}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <label
                                            htmlFor="message"
                                            className="text-muted fw-semi-bold"
                                        >
                                            Message
                                        </label>
                                        <textarea
                                            className="form-control border-0 shadow-none py-2 mt-2 mb-3"
                                            rows="3"
                                            style={{ background: "#B1CCFE", color: '#fff' }}
                                        ></textarea>
                                    </div>
                                    <Button variant="danger"
                                        onClick={(e) => e.preventDefault()}
                                        type="submit"
                                        className="p-2 fw-bold shadow-none"
                                    >
                                        Send Your Message
                                    </Button>
                                </Row>
                            </Form>
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Contact;