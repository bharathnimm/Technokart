import React, { Component } from 'react';
import './Sidebar.css'; // Ensure this CSS file exists

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <ul>
          <li><a href="#">Overview</a></li>
          <li><a href="#">Analytics</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;