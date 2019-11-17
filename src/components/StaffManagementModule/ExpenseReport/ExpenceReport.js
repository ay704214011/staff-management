import React, { Component } from 'react';
import {
	Chart,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartSeries,
    ChartSeriesItem
  } from '@progress/kendo-react-charts';

export default class ExpenseReport extends Component {

 state = {
   months: ['Jan', 'Feb', 'March', 'April', 'May', 'June']
 }

 render () {
	 const { months } = this.state;
 	return (<>
	     <p className="section-title">Expense Report</p>
		 <hr/>
		 <Chart>
			<ChartValueAxis>
				<ChartValueAxisItem title={{ text: "expense(Rs)" }} min={0} max={10000} />
			</ChartValueAxis>
			<ChartCategoryAxis>
				<ChartCategoryAxisItem categories={months} />
			</ChartCategoryAxis>
			<ChartSeries>
				<ChartSeriesItem data={[5500, 5200, 6000, 6500, 7000, 4500]} type="line" />
			</ChartSeries>
		</Chart>
	     </>);
  }
}