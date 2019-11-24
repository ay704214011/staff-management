import React, { Component } from 'react';
import { Chart } from 'primereact/chart';

export default class ExpenseReport extends Component {

 state = {
	expenseData: {
		labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
		datasets: [
			{
				label: 'Monthly expense',
				data: [65, 59, 80, 81, 56, 55, 40],
				fill: false,
				backgroundColor: '#42A5F5',
				borderColor: '#42A5F5'
			}
		]   
	}
 }

 render () {
	 const { expenseData } = this.state;
 	return (<>
	     <p className="section-title">Expense Report</p>
		 <hr/>
		 <Chart type="line" data={expenseData} />
	     </>);
  }
}