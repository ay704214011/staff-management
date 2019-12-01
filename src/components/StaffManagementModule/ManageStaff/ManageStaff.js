/*** LabourDetailsComponenet ****/

import React, { Component } from 'react';
import DateTimePickerComponent from '../../UIComponents/DateTimePickerComponent/';
import StaffSearch from '../StaffSearch/';
import './ManageStaff.css';

export default class ManageStaff extends Component {

	state = {
	  inTime: null,
	  outTime: null,
	  selectedStaff: null,
	  advanceAmount: 0.0,
	  regularAmount: 0.0,
	  isSuccess: false,
	  isError: false
	}

	onSubmit () {
	  const isValid = this.validate();
	  if (isValid) {
	    const { addAttendance } = this.props;
		addAttendance({ ... this.state });
		this.setState({isSuccess: true});
		this.setState({isError: false});
	  }
	  else {
		this.setState({isSuccess: false});
		this.setState({isError: true});
	  }
	}

	onIntimeChange (e) {
	  const inTime = e.value;
	  console.log('In time ', inTime);
	  console.log('Minutes  ', inTime.getMinutes());
	  console.log('Hours  ', inTime.getHours());
	  console.log('Seconds  ', inTime.getSeconds());
	  console.log('Date ', inTime.getDate());
	  this.setState({ inTime });
	}

	onOuttimeChange (e) {
	  this.setState({ outTime: e.value });
	}

	onStaffSelected (selectedStaff) {
	  if (selectedStaff && selectedStaff.fullName) {
	    const advanceAmount = selectedStaff.advanceAmount || 0.0;
	    this.setState({selectedStaff, advanceAmount});
	  }
	  else {
		this.setState({ selectedStaff: null, advanceAmount: 0});
	  }
	}

	onAdvanceAmountChange (e) {
	  const advanceAmount = e.currentTarget.value || 0.00;
	  this.setState({advanceAmount});
	}

	onRegularAmountChange (e) {
	  const regularAmount = e.currentTarget.value || 0.00;
	  this.setState({regularAmount: Number(regularAmount).toFixed(2)})
	}

	validate () {
	  const { selectedStaff, inTime, outTime } = this.state;
	  return selectedStaff && inTime && outTime;
	}

	render () {
		const { inTime, outTime, advanceAmount, isSuccess, isError } = this.state;
		return (
		  <div>
		   {isSuccess && (<div class="alert alert-success" role="alert">Attendance recorded successfully</div>)}
		   {!isSuccess && isError && (<div class="alert alert-danger" role="alert">Please enter mandatory (*) fields</div>)}
		   <p className="section-title">Manage Staff </p>
		   <hr/>
		   <div className="form-group">
		   <div className="form-row" >
		    <div className="col" > 
		     <label for="selectStaff">* Select Staff</label>
			 <StaffSearch {...this.props} onStaffSelected={this.onStaffSelected.bind(this)} />
		    </div>
		    <div className="col" >
		    </div>
		   </div>
		   </div>
		   <div className="form-group">
		   <div className="form-row" >
		    <div className="col" > 
		     <label for="">* In time:</label>
			 <DateTimePickerComponent value={inTime} onChange={(e) => this.onIntimeChange(e)} showTime showSeconds timeOnly hourFormat="12"/>
		    </div>
		    <div className="col" >
		     <label for="">* Out time:</label>
		     <DateTimePickerComponent value={outTime} onChange={(e) => this.onOuttimeChange(e)} showTime showSeconds timeOnly hourFormat="12"/>
		    </div>
		   </div>
		   </div>
		   <div className="form-group">
		   <div className="form-row" >
		    <div className="col" > 
		     <label for="">Payment (Regular)</label>
		     <input type="number" className="form-control" id="regularPayment" onChange={(e) => this.onRegularAmountChange(e)}/>
		    </div>
		    <div className="col" >
		     <label for="">Advance Payment</label>
		     <input type="number" className="form-control" id="advancePayment" value={advanceAmount} onChange={(e) => this.onAdvanceAmountChange(e)}/>
		    </div>
		   </div>
		   </div>
		   <div className="form-group">
             <div className="form-row" >
               <button type="submit" className="btn btn-primary" onClick={() => this.onSubmit()}>Save</button>
             </div>
		   </div>
		</div>)
	}
}