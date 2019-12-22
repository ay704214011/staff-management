import React from 'react';
import Header from './components/AppHeader';
// import StaffManagementModuleContainer from './components/StaffManagementModule/StaffManagementModuleContainer';
import ProductionModuleLayout from './components/ProductionModule/ProductionModuleLayout';
// import './App.css';

function App() {
  return (
     <>
     <Header />
     <div class="container" id="module-container">
      <div className="App">
        <ProductionModuleLayout />
      </div>
    </div>
    </>
  );
}

export default App;
