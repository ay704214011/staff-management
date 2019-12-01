import React, { Component } from 'react';
import moduleStore from './store';
import { Provider } from 'react-redux';
import StaffManagementModuleLayout from './StaffManagementModuleLayout';

export default class StaffManagementModuleContainer extends Component {
  componentWillMount () {
    this.store = moduleStore();
    console.log('state ', this.store.getState());
  }

  render () {
      return (
      <Provider store={this.store}>
        <StaffManagementModuleLayout />
      </Provider>)
  }
}