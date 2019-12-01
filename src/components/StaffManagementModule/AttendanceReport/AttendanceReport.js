import React, { Component } from 'react';
import DateTimePickerComponent from '../../UIComponents/DateTimePickerComponent/';
import StaffSearch from '../StaffSearch/';
import { filter } from 'lodash';
import * as moment from 'moment';

export default class AttndanceReport extends Component {

 state = {
   fromDate: null,
   toDate: null,
   selectedStaff: null
 }

 componentWillMount () {
  const formattedRecordList = this.formatRecordList();
  this.setState({filteredRecordList: formattedRecordList});
 }

 formatRecordList () {
   const { attendanceRecordList } = this.props;
   const formattedList = attendanceRecordList.map((record) => {
	 record.inTimeFormatted = this.formatTime(record.inTime);
	 record.outTimeFormatted = this.formatTime(record.outTime);
	 return record;
   });
   return formattedList;
 }

 formatTime (time) {
   return moment(time).format("hh:mm:ss A");
 }

 getTotalPayment (paymentType) {
	 const filteredRecordList = this.getFilteredList();
	 const totalPayment = filteredRecordList.reduce((acc, attendance) => {
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

  getFilteredList () {
	const { selectedStaff, fromDate, toDate } = this.state;
	const { attendanceRecordList } = this.props;
	let filteredRecordList = attendanceRecordList;
	if (selectedStaff) {
	  filteredRecordList = filter(filteredRecordList, (record) => {
	    return record.staffFullName === selectedStaff.fullName;
	  });
	}
	if (fromDate) {
	  filteredRecordList = filter(filteredRecordList, (record) => {
		const recordDate = moment(record.date, 'DD-MM-YYYY').format('YYYY-MM-DD');
		const fromDateFormatted = moment(fromDate, 'DD-MM-YYYY').format('YYYY-MM-DD');
	    return moment(recordDate).isSameOrAfter(fromDateFormatted, 'day');
	  });
	}
	if (toDate) {
	  filteredRecordList = filter(filteredRecordList, (record) => {
		const recordDate = moment(record.date, 'DD-MM-YYYY').format('YYYY-MM-DD');
		const toDateFormatted = moment(toDate, 'DD-MM-YYYY').format('YYYY-MM-DD');
	    return moment(recordDate).isSameOrBefore(toDateFormatted, 'day');
	  });
	}
	return filteredRecordList;
  }

  onStaffSelected (selectedStaff) {
	if (selectedStaff && selectedStaff.fullName) {
	  this.setState({selectedStaff});
	}
	else {
	  this.setState({ selectedStaff: null });
	}
  }

 render () {
	 const { fromDate, toDate } = this.state;
	 const filteredRecordList = this.getFilteredList();
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
		     <label htmlFor="">To:</label>
			 <DateTimePickerComponent value={toDate} onChange={(e) => this.onToDateChange(e)} showIcon dateFormat="dd/mm/yyyy"/>
		    </div>
 		 </div>
 		 </div>
		<div className="form-group">
 		 <div className="form-row" >
          <div className="col" > 
		     <label htmlFor="">Select Staff</label>
			 <StaffSearch {...this.props} onStaffSelected={this.onStaffSelected.bind(this)} />
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
		      <th scope="col">Full Name</th>
		      <th scope="col">In Time</th>
		      <th scope="col">Out Time</th>
		      <th scope="col">Regular Payment (Rs)</th>
		    </tr>
		  </thead>
		  <tbody>
       {filteredRecordList.length > 0 && filteredRecordList.map((attendance, index) => {
       	  return (
       	  	<tr>
            <td>{attendance.date}</td>
            <td>{attendance.staffFullName}</td>
            <td>{attendance.inTimeFormatted}</td>
            <td>{attendance.outTimeFormatted}</td>
            <td>{attendance.regularAmount}</td>
       	  </tr>)
       })}
	   {filteredRecordList.length === 0 && (<tr>
		   <td colSpan="5"><p align="center">No reord found</p></td>
	   </tr>)}
	   </tbody>
	   <tfoot>
	   <tr><td colSpan="4">Total</td><td>{this.getTotalPayment('regularAmount')}</td></tr>
	   </tfoot>
       </table>
	   </div>
	   </div>
	   </>
 		);
  }
}