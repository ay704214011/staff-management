import React, { Component } from 'react';
import DateTimePickerComponent from '../../UIComponents/DateTimePickerComponent/';
import StaffSearch from '../StaffSearch/';
import * as moment from 'moment';

export default class AttndanceReport extends Component {

 state = {
 	attendanceDetails: [{
 		date: '01-11-2019',
 		inTime: '09:00 AM',
 		outTime: '06:00 PM',
 		Name: 'Ram Swaroop',
        regularPayment: '300.00',
        AdvancePayment: ''
 	},
 	{
 		date: '01-11-2019',
 		inTime: '09:30 AM',
 		outTime: '05:00 PM',
 		Name: 'Hari Kishan',
        regularPayment: '300.00',
        AdvancePayment: '500.00'
 	},
 	{
 		date: '01-11-2019',
 		inTime: '10:00 AM',
 		outTime: '05:00 AM',
 		Name: 'Ram Swaroop',
        regularPayment: '250.00',
        AdvancePayment: ''
 	},
 	{
 		date: '02-11-2019',
 		inTime: '09:00 AM',
 		outTime: '06:00 PM',
 		Name: 'Ram Swaroop',
        regularPayment: '300.00',
        AdvancePayment: '100.00'
 	},
 	{
 		date: '02-11-2019',
 		inTime: '09:30 AM',
 		outTime: '05:00 PM',
 		Name: 'Hari Kishan',
        regularPayment: '300.00',
        AdvancePayment: ''
 	},
 	{
 		date: '02-11-2019',
 		inTime: '10:00 AM',
 		outTime: '05:00 AM',
 		Name: 'Ram Swaroop',
        regularPayment: '250.00',
        AdvancePayment: ''
	 }],
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
	  fromDate: null,
	  toDate: null
 }

 getTotalPayment (paymentType) {
	 const { attendanceDetails } = this.state;
	 const totalPayment = attendanceDetails.reduce((acc, attendance) => {
       return Number(acc + Number(attendance[paymentType]));
	 }, 0);
	 return totalPayment.toFixed(2);
 }

  onFromDateChange (e) {
	const fromDate = moment(e.value, 'DD-MM-YYYY').format('DD-MM-YYYY');
	this.setState({fromDate});
  }

  onToDateChange (e) {
	const toDate = moment(e.value, 'DD-MM-YYYY').format('DD-MM-YYYY');
	this.setState({toDate});
  }

 render () {
     const { attendanceDetails, fromDate, toDate } = this.state;
 	return (<>
	     <p className="section-title">Attendance</p>
		 <hr/>
 		 <div className="form-group">
 		 <div className="form-row" >
          <div className="col" > 
		     <label htmlFor="">From:</label>
			 <DateTimePickerComponent value={fromDate} onChange={(e) => this.onFromDateChange(e)} showIcon dateFormat="dd/mm/yyyy"/>
		    </div>
		    <div className="col" >
		     <label HtmlFor="">To:</label>
			 <DateTimePickerComponent value={toDate} onChange={(e) => this.onToDateChange(e)} showIcon dateFormat="dd/mm/yyyy"/>
		    </div>
 		 </div>
 		 </div>
		<div className="form-group">
 		 <div className="form-row" >
          <div className="col" > 
		     <label htmlFor="">Select Staff</label>
			 <StaffSearch />
		    </div>
		    <div className="col" >
 		 </div>
 		 </div>
		</div>
		<div className="form-group">
		<div className="form-row" >
 		<table class="table table-hover table-striped">
 		<thead>
		    <tr>
		      <th scope="col">Date</th>
		      <th scope="col">Name</th>
		      <th scope="col">In Time</th>
		      <th scope="col">Out Time</th>
		      <th scope="col">Regular Payment (Rs)</th>
		      <th scope="col">Advance (Rs)</th>
		    </tr>
		  </thead>
		  <tbody>
       {attendanceDetails.length && attendanceDetails.map((attendance, index) => {
       	  return (
       	  	<tr>
            <td>{attendance.date}</td>
            <td>{attendance.Name}</td>
            <td>{attendance.inTime}</td>
            <td>{attendance.outTime}</td>
            <td>{attendance.regularPayment}</td>
            <td>{attendance.AdvancePayment ? attendance.AdvancePayment : '-'}</td>
       	  </tr>)
       })}
	   </tbody>
	   <tfoot>
	   <tr><td colspan="4">Total</td><td>{this.getTotalPayment('regularPayment')}</td><td>{this.getTotalPayment('AdvancePayment')}</td></tr>
	   </tfoot>
       </table>
	   </div>
	   </div>
	   </>
 		);
  }
}