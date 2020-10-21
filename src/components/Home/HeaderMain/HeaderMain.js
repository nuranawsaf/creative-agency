import React from 'react';
import './HeaderMain.css';
import Header from '../../../images/logos/Header.png';

const HeaderMain = () => {
    return (
        <main className="row">
            <div className="col-md-4 offset-md-1 align">
                <h1 className="font-style">Let's Grow Your <br/> Brand To The <br/> Next Level</h1>
                <br/>
                <p>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Purus commodo ipsum duis <br/> laoreet maecenas. Feugiat </p>
                <br/>
                <button className="btn btn-dark">Hire us</button>

            </div>
            <div className="col-md-6">
                <img src={Header} alt="" className="img-fuild"/>
            </div>
        </main>
    );
};

export default HeaderMain;