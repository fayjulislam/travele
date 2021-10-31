import React, { useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import './AddNewPackage.css';

const AddNewPackage = () => {
    useEffect(() => {
        document.title = 'AddNewPackage : Travele Travel Agency';
    }, []);



    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch('https://chilling-eyeballs-31128.herokuapp.com/packages', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })

            .then(res => {
                if (res) {
                    Swal.fire("Wow!",
                        "Package Added Successfully",
                        "Success"
                    )
                }
            })
    };
    return (
        <div className="add-new-package">
            <>
                <div className="col-md-6 mx-auto p-5 shadow-lg mt-5 rounded rounded-5">
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">

                            <Form.Control {...register("title")}
                                id="placeName"
                                type="text"
                                placeholder="Enter Place Name"
                            />

                        </div>
                        <div className="mb-3">

                            <Form.Control {...register("people")}
                                id="noOfPeople"
                                type="number"
                                placeholder="No. Of People"
                            />

                        </div>
                        <div className="mb-3">

                            <Form.Control {...register("price")}
                                id="packagePrice"
                                type="number"
                                placeholder="Package Price"
                            />

                        </div>
                        <div className="mb-3">

                            <Form.Control {...register("day")}
                                id="packagePrice"
                                type="number"
                                placeholder="No. Of Days"
                            />

                        </div>
                        <div className="mb-3">

                            <Form.Control {...register("photo")}
                                id="packagePhoto"
                                type="text"
                                placeholder="Photo URL"
                            />

                        </div>
                        <div className="mb-3 text center">
                            <Button type="submit" variant="danger">Add Package</Button>
                        </div>
                    </Form>
                </div>
            </>
        </div>
    );
};

export default AddNewPackage;