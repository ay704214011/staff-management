import React, { Component } from 'react';
import { AutoComplete } from 'primereact/autocomplete';

export default class StaffSearch extends Component {
    state = {
        selectedStaff: null,
        filterStaffSingle: null
      }

      filterStaffSingle(event) {
        setTimeout(() => {
            var results = this.props.staffList.filter((staff) => {
                return staff.fullName.toLowerCase().startsWith(event.query.toLowerCase());
			});
            this.setState({ filterStaffSingle: results });
        }, 250);
      }

      onStaffSelected (staff) {
        this.setState({selectedStaff: staff});
        this.props.onStaffSelected(staff);
      }

      render () {
        const { selectedStaff, filterStaffSingle } = this.state;
        return (
            <div className="form-control border-width-0 padding-left-0">
            <AutoComplete value={selectedStaff} onChange={(e) => this.onStaffSelected(e.value)}
           suggestions={filterStaffSingle} field="fullName" completeMethod={(e) => this.filterStaffSingle(e)} id="selectStaff" />
            </div>
        );
      }
} 