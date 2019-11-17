import React, { Component } from 'react';
import DatePickerComponent from '../../UIComponents/DatePickerComponent/';
import { AutoComplete } from '@progress/kendo-react-dropdowns';

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
	  }]
 }

 getTotalPayment (paymentType) {
	 const { attendanceDetails } = this.state;
	 const totalPayment = attendanceDetails.reduce((acc, attendance) => {
       return Number(acc + Number(attendance[paymentType]));
	 }, 0);
	 return totalPayment.toFixed(2);
 }

 render () {
     const { attendanceDetails, staffList } = this.state;
 	return (<>
	     <p className="section-title">Attendance</p>
		 <hr/>
 		 <div className="form-group">
 		 <div className="form-row" >
          <div className="col" > 
		     <label htmlFor="">From:</label>
		     <DatePickerComponent />
		    </div>
		    <div className="col" >
		     <label HtmlFor="">To:</label>
		     <DatePickerComponent />
		    </div>
 		 </div>
 		 </div>
		<div className="form-group">
 		 <div className="form-row" >
          <div className="col" > 
		     <label htmlFor="">Select Staff</label>
			 <AutoComplete data={staffList} placeholder="e.g. Ram chandra" textField="name" className="form-control" />
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