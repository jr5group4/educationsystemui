import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as CourseAction from '../store/actions/CourseAction';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
 
class GetAllCourses extends Component{
    componentDidMount(){
        this.props.CourseAction.getCourses()
      }
      render(){
        let stock = this.props.courses;
        let login = this.props.login;
       let userlogin = window.localStorage.getItem("login");
       console.log("from localstorage = "+userlogin);
        if(login===undefined){
         alert("unauthorized access.. please login!!!!");
         return <Redirect to="/login"></Redirect>
      }

      console.log(login.role);
      return(
          <div>
              <table className="table table-striped" align="center" width="50%" border="2">
              <thead>
                  <tr>
                      <th>COURSE_ID</th>
                      <th>COURSE_NAME</th>
                      <th>DURATION</th>
                      <th>START_DATE</th>
                      <th>END_DATE</th>
                      <th>UPDATE</th>
                      <th>DELETE</th>
                      <th>VIEW</th>
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
                          {/* <td>{course.student.studentId}</td>  */}
                          <React.Fragment>
                          <td><Link to ={{pathname: '/editcourse',state:{course}}}> <button className="btn btn-warning"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button> </Link> </td>
                          <td> <Link to={`/courses/${course.courseId}`}> <button className="btn btn-danger"><i class="fa fa-trash"></i></button> </Link>  </td>
                          <td> <Link to={`/course/${course.courseId}`}> <button className="btn btn-info">View</button> </Link>  </td>
                          </React.Fragment>
                      </tr>
                          )}
                  </tbody>
              </table> <br></br> 
              { (login.role==="admin")?
                  <Link to="/admin"><button className="btn btn-info"><i class="fa fa-chevron-circle-left" aria-hidden="true"></i> Back</button></Link>:
              
              <Link to="/user"><button className="btn btn-info"><i class="fa fa-chevron-circle-left" aria-hidden="true"></i> Back</button></Link>
      }
    
              
          </div>
      );
    }
}
function mapStateToProps(state) {
    return {
        courses : state.CourseReducer.courses,
        login : state.LoginReducer.login
    };
}
function mapDispatchToProps(dispatch){
    return {
       CourseAction : bindActionCreators(CourseAction, dispatch)
   };
}
export default connect(mapStateToProps,mapDispatchToProps)(GetAllCourses);