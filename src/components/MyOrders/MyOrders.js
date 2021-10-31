import Button from '@restart/ui/esm/Button';
import React, { useEffect, useHistory, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMapMarkerAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';

const MyOrders = () => {

    const { user } = useAuth();
    // const history = useHistory();
    const [pkgOrder, setPkgOrder] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/myorders/${user?.email}`)
        .then((res) => res.json())
            .then((data) => setPkgOrder(data));
    }, [user?.email]);
    const handleOrderDelete = (id) => {
        const proceed = window.confirm('Are you Sure, Delete Your Data?');
        if(proceed){
            const url = `http://localhost:5000/orderdelete/${id}`;

            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        Swal.fire("Data Deleted SuccessFully!",
                            "success"
                        )

                    }
                    // history.push('/manageorders');
                });
        }
        
    }

    return (
            <section className="mb-5 mt-5">
                <div className="container shadow-lg px-2 py-3 p-md-5">
                    <h1 className="text-center fw-bolder">MY ALL ORDERS</h1>
                    <Row xs={1} md={3} className="g-4 mt-3">
                        {
                            pkgOrder.map(orders => {
                                return(
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
                                                </Card.Text>
                                            </Card.Body>
                                            <Card.Footer>
                                                <div className="text-center">
                                                    <Button onClick={() => handleOrderDelete(orders._id)} variant="outline-danger" className="fs-6 fw-bolder">Delete Order</Button>
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

export default MyOrders;