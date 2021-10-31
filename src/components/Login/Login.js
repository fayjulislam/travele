import React from 'react';
import {Button } from 'react-bootstrap';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import useAuth from '../../Hooks/useAuth';
import {useHistory, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
    const history = useHistory();
    const location = useLocation();
    const googleRedirect = location?.state?.from || "/";
    const { error, signinGoogle, setIsLoading } = useAuth();
    const handleGoogleLogin = () => {
        signinGoogle()
            .then(result => {
                Swal.fire("Good job!",
                    "Log In SuccessFull!",
                    "success"
                )
                history.push(googleRedirect);

            }).finally(() => setIsLoading(false))
            .catch((error) => {
                Swal.fire(
                    "Something went wrong!",
                    `${error.message}`,
                    "error"
                )
            })
            .finally(() => setIsLoading(false));
    }

    const google = <FontAwesomeIcon icon={faGoogle} />
    return (
        <div className="container login pt-5" style={{ marginTop: "5rem" }}>
            <div className="row mx-auto">
                <div className="col-md-6 mx-auto">
                    <p className="text-danger text-center">{error}</p>
                    
                    <div className="mt-3 mb-3 text-center fs-4 fw-bolder" >
                        <Button className="p-3 fw-bold" onClick={handleGoogleLogin} variant="danger"> Continue With Google {google}</Button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Login;