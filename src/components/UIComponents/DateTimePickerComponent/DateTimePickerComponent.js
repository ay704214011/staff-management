import React from 'react';
import { Calendar } from 'primereact/calendar';

const DateTimePickerComponent = (props) => {
	
	return(
        <div >
          <Calendar {...props}/>
        </div>
        );

};

export default DateTimePickerComponent;