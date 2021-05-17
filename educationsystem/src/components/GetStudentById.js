import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as StudentAction from '../store/actions/StudentAction';
import * as ProgressReportAction from '../store/actions/ProgressReportAction';
import * as PaymentAction from '../store/actions/PaymentAction';
import * as CourseAction from '../store/actions/CourseAction';
import {bindActionCreators} from 'redux';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';



class GetStudentById extends Component{
    componentDidMount(){
        const {StudentAction,ProgressReportAction,PaymentAction,CourseAction, match} = this.props;
        StudentAction.getStudentById(match.params.studentId)
        ProgressReportAction.getPreviousReports(match.params.studentId)
        PaymentAction.getPaymentByCode(match.params.studentId)
        this.props.CourseAction.getUpcommingCourses()
        CourseAction.getRegisteredCourses(match.params.studentId)
    }
       
    render(){
        
        let student = this.props.getstudent;
        let preports =this.props.previousreports;
        let creports=this.props.currentreports;
        let payment=this.props.getpayment;
        let stock = this.props.upcommingcourses;
        let courses = this.props.registeredcourses;
        return(
            <div>
                STUDENT DETAILS
            <table className="table table-striped" align="center" width="50%" border="2">
                <tr><th>STUDENT ID</th><td>{student.studentId}</td></tr>
                <tr><th>FIRST NAME</th><td>{student.firstName}</td></tr>
                <tr><th>LAST NAME</th><td>{student.lastName}</td></tr>
                <tr><th>PHONE NUMBER</th><td>{student.phoneNumber}</td></tr>
                <tr><th>EMAIL ID</th><td>{student.studentEmailId}</td></tr>
                <tr><th>DATE OF BIRTH</th><td>{student.dateOfBirth}</td></tr>
            </table>
               AVAILABLE COURSES
            <table className="table table-striped" align="center" width="50%" border="2">
              <thead>
                  <tr>
                      <th>COURSE_ID</th>
                      <th>COURSE_NAME</th>
                      <th>DURATION</th>
                      <th>START_DATE</th>
                      <th>END_DATE</th>
                  </tr>
                  </thead>
                  <tbody>
                      {
                          stock.map( course=>
                      <tr key={course.courseId} align="center">
                          <td>{course.courseId}</td> 
                          <td>{course.courseName}</td>        
                          <td>{course.duration}</td>
                          <td>{course.startDate}</td>
                          <td>{course.endDate}</td> 
                          <React.Fragment>
                           <td> <Link to={`/register/${course.courseId}/${student.studentId}`}> <button className="btn btn-info">Register Course</button> </Link>  </td> 
                          </React.Fragment>
                      </tr>
                          )}
                  </tbody>
              </table> <br></br> 
               REGISTERED COURSES
              <table className="table table-striped" align="center" width="50%" border="2">
              <thead>
                  <tr>
                      <th>COURSE_ID</th>
                      <th>COURSE_NAME</th>
                      <th>DURATION</th>
                      <th>START_DATE</th>
                      <th>END_DATE</th>
                  </tr>
                  </thead>
                  <tbody>
                      {
                          courses.map( course=>
                      <tr key={course.courseId} align="center">
                          <td>{course.courseId}</td> 
                          <td>{course.courseName}</td>        
                          <td>{course.duration}</td>
                          <td>{course.startDate}</td>
                          <td>{course.endDate}</td> 
                          <React.Fragment>
                            <td> <Link to={`/trainerbycourse/${course.courseId}`}> <button className="btn btn-info">Register Trainer</button> </Link>  </td>  
                          </React.Fragment>
                      </tr>
                          )}
                  </tbody>
              </table> <br></br> 
              PREVIOUS REPORT
            <table className="table table-striped" align="center" width="50%" border="2">
                {preports.map(report=>
                <tr><th>REPORT ID</th><td>{report.progressReportId}</td></tr>
                )}
                {preports.map(report=>
                <tr><th>MARKS</th><td>{report.studentMarks}</td></tr> )}
                {preports.map(report=>
                <tr><th>GRADE</th><td>{report.studentGrade}</td></tr> )}
                {preports.map(report=>
                <tr><th>ATTENDANCE</th><td>{report.presentForTest}</td></tr> )}
                {preports.map(report=>
                <tr><th>PERCENTAGE</th><td>{report.studentPercentage}</td></tr> )}
                {preports.map(report=>
                <tr><th>RESULT</th><td>{report.studentResult}</td></tr> )}
            </table>
            CURRENT REPORT
            <table className="table table-striped" align="center" width="50%" border="2">
                {creports.map(report=>
                <tr><th>REPORT ID</th><td>{report.progressReportId}</td></tr>
                )}
                {creports.map(report=>
                <tr><th>MARKS</th><td>{report.studentMarks}</td></tr> )}
                {creports.map(report=>
                <tr><th>GRADE</th><td>{report.studentGrade}</td></tr> )}
                {creports.map(report=>
                <tr><th>ATTENDANCE</th><td>{report.presentForTest}</td></tr> )}
                {creports.map(report=>
                <tr><th>PERCENTAGE</th><td>{report.studentPercentage}</td></tr> )}
                {creports.map(report=>
                <tr><th>RESULT</th><td>{report.studentResult}</td></tr> )}
            </table>
            PAYMENT DETAILS
            <table className="table table-striped" align="center" width="50%" border="2">
                <tr><th>PAYMENT ID</th><td>{payment.paymentId}</td></tr>
                <tr><th>DATE OF PAYMENT</th><td>{payment.paymentDate}</td></tr>
                <tr><th>LAST DATE OF PAYMENT</th><td>{payment.paymentDue}</td></tr>
                <tr><th>STATUS</th><td>{payment.feeStatus}</td></tr>
                <tr><th>AMOUNT</th><td>{payment.feePaid}</td></tr> 
            </table>
            <Link to="/students"><button className="btn btn-info">Back</button></Link>
        </div>
        );
        
    }
}
function mapStateToProps(state) {
    return {
        getstudent : state.StudentReducer.getstudent,
        upcommingcourses : state.CourseReducer.upcommingcourses,
        registeredcourses : state.CourseReducer.registeredcourses,
        previousreports : state.ProgressReportReducer.previousreports,
        currentreports : state.ProgressReportReducer.currentreports,
        getpayment : state.PaymentReducer.getpayment,
        login : state.LoginReducer.login
       
    };
}
function mapDispatchToProps(dispatch){
     return {
        StudentAction : bindActionCreators(StudentAction, dispatch),
        CourseAction : bindActionCreators(CourseAction,dispatch),
        ProgressReportAction : bindActionCreators(ProgressReportAction,dispatch),
        PaymentAction : bindActionCreators(PaymentAction,dispatch)
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(GetStudentById);