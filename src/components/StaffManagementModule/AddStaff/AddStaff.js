/*** LabourDetailsComponenet ****/

import React, { Component } from 'react';
import DatePickerComponent from '../../UIComponents/DatePickerComponent/';
import $ from 'jquery';

export default class AddStaff extends Component {

	componentDidMount () {
	  this.$node = $(this.refs.datepicker);
	}

	onSubmit () {
	  console.log('on submit ', $('input'));
	}

	render () {
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
		     <DatePickerComponent />
		   </div>
		  </div>
		  </div>
		  <div className="form-group">
		  <div className="form-row">
           <label for="department">Department</label>
           <select className="form-control" id="department">
            <option>Select</option>
            <option>Loader Staff</option>
            <option>Driver Staff</option>
            <option>CRU. Stadd</option>
           </select>
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