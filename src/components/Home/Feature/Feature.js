import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import './Feature.css';

const Feature = () => {
    return (
        <section className="feature mb-5">
            <div className="container">
                <div className="row">
                    <CardGroup>
                        <Card className="feaature-card p-2">
                            <Card.Body>
                                <Card.Title>Search</Card.Title>
                                <Card.Text>
                                    <input type="text" placeholder="Search Destination" />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="feaature-card p-2">
                            <Card.Body>
                                <Card.Title>Pax Number</Card.Title>
                                <Card.Text>
                                    <input type="text" placeholder="No. Of People" />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="feaature-card p-2">
                            <Card.Body>
                                <Card.Title>Checkin Date*</Card.Title>
                                <Card.Text>
                                    <input type="date" name="" id="" />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="feaature-card p-2">
                            <Card.Body>
                                <Card.Title>Checkout Date*</Card.Title>
                                <Card.Text>
                                    <input type="date" name="" id="" />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="feaature-card p-2">
                            <Card.Body>
                                <Card.Title>{''}</Card.Title>
                                <Card.Text>
                                   <Button variant="danger" className="btn btn-lg">INQUIRE NOW</Button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </div>
            </div>
        </section>
    );
};

export default Feature;