/*** LabourDetailsComponenet ****/

import React, { Component } from 'react';
import DateTimePickerComponent from '../../UIComponents/DateTimePickerComponent/';
import { AutoComplete } from '@progress/kendo-react-dropdowns';
import $ from 'jquery';

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
	  }]
	}

	onSubmit () {
	  console.log('on submit ', $('input'));
	}

	render () {
		const { staffList } = this.state;
		return (
		  <div>
		   <p className="section-title">Manage Staff </p>
		   <hr/>
		   <div className="form-group">
		   <div className="form-row" >
		    <div className="col" > 
		     <label for="">Select Staff</label>
			<AutoComplete data={staffList} placeholder="e.g. Ram chandra" textField="name" className="form-control" />
		    </div>
		    <div className="col" >
		    </div>
		   </div>
		   </div>
		   <div className="form-group">
		   <div className="form-row" >
		    <div className="col" > 
		     <label for="">In time:</label>
			 <DateTimePickerComponent />
		    </div>
		    <div className="col" >
		     <label for="">Out time:</label>
		     <DateTimePickerComponent />
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