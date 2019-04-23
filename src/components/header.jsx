import React, { Component } from 'react';
import Dropdown from './dropdown';

class Header extends Component {
  render() {
   let width = window.innerWidth;
     if (width > 768) {
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
       } else {
          return (
            <div className="navbar-container">
              <div className="navbar-image-logo">
                <a href="#">
                  <img className="logo" src="assets/images/logo.jpg" />
                </a>
                <h1>Bärsilien</h1>
              </div>

              <div style={{display: 'flex', justifyContent: 'center'}} >
                <Dropdown />
             </div>
            </div>
          );
        }
    }
}

export default Header;
