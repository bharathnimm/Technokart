import React, { Component } from 'react';
import './navbar.css';


class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className='cont'><h4 className='head'>
            WABISABI PROJECT
         </h4>
          <p>Jajam</p>
          </div>
         
        
        
        <ul className="navbar-links">
          <li><a href="#workshops">Workshops</a></li>
          <li><a href="#collections">Collections</a></li>
          <li><a href="#notes">Notes</a></li>
        </ul>
         <div className="navbar-icons">
          <i className="fas fa-shopping-cart"></i>
          <i className="fas fa-sign-in-alt"></i>
        </div> 
      </nav>
    );
  }
}

export default Navbar;
