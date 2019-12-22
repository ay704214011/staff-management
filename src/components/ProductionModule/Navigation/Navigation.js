// Navigation component
import React, { Component } from 'react';
import './Navigation.css';
import MaterialInputLayout from '../MaterialInputLayout';
import ProductionInput from '../Production/ProductionInput';
import ProductionOutput from '../Production/ProductionOutput';
import ProductionReport from '../Production/ProductionReport';
import { TreeTable } from 'primereact/treetable';
import $ from 'jquery';

export default class Navigation extends Component {

	state = {
	  activeTab: 'materialInput'
	}

	setActiveTab (event) {
       $('#navbarNavAltMarkup').find('a').removeClass('active');
       $(event.currentTarget).addClass('active');
       const tabId = $(event.currentTarget).attr('id');
       switch (tabId) {
       	case 'material-input': 
           this.setState({activeTab: 'materialInput'});
		   break;
		case 'production-input': 
           this.setState({activeTab: 'productionInput'});
		   break;
		case 'production-output': 
           this.setState({activeTab: 'productionOutput'});
		   break;
		case 'production-report': 
           this.setState({activeTab: 'productionReport'});
           break;
        default:
           break;
       }
   	}

   	getActiveView () {
   	  const { activeTab } = this.state;
   	  let activeView = '';
      switch (activeTab) {
       	case 'materialInput': 
           activeView = <MaterialInputLayout {...this.props}/>;
		   break;
		case 'productionInput': 
           activeView = <ProductionInput {...this.props}/>;
		   break;
		case 'productionOutput': 
           activeView = <ProductionOutput {...this.props}/>;
		   break;
		case 'productionReport': 
           activeView = <ProductionReport {...this.props}/>;
           break;
        default:
           break;
       }
       return activeView;
   	}

   render () {
   	  const activeView = this.getActiveView();
      return (
      	<>
     	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
		    <span class="navbar-toggler-icon"></span>
		  </button>
		  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
		    <div class="navbar-nav">
		      <a class="nav-item nav-link active" href="#" onClick={this.setActiveTab.bind(this)} id="material-input">Material Input<span class="sr-only">(current)</span></a>
			  <a class="nav-item nav-link active" href="#" onClick={this.setActiveTab.bind(this)} id="production-input">Production Input<span class="sr-only">(current)</span></a>
			  <a class="nav-item nav-link active" href="#" onClick={this.setActiveTab.bind(this)} id="production-output">Production Output<span class="sr-only">(current)</span></a>
			  <a class="nav-item nav-link active" href="#" onClick={this.setActiveTab.bind(this)} id="production-report">Production Report<span class="sr-only">(current)</span></a>
		    </div>
		  </div>
		</nav>
		<div>
		{activeView}
		</div>
		</>
      )
   }
}