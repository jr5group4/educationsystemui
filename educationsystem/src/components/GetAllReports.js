import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as ProgressReportAction from '../store/actions/ProgressReportAction';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';

class GetAllReports extends Component{
    componentDidMount(){
        this.props.ProgressReportAction.getReports()
      }
      render(){
        let stock = this.props.reports;
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
                      <th>PROGRESS_REPORT_ID</th>
                      <th>MARKS</th>
                      <th>GRADE</th>
                      <th>PRESENT_FOR_TEST</th>
                      <th>PERCENTAGE</th>
                      <th>RESULT</th>
                      <th>COURSE_ID</th>
                  </tr>
                  </thead>
                  <tbody>
                      {
                          stock.map( report=>
                      <tr key={report.progressReportId} align="center">
                          <td>{report.progressReportId}</td>        
                          <td>{report.studentMarks}</td>
                          <td>{report.studentGrade}</td>
                          <td>{report.presentForTest}</td> 
                          <td>{report.studentPercentage}</td>
                          <td>{report.studentResult}</td>
                          <td>{report.course.courseId}</td>
                          <React.Fragment>
                           <td><Link to ={{pathname: '/editreport',state:{report}}}> <button className="btn btn-warning">Update</button> </Link> </td> 
                           <td> <Link to={`/reports/${report.progressReportId}`}> <button className="btn btn-danger">Delete</button> </Link>  </td> 
                          </React.Fragment>
                      </tr>
                          )}
                  </tbody>
              </table> <br></br> 
              <Link to="/admin"><button className="btn btn-info">Back to Admin Page</button></Link>
              
          </div>
      );
    }
}
function mapStateToProps(state) {
    return {
        reports : state.ProgressReportReducer.reports,
        login : state.LoginReducer.login
    };
}
function mapDispatchToProps(dispatch){
    return {
       ProgressReportAction : bindActionCreators(ProgressReportAction, dispatch)
   };
}
export default connect(mapStateToProps,mapDispatchToProps)(GetAllReports);