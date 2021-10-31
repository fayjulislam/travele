import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

const Blog = (props) => {
    const { title, short_description, image } = props.blog;
    return (
        <div>
            <Col>
                <Card className="service-card">
                    <Card.Img variant="top" src={image} />
                    <Card.Body className="service-body">
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {short_description}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <div className="d-flex justify-content-center">
                            <Button variant="outline-danger" className="fs-6 fw-bolder">Read More</Button>
                        </div>
                    </Card.Footer>
                </Card>
            </Col>
        </div >
    );
};

export default Blog;