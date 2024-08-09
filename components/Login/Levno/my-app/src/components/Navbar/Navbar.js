import React, { Component } from 'react';
import './Navbar.css'; // Ensure this CSS file exists

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-logo">Dashboard</div>
        <div className="navbar-menu">
          <a href="#">Notifications</a>
          <a href="#">Profile</a>
        </div>
      </div>
    );
  }
}

export default Navbar;