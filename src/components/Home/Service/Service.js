import React from 'react';
import './Service.css';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { _id, people, price, title, photo, day } = props.service;
    return (
        <div>
            <Col>
                <Card className="service-card">
                    <Card.Img variant="top" src={photo} />
                    <Card.Body className="service-body text-center">
                        <Card.Title>{title}</Card.Title>
                        <Card.Text className="text-center">
                            <h6>Cost: <span className="text-danger">{price}</span></h6>
                            <div className="row border border-1">
                                <div className="col-md-6">
                                    <p>Member: {people}</p>
                                </div>
                                <div className="col-md-6">
                                    <p>Days: {day}</p>
                                </div>
                            </div>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <div className="text-center">
                            <Link to={`/bookNow/${_id}`}>
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