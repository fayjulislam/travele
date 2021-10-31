import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Singleservice.css';
import Newslater from '../Newslater/Newslater';

const Singleservice = () => {
    const [single, setSingle] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/netstermonir/img/main/fakedata.json')
            .then(res => res.json())
            .then(data => setSingle(data))
    }, [])
    const { slug } = useParams();
    const alldetails = single.filter(service => service.slug === slug);
    return (
        <div>
            <div className="container-fluid mt-5">
                <div className="card mb-3 single-card">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={alldetails[0]?.image} className="img-fluid rounded-start" alt="" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title fs-3 text-bolder text-muted">{alldetails[0]?.title}</h5>
                                <p className="card-text text-justify fs-6 text-bolder text-muted">{alldetails[0]?.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <Link to="/services">
                        <Button variant="info fs-5 text-bolder text-white">Back to Places</Button>
                    </Link>
                </div>
            </div>
            <Newslater></Newslater>
        </div>
    );
};

export default Singleservice;