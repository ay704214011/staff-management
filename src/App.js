import React from 'react';
import logo from './logo.svg';
import Header from './components/Header/';
import StaffManagementModuleContainer from './components/StaffManagementModule/StaffManagementModuleContainer';
// import './App.css';

function App() {
  return (
     <>
     <Header />
     <div class="container" id="module-container">
      <div className="App">
        <StaffManagementModuleContainer />
      </div>
    </div>
    </>
  );
}

export default App;
