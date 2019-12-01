
// Header component
import React, { Component } from 'react';
import Header from './Header/';
import Navigation from './Navigation/';
import { connect } from 'react-redux';
import { get } from 'lodash';
import { addStaff, addAttendance } from './actions';
 
export class StaffManagementModuleLayout extends Component {

   componentDidMount () {
     console.log('props ', this.props);
   }

   render () {
     return (<>
     	 <Header />
     	 <Navigation {...this.props}/>
         </>
      )
   }
}

const mapStateToProps = state => {
   return {
     staffList: get(state, 'staffContainer.staffList', []),
     attendanceRecordList: get(state, 'staffContainer.attendanceRecordList', [])
   }
 }

const mapDispatchToProps = dispatch => {
   return {
     addStaff: (staff) => dispatch(addStaff(staff)),
     addAttendance: (data) => dispatch(addAttendance(data))
   }
 }

export default connect(mapStateToProps, mapDispatchToProps)(StaffManagementModuleLayout);
