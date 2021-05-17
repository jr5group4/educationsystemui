import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';
import PaymentReducer from './PaymentReducer';
import ProgressReportReducer from './ProgressReportReducer';
import StudentReducer from './StudentReducer';
import CourseReducer from './CourseReducer';
<<<<<<< HEAD
import MessageReducer from './MessageReducer';
=======
import TrainerReducer from './TrainerReducer';
>>>>>>> 9c42ed6ff385033a9be44cd91d7f07bf8b503266

const RootReducer=combineReducers({
    LoginReducer,
    PaymentReducer,
    ProgressReportReducer,
    StudentReducer,
    CourseReducer,
<<<<<<< HEAD
    MessageReducer
=======
    TrainerReducer
>>>>>>> 9c42ed6ff385033a9be44cd91d7f07bf8b503266
});

export default RootReducer;