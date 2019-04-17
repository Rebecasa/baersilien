import React from 'react';

const Header = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-image-logo">
        <a href="#">
          <img className="logo" src="assets/images/logo.jpg" />
        </a>
        <h1>Bärsilien</h1>
      </div>

      <div className="navbar-links">
        <li><a href="#pictures">PICTURES</a></li>
        <li><a href="#reviews" >REVIEWS</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </div>
    </div>
  );
}

export default Header;
