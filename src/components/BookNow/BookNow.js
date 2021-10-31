import React, { useEffect, useState } from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import {useForm} from 'react-hook-form';
import { useHistory, useLocation, useParams } from 'react-router';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';

const BookNow = () => {
    const history = useHistory();
    const { user } = useAuth();

    const { register, handleSubmit } = useForm();

    const {id} = useParams();
    const [orders, setOrders] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/allorder/${id}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    },[id])

    const onSubmit = data =>{
        data.status = 'pending';
        data.email = user?.email;
        data.order = orders;
        fetch('http://localhost:5000/placeorder', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(data)
        })
        .then(res => {
            if(res){
                Swal.fire(
                    "Wow",
                    "Order Placed",
                    "Success"
                )
            }
            // history.push('/myorders');
        })
    }

    
    
    return (
        <div>
            <section>
                <div className="container shadow-lg px-2 py-3 p-md-5 mt-5 mb-5">
                    <div className="row">
                        <div className="col-m-8">
                            <h2 className="mb-4 text-center">
                                Please fill the form to place an order
                            </h2>
                            <Form onSubmit={handleSubmit(onSubmit)} >
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control {...register("name")} value={user?.displayName} type="text" placeholder="Enter Name" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control {...register("email")} value={user?.email} type="email" placeholder="Enter Email" />
                                    </Form.Group>
                                </Row>

                                <Form.Group className="mb-3" controlId="formGridAddress1">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control {...register("address")}
                                        type="address"
                                        placeholder="Habiganj Sylhet" />
                                </Form.Group>


                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridCity">
                                        <Form.Label>Phone</Form.Label>
                                        <Form.Control {...register("number")}
                                            type="number"
                                            placeholder="01777777777"
                                        />
                                    </Form.Group>

                                </Row>

                                <Button type="submit" variant="danger">
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