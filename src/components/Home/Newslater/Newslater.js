import React from 'react';
import { Container, Form, Row, Button } from 'react-bootstrap';
import './Newslater.css';

const Newslater = () => {
    return (
        <div>
            <section id="newsletter" className="py-5 my-5">
                <Container>
                    <Row className="mt-5">
                        <div className="col-12">
                            <div className="shadow-lg px-2 py-3 p-md-5 newsletter-container">
                                <h4 className="abril-font text-center p-4">Subscribe To Our NewsLetter !</h4>
                                <Form onSubmit={(e) => e.preventDefault()}>
                                    <div className="input-group mb-3">
                                        <input
                                            type="email"
                                            className="form-control py-3 shadow-none"
                                            placeholder="Recipient's Email"
                                            aria-label="Recipient's Email"
                                            aria-describedby="basic-addon2"
                                        />
                                        <Button variant="danger"
                                            className="px-md-5 fw-bold"
                                            id="basic-addon2"
                                            style={{ cursor: "pointer" }}
                                        >
                                            Subscribe
                                        </Button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Newslater;