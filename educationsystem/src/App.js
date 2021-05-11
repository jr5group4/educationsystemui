import './App.css';
import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import LoginComponent from './components/LoginComponent';
import Admin from './components/Admin';
import User from './components/User';
import RegisterUser from './components/RegisterUser';
import GetAllPayment from './components/GetAllPayments'
import AddPayment from './components/AddPayment';
import DeletePayment from './components/DeletePayment';
import UpdatePayment from './components/UpdatePayment';
import GetAllReports from './components/GetAllReports';
import AddReport from  './components/AddReport';
import DeleteReport from './components/DeleteReport';
import UpdateReport from './components/UpdateReport';

function App() {
  return (
    <div className="App">
       <Router>
          <Switch>
            <Route path="/" exact component={LoginComponent}></Route>
            <Route path="/login" exact component={LoginComponent}></Route>
            <Route path="/admin" exact component={Admin}></Route>
            <Route path="/user" exact component={User}></Route>
            <Route path="/register" exact component={RegisterUser}></Route>
            <Route path="/payments" exact component={GetAllPayment}></Route>
            <Route path='/addpayment' exact component={AddPayment}></Route>
            <Route path="/payments/:paymentId" exact component={DeletePayment}></Route>
            <Route path='/editpayment' exact component={UpdatePayment}></Route>
            <Route path='/reports' exact component={GetAllReports}></Route>
            <Route path="/addreport" exact component={AddReport}></Route>
            <Route path="/reports/:progressReportId" exact component={DeleteReport}></Route>
            <Route path="/editreport" exact component={UpdateReport}></Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
