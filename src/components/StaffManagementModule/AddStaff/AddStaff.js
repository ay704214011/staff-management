/*** LabourDetailsComponenet ****/

import React, { Component } from 'react';
import DateTimePickerComponent from '../../UIComponents/DateTimePickerComponent/';
import { Dropdown } from 'primereact/dropdown';
import $ from 'jquery';
import * as moment from 'moment';
import { find } from 'lodash';
import './AddStaff.css';

export default class AddStaff extends Component {

	state = {
	  dateOfBirth: null,
	  firstName: null,
	  lastName: null,
	  address: null,
	  department: null,
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
	  }],
	  errors: {},
	  isSuccess: false
	}

	componentDidMount () {
	  this.$node = $(this.refs.datepicker);
	}

	onSubmit () {
	  const { addStaff, staffList } = this.props;
	  const { firstName, lastName, dateOfBirth, department} = this.state;
	  this.validate();
	  const { errors } = this.state;
	  const isValid = Object.keys(errors).length > 0 ? false : true;
	  const fullName = firstName ? (lastName ? `${firstName} ${lastName}` : `${firstName}`) : '';
	  if (isValid) {
	    addStaff({
		  firstName,
		  lastName,
		  dateOfBirth,
		  department,
		  fullName
		});
		this.setState( {isSuccess: true});
	  }
	  else {
		this.setState( {isSuccess: false});
	  }
	}

	validate () {
	 const { firstName, lastName, errors } = this.state;
	 const { staffList } = this.props;

	 // FirstName
	 if (!firstName) {
	   errors.firstName = 'Please enter first Name';
	 }
	 else {
	   const fullName = firstName ? (lastName ? `${firstName} ${lastName}` : `${firstName}`) : '';
	   const isDuplicate = find(staffList, { fullName });
	   if (isDuplicate) {
	     errors.firstName = 'Staff is already added';
	   }
	   else {
	     delete errors.firstName;
	   }
	 }

	 this.setState({ errors });
	}

	onDobChange (e) {
	  const dateOfBirth = moment(e.value, 'DD-MM-YYYY').format('DD-MM-YYYY');
	  this.setState({dateOfBirth});
	  console.log('date of birth ', dateOfBirth);
	}

	render () {
		const { dateOfBirth, departmentList, department, errors, isSuccess } = this.state;
		console.log('errors ', errors);
		return (
		  <div>
			{isSuccess && (<div class="alert alert-success" role="alert">Staff added successfully</div>)}
			{Object.keys(errors).length > 0 && Object.keys(errors).map(key => {
			return <div class="alert alert-danger" role="alert" key={key}>{errors[key]}</div>
			})}
		   
		   <p className="section-title">Add Staff </p>
		   <hr/>
		   <div className="form-group">
		   <div className="form-row" >
		    <div className="col" > 
		     <label for="">First Name</label>
		     <input type="text" className="form-control" id="firstName" aria-describedby="firstName" onChange={(e) => {this.setState({firstName: e.currentTarget.value})}}/>
		    </div>
		    <div className="col" >
		     <label for="staff-type">Last Name</label>
		     <input type="text" className="form-control" id="lastName" aria-describedby="lastName" onChange={(e) => {this.setState({lastName: e.currentTarget.value})}} />
		    </div>
		    </div>
		   </div>
		  <div className="form-group">
		   <div className="form-row" >
		   <div className="col" >
		    <label for="address">Address</label>
		    <textarea  type="text" className="form-control" id="amount" onChange={(e) => {this.setState({address: e.currentTarget.value})}}></textarea>
		  </div>
		  <div className="col">
		     <label for="">Joining Date</label>
		     <DateTimePickerComponent value={dateOfBirth} onChange={(e) => this.onDobChange(e)} showIcon dateFormat="dd/mm/yyyy" yearNavigator yearRange="1970:2010" className="width-60"/>
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