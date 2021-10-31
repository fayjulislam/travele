import React from 'react';
import './About.css';
import Newslater from '../Home/Newslater/Newslater';

const About = () => {

    const aboutImg = 'https://image.freepik.com/free-vector/hand-drawn-travel-youtube-thumbnail_23-2148997478.jpg';

    return (
        <>
            <section className="about mt-5 mb-5">
                <div className="container">
                    <div className="mb-5">
                        <h1 className="fw-bolder mb-2 text-center">About Travele</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <div className="about-imgs">
                                <img className="about-img img-fluid" src={aboutImg} alt="" />
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="about-text">
                                <h2 className="fw-bolder">Our Story</h2>
                                <p className="text-justify text-muted">
                                    Mollit voluptatem perspiciatis convallis elementum corporis quo veritatis aliquid blandit, blandit torquent, odit placeat. Adipiscing repudiandae eius cursus? Nostrum magnis maxime curae placeat.

                                    Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.

                                    Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Newslater></Newslater>
        </>
    );
};

export default About;