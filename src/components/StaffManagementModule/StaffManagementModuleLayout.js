
// Header component
import React, { Component } from 'react';
import Header from './Header/';
import Navigation from './Navigation/';
 
export default class StaffManagementModuleLayout extends Component {
   render () {
     return (
     	<>
     	 <Header />
     	 <Navigation />
     	 </>
      );
   }
}
