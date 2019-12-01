// Navigation component
import React, { Component } from 'react';
import './Navigation.css';
import AddStaff from '../AddStaff/';
import ManageStaff from '../ManageStaff/';
import AttendanceReport from '../AttendanceReport/';
import ExpenseReport from '../ExpenseReport/';
import $ from 'jquery';

export default class Navigation extends Component {

	state = {
	  activeTab: 'addStaff'
	}

	setActiveTab (event) {
       $('#navbarNavAltMarkup').find('a').removeClass('active');
       $(event.currentTarget).addClass('active');
       const tabId = $(event.currentTarget).attr('id');
       switch (tabId) {
       	case 'add-staff': 
           this.setState({activeTab: 'addStaff'});
           break;
        case 'manage-staff': 
           this.setState({activeTab: 'manageStaff'});
           break;
        case 'attendance-report': 
           this.setState({activeTab: 'attendanceReport'});
           break;
        case 'expense-report': 
           this.setState({activeTab: 'expenseReport'});
           break;
        default:
           break;
       }
   	}

   	getActiveView () {
   	  const { activeTab } = this.state;
   	  let activeView = '';
      switch (activeTab) {
       	case 'addStaff': 
           activeView = <AddStaff {...this.props}/>;
           break;
        case 'manageStaff': 
            activeView = <ManageStaff {...this.props}/>;
           break;
        case 'attendanceReport': 
            activeView = <AttendanceReport {...this.props}/>;
           break;
        case 'expenseReport': 
           activeView = <ExpenseReport {...this.props} />;
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
		      <a class="nav-item nav-link active" href="#" onClick={this.setActiveTab.bind(this)} id="add-staff">Add Staff <span class="sr-only">(current)</span></a>
		      <a class="nav-item nav-link" href="#" onClick={this.setActiveTab.bind(this)} id="manage-staff">Manage Staff</a>
		      <a class="nav-item nav-link" href="#" onClick={this.setActiveTab.bind(this)} id="attendance-report">Attendance Report</a>
            <a class="nav-item nav-link" href="#" onClick={this.setActiveTab.bind(this)} id="expense-report">Expense Report</a>
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