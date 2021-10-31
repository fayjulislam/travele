import React from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';

const BookNow = () => {
    const history = useHistory();
    const location = useLocation();
    const redirect = location?.state?.from || "/";
    const handlesubmit = (e) => {
        e.preventDefault();
        Swal.fire(
            "Good job!",
            "Booked In SuccessFull!",
            "success"
        )
        setTimeout(() => {
            history.push(redirect);
        }, 3000)
    }
    const { user } = useAuth();
    return (
        <div>
            <section>
                <div className="container shadow-lg px-2 py-3 p-md-5 mt-5 mb-5">
                    <div className="row">
                        <div className="col-m-8">
                            <h2 className="mb-4 text-center">
                                Please fill the form to place an order
                            </h2>
                            <Form>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control value={user?.displayName} type="text" placeholder="Enter Name" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control value={user?.email} type="email" placeholder="Enter Email" />
                                    </Form.Group>
                                </Row>

                                <Form.Group className="mb-3" controlId="formGridAddress1">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control placeholder="Habiganj Sylhet" />
                                </Form.Group>


                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridCity">
                                        <Form.Label>Phone</Form.Label>
                                        <Form.Control
                                            type="number"
                                            placeholder="01777777777"
                                        />
                                    </Form.Group>

                                </Row>

                                <Button onClick={handlesubmit} variant="danger">
                                    Place Order
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BookNow;