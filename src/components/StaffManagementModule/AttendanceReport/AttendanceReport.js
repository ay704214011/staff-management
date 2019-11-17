import React, { Component } from 'react';
import DatePickerComponent from '../../UIComponents/DatePickerComponent/';
import { CURRENCY_SYMBOL } from './AttendanceReportConstants';

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
 	}]
 }

 render () {
     const { attendanceDetails } = this.state;
 	return (<>
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
       </table>
 		</>);
  }
}