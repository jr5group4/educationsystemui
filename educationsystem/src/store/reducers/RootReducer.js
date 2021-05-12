import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';
import PaymentReducer from './PaymentReducer';
import ProgressReportReducer from './ProgressReportReducer';
import StudentReducer from './StudentReducer';
import CourseReducer from './CourseReducer';

const RootReducer=combineReducers({
    LoginReducer,
    PaymentReducer,
    ProgressReportReducer,
    StudentReducer,
    CourseReducer
});

export default RootReducer;