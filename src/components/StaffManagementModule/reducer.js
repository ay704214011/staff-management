import { combineReducers } from 'redux';
import { ACTIONS } from './constants';
import { find } from 'lodash';
import * as moment from 'moment';

const initialState = {
  staffList: [{
    firstName: 'Abhishek',
    lastName: 'Gupta',
    dateOfBirth: '30-01-1980',
    department: 'Driver',
    fullName: 'Abhishek Gupta',
    advanceAmount: 2000.00
  },
  {
    firstName: 'Ram',
    lastName: 'Sahay',
    dateOfBirth: null,
    department: 'Driver',
    fullName: 'Ram Sahay',
    advanceAmount: 0.0
  },
  {
    firstName: 'Ram',
    lastName: 'Gupta',
    dateOfBirth: '30-01-1985',
    department: 'Loader',
    fullName: 'Ram Gupta',
    advanceAmount: 0.0
  }],
  attendanceRecordList: [{
    date: '29-01-2019',
    staffFullName: 'Abhishek Gupta',
    inTime: 'Sat Jan 29 2019 08:25:06 GMT-0800 (Pacific Standard Time)',
    outTime: 'Sat Jan 29 2019 18:25:06 GMT-0800 (Pacific Standard Time)',
    regularAmount: 500
  },
  {
    date: '06-02-2019',
    staffFullName: 'Abhishek Gupta',
    inTime: 'Sat Feb 06 2019 07:25:06 GMT-0800 (Pacific Standard Time)',
    outTime: 'Sat Feb 06 2019 19:25:06 GMT-0800 (Pacific Standard Time)',
    regularAmount: 600
  },
  {
    date: '12-03-2019',
    staffFullName: 'Abhishek Gupta',
    inTime: 'Sat Mar 12 2019 09:25:06 GMT-0800 (Pacific Standard Time)',
    outTime: 'Sat Mar 12 2019 20:25:06 GMT-0800 (Pacific Standard Time)',
    regularAmount: 700
  },
  {
    date: '29-01-2019',
    staffFullName: 'Ram Gupta',
    inTime: 'Sat Jan 29 2019 08:25:06 GMT-0800 (Pacific Standard Time)',
    outTime: 'Sat Jan 29 2019 18:25:06 GMT-0800 (Pacific Standard Time)',
    regularAmount: 550
  },
  {
    date: '06-02-2019',
    staffFullName: 'Ram Gupta',
    inTime: 'Sat Feb 06 2019 07:25:06 GMT-0800 (Pacific Standard Time)',
    outTime: 'Sat Feb 06 2019 19:25:06 GMT-0800 (Pacific Standard Time)',
    regularAmount: 650
  },
  {
    date: '12-03-2019',
    staffFullName: 'Ram Gupta',
    inTime: 'Sat Mar 12 2019 09:25:06 GMT-0800 (Pacific Standard Time)',
    outTime: 'Sat Mar 12 2019 20:25:06 GMT-0800 (Pacific Standard Time)',
    regularAmount: 750
  }]
};

const getAttendanceRecord = (data) => {
  const { inTime, outTime, selectedStaff, regularAmount, advanceAmount } = data;
  const date = inTime.getDate() + '-' + inTime.getMonth() + '-' + inTime.getFullYear();
  console.log('In time ', inTime);
  return {
    date,
    staffFullName: selectedStaff.fullName,
    inTime,
    outTime,
    regularAmount: Number(regularAmount),
    advanceAmount: Number(advanceAmount)
  };
};

const staffsReducer = (state=initialState, action) => {
    const { staffList, attendanceRecordList } = state;
    switch (action.type) {
        case ACTIONS.ADD_STAFF:
          staffList.push(action.staff);
          return  Object.assign({}, {...state, staffList, attendanceRecordList});
        case ACTIONS.ADD_ATTENDANCE:
          const { selectedStaff, advanceAmount } = action.data;
          const staffToUpdate = find(staffList, (staff) => {
            return staff.fullName === selectedStaff.fullName;
          });
          staffToUpdate.advanceAmount = advanceAmount;
          const attendanceRecord = getAttendanceRecord(action.data);
          console.log('attendanceRecord ', attendanceRecord);
          const record = find(attendanceRecordList, (record) => {
            return record.staffFullName === attendanceRecord.staffFullName && record.date === attendanceRecord.date;
          });
          if (record) {
            record.inTime = attendanceRecord.inTime;
            record.outTime = attendanceRecord.outTime;
            record.regularAmount = attendanceRecord.regularAmount;
            record.advanceAmount = attendanceRecord.advanceAmount;
          }
          else {
            attendanceRecordList.push(attendanceRecord);
          }
          return Object.assign({}, {...state, staffList, attendanceRecordList});
        default:
        return state;
    }
};

export default combineReducers({
    staffContainer: staffsReducer 
});