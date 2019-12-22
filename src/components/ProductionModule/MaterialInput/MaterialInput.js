import React, { Component } from 'react';
import './MaterialInput.css';
import DateTimePickerComponent from '../../UIComponents/DateTimePickerComponent';

export default class MaterialInput extends Component {

	state = {
	  entryTime: null
	}

	render () {
	  return (
		<div className="section-container">
	    <p className="section-title">Material entry details </p>
		<hr/>
	   <form>
       <div className="form-row">
		<div className="form-group col-md-6" >
	      <label for="materialWeight">Material Weight</label>
          <input type="number" class="form-control" id="materialWeight" placeholder="Weight (in ton)" />
		</div>
		<div className="form-group col-md-6" >
	      <label for="vehicleNumber">Vehical Number</label>
          <input type="text" class="form-control" id="materialWeight" placeholder="E.g. UP93 AC3212" />
		</div>
	   </div>
	   <div className="form-row">
		<div className="form-group col-md-6" >
	      <label for="contractorName">Contractor Name</label>
          <input type="text" class="form-control" id="contractorName" />
		</div>
		<div className="form-group col-md-4" >
	      <label for="amount">Amount</label>
          <input type="number" class="form-control" id="amount" />
		</div>
		<div className="form-group col-md-2" >
	      <label for="entryTime">Entry time</label>
		  <DateTimePickerComponent  value={this.state.entryTime} onChange={(e) => this.setState({entryTime: e.value})} timeOnly={true} hourFormat="12" />
		</div>
	   </div>
	   <button type="submit" class="btn btn-primary">Submit</button>
	  </form>
	  </div>);
	}
}