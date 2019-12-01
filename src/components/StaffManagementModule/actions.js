import { ACTIONS } from './constants';

export const addStaff = (staff) => ({
  type: ACTIONS.ADD_STAFF,
  staff
});

export const addAttendance = (data) => ({
  type: ACTIONS.ADD_ATTENDANCE,
  data
});