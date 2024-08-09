import React from 'react';
import Dashboard from './components/Dashboard/Dashboard'; // Updated path
import Navbar from './components/Navbar/Navbar';         // Updated path
import Sidebar from './components/Sidebar/Sidebar';      // Updated path

function App() {
  return (
    <>
      <Sidebar />
      <Navbar />
      <Dashboard />
    </>
  );
}

export default App;