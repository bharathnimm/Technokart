import React, { Component } from 'react';
import Navbar from './components/Navbar/navbar';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Imagecontent from './components/Imagecontent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Content />
        <Imagecontent/>
        <Footer />
      </div>
    );
  }
}

export default App;
