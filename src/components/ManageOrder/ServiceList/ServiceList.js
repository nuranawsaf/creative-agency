import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import webDesign from '../../../images/icons/mobile.png';
import Sidebar from '../../DashBoard/Sidebar/Sidebar';

const ServiceList = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const { name, email, photoURL } = loggedInUser;

    return (
        <div className="row">

            <Sidebar></Sidebar>


            <div style={{ height: '100vh', width: '80%', background: '#F4F7FC' }}>

                <div className="pt-5 ml-5 d-flex justify-content-between">
                    <h1 >Order History</h1>
                    <h3 className="mr-5">{name}</h3>
                </div>

                <div className="customFormStyle">

                    <div className="bg-white p-5">
                        <div class="dropdown">
                            <button class="btn btn-transparent btn-outline-danger dropdown-toggle btn-sm" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Pending
                                </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                        <div className="">
                            <img className="my-2" src={webDesign} alt="" style={{ height: '40px' }} />
                            <h3>Web & Mobile design</h3>
                            <p className="text-secondary">We craft stunning and amazing web UI, using a well drrafted UX to fit your product.</p>
                        </div>

                    </div>

                </div>

        </div>
        </div >
    );
};

export default ServiceList;