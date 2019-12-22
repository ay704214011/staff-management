import React, { Component } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ColumnGroup } from 'primereact/columngroup';
import { Row } from 'primereact/row';
export default class ProductionInput extends Component {
    state = {
      productionSizeList: [{
        label: '3MM',
        value: '3mm'
      },
      {
        label: '4MM',
        value: '4mm'
      },
      {
        label: '5MM',
        value: '5mm'
      }],
      productionSize: null,
      productionEstimation: [{
        size: '3MM',
        percentage: '40%',
        quantity: 40
      },
      {
        size: '4MM',
        percentage: '40%',
        quantity: 40
      },
      {
        size: '5MM',
        percentage: '20%',
        quantity: 20
      }]
    }

    onSizeChange (e) {
      this.setState({productionSize: e.value});
      console.log('selected size ', this.state.productionSize);
    }

    render () {
      const footerColumnGroup = 
        <ColumnGroup>
          <Row>
          <Column footer="Total:" />
          <Column footer="100 %" />
          <Column footer="100 (ton)" />
        </Row>
      </ColumnGroup>;
        return (
        <div className="section-container">
          <p className="section-title">Production input details </p>
		     <hr/>
        <div className="form-row">
          <div className="form-group col-md-6" >
	          <label for="materialWeight">Material Weight</label>
            <input type="number" class="form-control" id="materialWeight" placeholder="Weight (in ton)" />
            <small  class="form-text text-muted">(Available 500 ton)</small>
          </div>
          </div>
          <form class="form-inline form-group">
            <div className="form-group mb-6" >
	        <label for="productionSize" className="sr-only">Production size</label>
            <Dropdown value={this.state.productionSize} options={this.state.productionSizeList} onChange={(e) => {this.onSizeChange(e)}} editable={true} placeholder="Select production size" className="form-control"/>
		    </div>
            <div className="form-group mx-sm-3 mb-6" >
	        <label for="percentage" className="sr-only">Percentage (%) </label>
            <input type="number" className="form-control" id="percentage" placeholder="percentage (%)"/>
		    </div>
            <button type="button" className="btn btn-primary mb-6" >Add</button>
        </form>
        <label>Estimated production</label>
        <hr/>
        <div className="form-group">
	     <div className="form-row">
	     <DataTable value={this.state.productionEstimation} footerColumnGroup={footerColumnGroup}>
	     <Column field="size" header="Size" />
		   <Column field="percentage" header="Percentage" />
		   <Column field="quantity" header="Quantity (in Ton)" />
	    </DataTable>
	    </div>
	    </div>
      <button type="submit" class="btn btn-primary">Save</button>
      </div>);
    }
}