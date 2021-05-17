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
import GetAllStudent from './components/GetAllStudent';
import AddStudent from './components/AddStudent';
import UpdateStudent from './components/UpdateStudent';
import DeleteStudent from './components/DeleteStudent';
import AddCourse from './components/AddCourse';
import GetAllCourses from './components/GetAllCourses';
import DeleteCourse from './components/DeleteCourse';
import UpdateCourse from './components/UpdateCourse';
import AddTrainer from './components/AddTrainer';
import GetAllTrainers from './components/GetAllTrainers';
import DeleteTrainer from './components/DeleteTrainer';
import UpdateTrainer from './components/UpdateTrainer';
import GetStudentById from './components/GetStudentById';
<<<<<<< HEAD
import AddMessage from './components/AddMessage';
import GetAllMessage from './components/GetAllMessage';
import UpdateMessage from './components/UpdateMessage';
import DeleteMessage from './components/DeleteMessage';
import GetMessageById from './components/GetMessageById';
=======
import GetCourseById from './components/GetCourseById';
import GetTrainerById from './components/GetTrainerById';
import RegisterCourse from './components/RegisterCourse';
import GetTrainerByCourse from './components/GetTrainerByCourse';
import RegisterTrainer from './components/RegisterTrainer';
>>>>>>> 9c42ed6ff385033a9be44cd91d7f07bf8b503266

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
            <Route path="/addpayment" exact component={AddPayment}></Route>
            <Route path="/payments/:paymentId" exact component={DeletePayment}></Route>
            <Route path="/editpayment" exact component={UpdatePayment}></Route>
            <Route path="/reports" exact component={GetAllReports}></Route>
            <Route path="/addreport" exact component={AddReport}></Route>
            <Route path="/reports/:progressReportId" exact component={DeleteReport}></Route>
            <Route path="/editreport" exact component={UpdateReport}></Route>
            <Route path="/addreport" exact component={AddReport}></Route>
            <Route path="/students" exact component={GetAllStudent}></Route>
            <Route path="/addstudent" exact component={AddStudent}></Route>
            <Route path="/updatestudent" exact component={UpdateStudent}></Route>
            <Route path="/students/:studentId" exact component={DeleteStudent}></Route>
            <Route path="/addcourse" exact component={AddCourse}></Route>
            <Route path="/courses" exact component={GetAllCourses}></Route>
            <Route path="/courses/:courseId" exact component={DeleteCourse}></Route>
            <Route path="/editcourse" exact component={UpdateCourse}></Route>
            <Route path="/addtrainer" exact component={AddTrainer}></Route>
            <Route path="/trainers" exact component={GetAllTrainers}></Route>
            <Route path="/trainers/:trainerId" exact component={DeleteTrainer}></Route>
            <Route path="/edittrainer" exact component={UpdateTrainer}></Route>
            <Route path="/student/:studentId" exact component={GetStudentById}></Route>
<<<<<<< HEAD
            <Route path="/addmessage" exact component={AddMessage}></Route>
            <Route path="/messages" exact component={GetAllMessage}></Route>
            <Route path="/updatemessage" exact component={UpdateMessage}></Route>
            <Route path="/messages/:messageId" exact component={DeleteMessage}></Route>
            <Route path="/message/:messageId" exact component={GetMessageById}></Route>
=======
            <Route path="/course/:courseId" exact component={GetCourseById}></Route>
            <Route path="/trainer/:trainerId" exact component={GetTrainerById}></Route>
            <Route path="/register/:courseId/:studentId" exact component={RegisterCourse}></Route>
            <Route path="/trainerbycourse/:courseId" exact component={GetTrainerByCourse}></Route>
            <Route path="/registertrainer/:trainerId/:studentId" exact component={RegisterTrainer}></Route>
>>>>>>> 9c42ed6ff385033a9be44cd91d7f07bf8b503266
          </Switch>
        </Router>
    </div>
  );
}

export default App;
