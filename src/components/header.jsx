import React from 'react';

const Header = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-image-logo">
        <img className="logo" src="assets/images/logo.jpg" />
        <h1>Bärsilien</h1>
      </div>

      <div className="navbar-links">
        <li><a href="#pictures">Pictures</a></li>
        <li><a href="#events" >Events</a></li>
        <li><a href="#contact">Contact</a></li>
      </div>
    </div>
  );
}

export default Header;
