import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './AddNewPackage.css';

const AddNewPackage = () => {
    return (
        <div className="add-new-package">
            <>
                <div className="col-md-6 mx-auto p-5">
                    <div>
                        <Form className="mb-3">
                            <Form.Control
                                id="placeName"
                                type="text"
                                placeholder="Enter Place Name"
                            />
                        </Form>
                    </div>
                    <div className="mb-3">
                        <Form>
                            <Form.Control
                                id="noOfPeople"
                                type="number"
                                placeholder="No. Of People"
                            />
                        </Form>
                    </div>
                    <div className="mb-3">
                        <Form>
                            <Form.Control
                                id="packagePrice"
                                type="number"
                                placeholder="Package Price"
                            />
                        </Form>
                    </div>
                    <div className="mb-3">
                        <Form>
                            <Form.Control
                                id="packagePhoto"
                                type="text"
                                placeholder="Photo URL"
                            />
                        </Form>
                    </div>
                    <div className="mb-3 text center">
                        <Form >
                            <Button variant="danger">Add Package</Button>
                        </Form>
                    </div>
                </div>
            </>
        </div>
    );
};

export default AddNewPackage;