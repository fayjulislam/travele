import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './SingleBlog.css';
import Newslater from '../Home/Newslater/Newslater';

const Singleblog = () => {
    const [single, setSingle] = useState([]);
    useEffect(() => {
        fetch('../../../public/blog.json')
            .then(res => res.json())
            .then(data => setSingle(data))
    }, [])
    const { slug } = useParams();
    const alldetails = single.filter(blog => blog.slug === slug);
    return (
        <>
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
                    <Link to="/blogs">
                        <Button variant="outline-danger fs-5 text-bolder">Back To Blogs</Button>
                    </Link>
                </div>
            </div>
            <Newslater></Newslater>
        </>
    );
};

export default Singleblog;