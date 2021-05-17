import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';
import PaymentReducer from './PaymentReducer';
import ProgressReportReducer from './ProgressReportReducer';
import StudentReducer from './StudentReducer';
import CourseReducer from './CourseReducer';
import MessageReducer from './MessageReducer';
import TrainerReducer from './TrainerReducer';

const RootReducer=combineReducers({
    LoginReducer,
    PaymentReducer,
    ProgressReportReducer,
    StudentReducer,
    CourseReducer,
    MessageReducer,
    TrainerReducer
});

export default RootReducer;