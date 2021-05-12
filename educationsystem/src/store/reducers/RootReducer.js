import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';
import PaymentReducer from './PaymentReducer';
import ProgressReportReducer from './ProgressReportReducer';
import StudentReducer from './StudentReducer';

const RootReducer=combineReducers({
    LoginReducer,
    PaymentReducer,
    ProgressReportReducer,
    StudentReducer
});

export default RootReducer;