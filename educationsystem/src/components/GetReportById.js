import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as StudentAction from '../store/actions/StudentAction';
import * as ProgressReportAction from '../store/actions/ProgressReportAction';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';

class GetReportById extends Component{
    componentDidMount(){
        const {ProgressReportAction, match} = this.props;
        ProgressReportAction.getReportByCode(match.params.studentId,match.params.courseId)
    }
    render(){
        let student = this.props.getstudent;
        let report =this.props.getreport;
        return(
            <div>
               <b>PROGRESS REPORT</b> <br></br>
            {(Object.entries(report).length===0)?
            <React.Fragment>
                NO PROGRESS REPORT AVAILABLE<br></br>
            </React.Fragment>:
            <React.Fragment>
            <table className="table table-striped" align="center" width="50%" border="2">
               <tr><th>PROGRESS REPORT ID</th><td>{report.progressReportId}</td></tr> 
                <tr><th>MARKS</th><td>{report.studentMarks}</td></tr>
                <tr><th>GRADE</th><td>{report.studentGrade}</td></tr>
                <tr><th>ATTENDANCE</th><td>{report.presentForTest}</td></tr>
                <tr><th>PERCENTAGE</th><td>{report.studentPercentage}</td></tr>
                <tr><th>RESULT</th><td>{report.studentResult}</td></tr>
            </table>
            </React.Fragment>}
            <Link to={`/student/${student.studentId}`}><button className="btn btn-info">Back</button></Link>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        getstudent : state.StudentReducer.getstudent,
        getreport : state.ProgressReportReducer.getreport,
        login : state.LoginReducer.login
       
    };
}
function mapDispatchToProps(dispatch){
     return {
        StudentAction : bindActionCreators(StudentAction, dispatch),
        ProgressReportAction : bindActionCreators(ProgressReportAction,dispatch)
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(GetReportById);