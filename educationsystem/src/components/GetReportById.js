import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as ProgressReportAction from '../store/actions/ProgressReportAction';
import {bindActionCreators, compose} from 'redux';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';

class GetReportById extends Component{
    componentDidMount(){
        const {ProgressReportAction, match} = this.props;
        ProgressReportAction.getReportByCode(match.params.studentId,match.params.courseId)
    }
    render(){
        let report =this.props.getreport;
        return(
            <div>
               <b>PAYMENT DETAILS</b> <br></br>
            {(Object.entries(report).length==0)?
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
            <Link to="/students"><button className="btn btn-info">Back</button></Link>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        getreport : state.ProgressReportReducer.getreport,
        login : state.LoginReducer.login
       
    };
}
function mapDispatchToProps(dispatch){
     return {
        ProgressReportAction : bindActionCreators(ProgressReportAction,dispatch)
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(GetReportById);