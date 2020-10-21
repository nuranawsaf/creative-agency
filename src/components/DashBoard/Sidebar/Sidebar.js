import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faSignOutAlt, faCommentDots, faPlus, faUserPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png';


const Sidebar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://aqueous-beyond-67976.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])


    return (
        <div className="sidebar d-flex flex-column justify-content-between" style={{ height: "100vh" }}>

            <ul className="list-unstyled">
                <a className="navbar-brand m-4 mt-5 " href="/dashboard"><img src={logo} alt="" style={{ height: '50px' }} /></a>

                <li>
                    <Link to="/orderForm" className="sideBarlink">
                        <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span>
                    </Link>
                </li>
                <li>
                    <Link to="/serviceList" className="sideBarlink">
                        <FontAwesomeIcon icon={faList} /> <span>Service List</span>
                    </Link>
                </li>
                <li>
                    <Link to="postReview" className="sideBarlink">
                        <FontAwesomeIcon icon={faCommentDots} /> <span>Review</span>
                    </Link>
                </li>

                <div>
                    <li>
                        <Link to="admin" className="sideBarlink">
                            <FontAwesomeIcon icon={faList} /> <span>Admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="addService" className="sideBarlink">
                            <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="makeAdmin" className="sideBarlink">
                            <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                        </Link>
                    </li>
                </div>

            </ul>
            <div className="text-center my-5">
                <Link to="/" className="text-dark"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;