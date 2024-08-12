import React, { Component } from 'react';
import './index.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-text">
          <p>Over the years, working with Nature has helped us realize 'less is more and usually more effective'.</p>
        </div>
        <div className="footer-links">
          
          <ul>
            <li><a href="#instagram">Instagram</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
          <ul>
            <li><a href="#instagram">Terms</a></li>
            <li><a href="#contact">Privacy and policy</a></li>
            <li><a href="#contact">Return Policy</a></li>
          </ul>
        </div>
       
      </footer>
    );
  }
}

export default Footer;
