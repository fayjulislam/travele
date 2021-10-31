import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const NotFound = () => {
    const notFound = 'https://image.freepik.com/free-vector/internet-network-warning-404-error-page-file-found-web-page_1150-48324.jpg'
    return (
        <>
            <div className="text-center">
                <div className="mt-5">
                    <img src={notFound} alt="Page Not Found" />
                </div>
                <div className="mb-5">
                    <Link to="/">
                        <Button variant="danger" className="fs-5 fw-bolder">
                            Back To Home
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default NotFound;