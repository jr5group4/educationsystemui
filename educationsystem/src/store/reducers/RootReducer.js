import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';
import PaymentReducer from './PaymentReducer';

const RootReducer=combineReducers({
    LoginReducer,
    PaymentReducer
});

export default RootReducer;