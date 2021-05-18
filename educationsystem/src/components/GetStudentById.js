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
        this.props.CourseAction.getUpcommingCourses()
        CourseAction.getRegisteredCourses(match.params.studentId)
        CourseAction.getOngoingCourses(match.params.studentId)
        CourseAction.getCompletedCourses(match.params.studentId)
    }
     
    render(){
        let student = this.props.getstudent;
        let stock = this.props.upcommingcourses;
        let courses = this.props.registeredcourses;
        let oncourses=this.props.ongoingcourses;
        let compcourses=this.props.completedcourses;
        return(
            <div>
                <b>STUDENT DETAILS</b>
            <table className="table table-striped" align="center" width="50%" border="2">
                <tr><th>STUDENT ID</th><td>{student.studentId}</td></tr>
                <tr><th>FIRST NAME</th><td>{student.firstName}</td></tr>
                <tr><th>LAST NAME</th><td>{student.lastName}</td></tr>
                <tr><th>PHONE NUMBER</th><td>{student.phoneNumber}</td></tr>
                <tr><th>EMAIL ID</th><td>{student.studentEmailId}</td></tr>
                <tr><th>DATE OF BIRTH</th><td>{student.dateOfBirth}</td></tr>
            </table>
               <b>AVAILABLE COURSES</b> <br></br>
               {(Object.entries(stock).length===0)?
               <React.Fragment>
                   NO COURSE AVAILABLE <br></br>
               </React.Fragment>:
               <React.Fragment>
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
                </React.Fragment>}
             
               <b>REGISTERED COURSES</b> <br></br>
               {(Object.entries(courses).length===0)?
               <React.Fragment>
                   NO COURSE AVAILABLE <br></br>
               </React.Fragment>:
               <React.Fragment>
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
                </React.Fragment>}
               
                <b>ONGOING COURSES</b> <br></br>
               {(Object.entries(oncourses).length===0)?
               <React.Fragment>
                   NO COURSE AVAILABLE <br></br>
               </React.Fragment>:
               <React.Fragment>
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
                          oncourses.map( course=>
                      <tr key={course.courseId} align="center">
                          <td>{course.courseId}</td> 
                          <td>{course.courseName}</td>        
                          <td>{course.duration}</td>
                          <td>{course.startDate}</td>
                          <td>{course.endDate}</td> 
                          <React.Fragment>
                           <td> <Link to={`/getpayment/${student.studentId}/${course.courseId}`}> <button className="btn btn-info">View Payment</button> </Link>  </td> 
                          </React.Fragment>
                          <React.Fragment>
                           <td> <Link to={`/getreport/${student.studentId}/${course.courseId}`}> <button className="btn btn-info">View Progress Report</button> </Link>  </td> 
                          </React.Fragment>
                      </tr>
                          )}
                  </tbody>
              </table> <br></br>
                </React.Fragment>}

                <b>COMPLETED COURSES</b> <br></br>
               {(Object.entries(compcourses).length===0)?
               <React.Fragment>
                   NO COURSE AVAILABLE <br></br>
               </React.Fragment>:
               <React.Fragment>
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
                          compcourses.map( course=>
                      <tr key={course.courseId} align="center">
                          <td>{course.courseId}</td> 
                          <td>{course.courseName}</td>        
                          <td>{course.duration}</td>
                          <td>{course.startDate}</td>
                          <td>{course.endDate}</td> 
                          <React.Fragment>
                           <td> <Link to={`/getpayment/${student.studentId}/${course.courseId}`}> <button className="btn btn-info">View Payment</button> </Link>  </td> 
                          </React.Fragment>
                          <React.Fragment>
                           <td> <Link to={`/getreport/${student.studentId}/${course.courseId}`}> <button className="btn btn-info">View Progress Report</button> </Link>  </td> 
                          </React.Fragment>
                      </tr>
                          )}
                  </tbody>
              </table> <br></br>
                </React.Fragment>}
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
        ongoingcourses :state.CourseReducer.ongoingcourses,
        completedcourses : state.CourseReducer.completedcourses,
        login : state.LoginReducer.login
       
    };
}
function mapDispatchToProps(dispatch){
     return {
        StudentAction : bindActionCreators(StudentAction, dispatch),
        CourseAction : bindActionCreators(CourseAction,dispatch)
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(GetStudentById);