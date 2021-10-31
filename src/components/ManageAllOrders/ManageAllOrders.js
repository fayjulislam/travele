import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

const ManageAllOrders = () => {
    const [manageAllOrder, setManageAllOrder] = useState([]);
    useEffect(() => {
        fetch('https://chilling-eyeballs-31128.herokuapp.com/manageallorders')
            .then((res) => res.json())
            .then((data) => setManageAllOrder(data));
    });
    const handleDelete = (id) => {
        const proced = window.confirm('Are you Sure, Delete Your Data?');
        if (proced) {
            const url = `https://chilling-eyeballs-31128.herokuapp.com/allorderdelete/${id}`

            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            "Data Delete SuccessFull!",
                            "success"
                        )

                    }
                })
        }
    }
    const handleUpdate = (id) => {
        const url = `https://chilling-eyeballs-31128.herokuapp.com/placeorders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(manageAllOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {

                    Swal.fire("WoW!",
                        "Status Update SuccessFull!",
                        "success"
                    )
                }
            })
    }
    return (
        <section className="mb-5 mt-5">
            <div className="container shadow-lg px-2 py-3 p-md-5">
                <h1 className="text-center fw-bolder">MY ALL ORDERS</h1>
                <Row xs={1} md={3} className="g-4 mt-3">
                    {
                        manageAllOrder.map(orders => {
                            return (
                                <Col>
                                    <Card className="service-card">
                                        <Card.Img variant="top" src={orders?.order?.photo} />
                                        <Card.Body className="service-body text-center">
                                            <Card.Title>{orders?.order?.title}</Card.Title>
                                            <Card.Text className="text-center">
                                                <h6>Cost: <span className="text-danger">{orders?.order?.price}</span></h6>
                                                <div className="row border border-1">
                                                    <div className="col-md-6">
                                                        <p>Member: {orders?.order?.people}</p>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <p>Days: {orders?.order?.day}</p>
                                                    </div>
                                                </div>
                                                <div className="fw-bolder">
                                                    <p>Status: {orders?.status}</p>
                                                </div>
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            <div className="text-center d-flex justify-content-between">
                                                <Button onClick={() => handleDelete(orders._id)} variant="outline-danger" className="fs-6 fw-bolder">Delete Order</Button>
                                                <Button onClick={() => handleUpdate(orders._id)} variant="outline-danger" className="fs-6 fw-bolder">Update</Button>
                                            </div>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </div>
        </section>
    );
};

export default ManageAllOrders;