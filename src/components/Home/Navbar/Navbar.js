import React from 'react';
import './Navbar.css'
import logo from '../../../images/logos/logo.png'

const Navbar = () => {

    function handleClick() {
        
    }

    function comingSoon() {
        alert('This feature is coming Coming Soon!!')
    }
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light ">
            <img src={logo} alt="" className="logo"/>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link mr-5" href="/home">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link mr-5" onClick={comingSoon} href="#">Our Portfolio</a>
      </li>
      <li class="nav-item">
        <a class="nav-link mr-5" onClick={comingSoon} href="#">Our Team</a>
      </li>
      <li class="nav-item">
        <a class="nav-link mr-5" onClick={comingSoon} href="#">Contact Us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link mr-5" href="/login"><button onClick={handleClick} className="btn btn-dark">Login</button></a>
      </li>
    </ul>
  </div>
</nav>
        </div>
    );
};

export default Navbar;