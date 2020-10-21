import React from 'react';
import { Link } from 'react-router-dom';
import graphic from '../../../images/icons/graphic.png';
import mobile from '../../../images/icons/mobile.png';
import web from '../../../images/icons/web.png';
import './ServiceDetails.css'

const ServiceDetails = () => {
    return (
        <Link to={'/dashboard'} style={{ textDecoration: 'none' }} >

            <div className="d-flex"  style={{ height: 250 }}>

                <div className="card-body text-center services-card" style={{ width: '40px' }}>

                    <img src={graphic} alt="No Image" style={{ height: '40px' }} />

                    <h3 className="text-dark">Graphic Designer</h3>
                    <p className="text-secondary">We craft stunning and amazing <br/> web UI, using a well <br/> drrafted UX to fit your product.</p>


                </div>


                <div className="card-body text-center services-card " style={{ width: '40px' }}>

                    <img src={mobile} alt="No Image" style={{ height: '40px' }} />

                    <h3 className="text-dark">Web & Mobile design</h3>
                    <p className="text-secondary">We craft stunning and amazing <br/> web UI, using a well <br/> drrafted UX to fit your product.</p>


                </div>

                <div className="card-body text-center services-card" style={{ width: '40px' }} >

                    <img src={web} alt="No Image" style={{ height: '40px' }} />

                    <h3 className="text-dark">Web Development</h3>
                    <p className="text-secondary">We craft stunning and amazing <br/> web UI, using a well <br/> drrafted UX to fit your product.</p>


                </div>

            </div>

        </Link>
    );
};

export default ServiceDetails;