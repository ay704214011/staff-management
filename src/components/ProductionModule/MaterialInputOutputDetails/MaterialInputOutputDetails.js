import React, { Component } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export default class MaterialInputOutputDetails extends Component {

	state = {
	  cars: [{
	   materialWeight: '550.35',
	   vehicleNumber: 'UP93 AG 2380',
	   contractor: 'Amit Kumar',
	   amount: '9500.00',
	   entryTime: '09:40 PM',
	   date: '30-20-2019'
	  }]
	}

	render () {
	  return (
	  <div className="form-row">
	   <p className="section-title">Material In/Out details</p>
	   <hr/>
	   <DataTable value={this.state.cars}>
	    <Column field="date" header="Date" />
		<Column field="entryTime" header="Time" />
		<Column field="materialWeight" header="Weight (in Ton)" />
		<Column field="vehicleNumber" header="Vehicle Number" />
		<Column field="contractor" header="Contractor" />
		<Column field="amount" header="Amount" />
	  </DataTable>
	  </div>);
	}
}