import React, { Component } from 'react';
import { AutoComplete } from 'primereact/autocomplete';

export default class StaffSearch extends Component {
    state = {
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
        }],
        selectedStaff: null,
        filterStaffSingle: null
      }

      filterStaffSingle(event) {
        setTimeout(() => {
            var results = this.state.staffList.filter((staff) => {
                return staff.name.toLowerCase().startsWith(event.query.toLowerCase());
			});
            this.setState({ filterStaffSingle: results });
        }, 250);
      }

      render () {
        const { selectedStaff, filterStaffSingle } = this.state;
        return (
            <div className="form-control border-width-0 padding-left-0">
            <AutoComplete value={selectedStaff} onChange={(e) => this.setState({selectedStaff: e.value})}
           suggestions={filterStaffSingle} field="name" completeMethod={(e) => this.filterStaffSingle(e)} id="selectStaff" />
            </div>
        );
      }
} 