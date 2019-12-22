import React, { Component } from 'react';
import productionReport from '../mock/ProductionReport';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { ColumnGroup } from 'primereact/columngroup';
import { Row } from 'primereact/row';
import { Calendar } from 'primereact/calendar';

export default class ProductionReport extends Component {

  state = {
    nodes: [],
    fromDate: new Date(),
    toDate: new Date()
  }

  componentDidMount () {
    this.setState({nodes: productionReport.root});
  }

  render () {
    const footerColumnGroup = 
    <ColumnGroup>
      <Row>
      <Column footer="Total:" />
      <Column footer="250 ton" />
      <Column footer="240 (ton)" />
    </Row>
    </ColumnGroup>;
    const { fromDate, toDate } = this.state;
    return (
      <>
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
     <TreeTable value={this.state.nodes} footerColumnGroup={footerColumnGroup}>
        <Column field="date" header="Date" ></Column>
        <Column field="productionEstimated" header="Estimated Production" expander></Column>
        <Column field="productionActual" header="Actual Production" expander></Column>
    </TreeTable>
    </>);
  }
} 