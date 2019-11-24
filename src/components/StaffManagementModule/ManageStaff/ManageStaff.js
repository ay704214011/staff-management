/*** LabourDetailsComponenet ****/

import React, { Component } from 'react';
import DateTimePickerComponent from '../../UIComponents/DateTimePickerComponent/';
import StaffSearch from '../StaffSearch/';
import $ from 'jquery';
import './ManageStaff.css';

export default class ManageStaff extends Component {

	state = {
	  staffList: [{
		name: 'Ram Sahay',
		department: 'Driver',
	  },
	  {
		name: 'Ram Swaroop',
		department: 'Driver',
	  },
	  {
		name: 'Mangat Ram',
		department: 'Loader',
	  }],
	  inTime: null,
	  outTime: null,
	}

	onSubmit () {
	  console.log('on submit ', $('input'));
	}

	onIntimeChange (e) {
	  const inTime = e.value;
	  console.log('In time ', inTime);
	  console.log('Minutes  ', inTime.getMinutes());
	  console.log('Hours  ', inTime.getHours());
	  console.log('Seconds  ', inTime.getSeconds());
	  this.setState({ inTime });
	}

	onOuttimeChange (e) {
	  this.setState({ outTime: e.value });
	}

	render () {
		const { inTime, outTime, selectedStaff, filterStaffSingle } = this.state;
		return (
		  <div>
		   <p className="section-title">Manage Staff </p>
		   <hr/>
		   <div className="form-group">
		   <div className="form-row" >
		    <div className="col" > 
		     <label for="selectStaff">Select Staff</label>
			 <StaffSearch />
		    </div>
		    <div className="col" >
		    </div>
		   </div>
		   </div>
		   <div className="form-group">
		   <div className="form-row" >
		    <div className="col" > 
		     <label for="">In time:</label>
			 <DateTimePickerComponent value={inTime} onChange={(e) => this.onIntimeChange(e)} showTime showSeconds timeOnly hourFormat="12"/>
		    </div>
		    <div className="col" >
		     <label for="">Out time:</label>
		     <DateTimePickerComponent value={outTime} onChange={(e) => this.onOuttimeChange(e)} showTime showSeconds timeOnly hourFormat="12"/>
		    </div>
		   </div>
		   </div>
		   <div className="form-group">
		   <div className="form-row" >
		    <div className="col" > 
		     <label for="">Payment (Regular)</label>
		     <input type="number" className="form-control" id="regularPayment"/>
		    </div>
		    <div className="col" >
		     <label for="">Advance Payment</label>
		     <input type="number" className="form-control" id="advancePayment"/>
		    </div>
		   </div>
		   </div>
		   <div className="form-group">
             <div className="form-row" >
               <button type="submit" className="btn btn-primary" onClick={() => {this.onSubmit();}}>Save</button>
             </div>
		   </div>
		</div>)
	}
}