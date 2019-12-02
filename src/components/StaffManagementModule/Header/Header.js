
// Header component
import React, { Component } from 'react';
import './Header.css';
import logo from '../../../images/logo.png';
import banner from '../../../images/header-banner.png';

export default class Header extends Component {
   render () {
     return (
     	<div className="jumbotron container">
           <div className="row">
            <div className="col" align="left">
             <h3>Staff Management System</h3>   
            </div>
         </div>
            
       </div>
      )
   }
}
