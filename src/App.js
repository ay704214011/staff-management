import React from 'react';
import logo from './logo.svg';
import Header from './components/Header/';
import StaffManagementModuleLayout from './components/StaffManagementModule/StaffManagementModuleLayout';
// import './App.css';

function App() {
  return (
     <>
     <Header />
     <div class="container" id="module-container">
      <div className="App">
        <StaffManagementModuleLayout />
      </div>
    </div>
    </>
  );
}

export default App;
