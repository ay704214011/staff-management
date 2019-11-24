/*** LabourDetailsComponenet ****/

import React, { Component } from 'react';
import DateTimePickerComponent from '../../UIComponents/DateTimePickerComponent/';
import { Dropdown } from 'primereact/dropdown';
import $ from 'jquery';
import * as moment from 'moment';

export default class AddStaff extends Component {

	state = {
	  dateOfBirth: null,
	  departmentList: [{
		label: 'Loader Staff',
		value: 'loaderStaff'
	  },
	  {
		label: 'Driver Staff',
		value: 'driverStaff'
	  },
	  {
		label: 'CRU. Staff',
		value: 'cruStaff'
	  }]
	}

	componentDidMount () {
	  this.$node = $(this.refs.datepicker);
	}

	onSubmit () {
	  console.log('on submit ', $('input'));
	}

	onDobChange (e) {
	  const dateOfBirth = moment(e.value, 'DD-MM-YYYY').format('DD-MM-YYYY');
	  this.setState({dateOfBirth});
	  console.log('date of birth ', dateOfBirth);
	}

	render () {
		const { dateOfBirth, departmentList, department } = this.state;
		return (
		  <div>
		   <p className="section-title">Add Staff </p>
		   <hr/>
		   <div className="form-group">
		   <div className="form-row" >
		    <div className="col" > 
		     <label for="">First Name</label>
		     <input type="text" className="form-control" id="firstName" aria-describedby="firstName" />
		    </div>
		    <div className="col" >
		     <label for="staff-type">Last Name</label>
		     <input type="text" className="form-control" id="lastName" aria-describedby="lastName" />
		    </div>
		    </div>
		   </div>
		  <div className="form-group">
		   <div className="form-row" >
		   <div className="col" >
		    <label for="address">Address</label>
		    <textarea  type="text" className="form-control" id="amount"></textarea>
		  </div>
		  <div className="col">
		     <label for="">Joining Date</label>
		     <DateTimePickerComponent value={dateOfBirth} onChange={(e) => this.onDobChange(e)} showIcon dateFormat="dd/mm/yyyy" yearNavigator yearRange="1970:2010"/>
		   </div>
		  </div>
		  </div>
		  <div className="form-group">
		  <div className="form-row">
		   <div className="col" >
           <label for="department">Department</label>
           <Dropdown value={department} options={departmentList} onChange={(e) => {this.setState({department: e.value})}} placeholder="Select department" className="form-control"/>
		   </div>
		   <div className="col" ></div>
		  </div>
		  </div>
		  <div className="form-group">
             <div className="form-row" >
               <button type="submit" className="btn btn-primary" onClick={() => {this.onSubmit();}}>Add details</button>
             </div>
		   </div>
		</div>)
	}
}