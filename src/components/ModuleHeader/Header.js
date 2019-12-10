
// Header component
import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
   render () {
     const { moduleName } = this.props;
     return (
     	<div className="jumbotron container">
           <div className="row">
            <div className="col" align="left">
             <h3>{moduleName}</h3>   
            </div>
         </div>
            
       </div>
      )
   }
}
