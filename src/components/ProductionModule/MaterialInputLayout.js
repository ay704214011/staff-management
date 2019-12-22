import React, { Component } from 'react';
import MaterialInputHistory from './MaterialInputHistory/';
import MaterialInput from './MaterialInput/';

export default class MaterialInputLayout extends Component {
 render () {
     return (
     <>
      <MaterialInput />
      <MaterialInputHistory />
     </>
   )
 }
}