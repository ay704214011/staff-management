import React, { Component } from 'react';
import { Calendar } from 'primereact/calendar';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export default class MaterialInputHistory extends Component {

	state = {
	  cars: [{
	   materialWeight: '550.35',
	   vehicleNumber: 'UP93 AG 2380',
	   contractor: 'Amit Kumar',
	   amount: '9500.00',
	   entryTime: '09:40 PM',
	   date: '30-20-2019'
	  }],
	  fromDate: new Date(),
      toDate: new Date(),
	}

	render () {
	  const { fromDate, toDate } = this.state;
	  return (
	   <div className="section-container">
	   <p className="section-title">Material Input History</p>
	   <hr/>
	   <div className="form-group">
	   <div className="form-row" >
		<div className="form-group col-md-6" >
		   <label htmlFor="">From:</label>
		   <Calendar value={ fromDate } onChange={(e) => this.setState({fromDate: e.value})} showIcon={true} dateFormat="dd/mm/yy"/>
		  </div>
		  <div className="form-group col-md-6" >
		   <label htmlFor="">To: </label>
		   <Calendar value={ toDate } onChange={(e) => this.setState({toDate: e.value})} showIcon={true} dateFormat="dd/mm/yy"/>
		  </div>
	  </div>
	  </div>
	  <div className="form-group">
	  <div className="form-row">
	   <DataTable value={this.state.cars}>
	    <Column field="date" header="Date" />
		<Column field="entryTime" header="Time" />
		<Column field="materialWeight" header="Weight (in Ton)" />
		<Column field="vehicleNumber" header="Vehicle Number" />
		<Column field="contractor" header="Contractor" />
		<Column field="amount" header="Amount" />
	  </DataTable>
	  </div>
	  </div>
	  </div>);
	}
}