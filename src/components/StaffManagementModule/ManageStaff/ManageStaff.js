/*** LabourDetailsComponenet ****/

import React, { Component } from 'react';
import DateTimePickerComponent from '../../UIComponents/DateTimePickerComponent/';
import $ from 'jquery';

export default class ManageStaff extends Component {

	onSubmit () {
	  console.log('on submit ', $('input'));
	}

	render () {
		return (
		  <div>
		   <p className="section-title">Manage Staff </p>
		   <hr/>
		   <div className="form-group">
		   <div className="form-row" >
		    <div className="col" > 
		     <label for="">Select Staff</label>
		     <select className="form-control" id="staff">
	            <option>Select</option>
	            <option>Ram Sahay - (Driver)</option>
	            <option>Ram Swaroop - (Driver)</option>
	            <option>Mangat Ram - (Loader)</option>
	          </select>
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