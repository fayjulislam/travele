import React from 'react';
import './Service.css';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const {member, price, title, image } = props.service;
    return (
        <div>
            <Col>
                <Card className="service-card">
                    <Card.Img variant="top" src={image} />
                    <Card.Body className="service-body text-center">
                        <Card.Title>{title}</Card.Title>
                        <Card.Text className="text-center">
                            <h6>Cost per Person: <span className="text-danger">{price}</span></h6>
                            <p>Member: {member}</p>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <div className="text-center">
                            <Link to="/bookNow">
                                <Button variant="outline-danger" className="fs-6 fw-bolder">Book Now!</Button>
                            </Link>
                        </div>
                    </Card.Footer>
                </Card>
            </Col>
        </div>
    );
};

export default Service;