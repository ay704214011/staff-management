
// Header component
import React, { Component } from 'react';
import Header from '../ModuleHeader/';
import Navigation from './Navigation/';
 
export class ProductionModuleLayout extends Component {

   render () {
     return (<>
     	 <Header moduleName="Production Management"/>
     	 <Navigation {...this.props} />
         </>
      )
   }
}

export default ProductionModuleLayout;
