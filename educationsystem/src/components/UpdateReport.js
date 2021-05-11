import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as ProgressReportAction from '../store/actions/ProgressReportAction';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';

class UpdateReport extends Component{
    constructor(props){
        super(props)
        this.state = {
            progressReportId : props.location.state.report.progressReportId,
            studentMarks : props.location.state.report.studentMarks,
            studentGrade : props.location.state.report.studentGrade,
            presentForTest : props.location.state.report.presentForTest,
            studentPercentage : props.location.state.report.studentPercentage,
            studentResult : props.location.state.report.studentResult,
            courseId : props.location.state.report.course.courseId
        }
    }
    componentDidMount(){
        console.log(this.props.location.state);
    }
    updateReport= (e) =>{
        e.preventDefault();
        let payload = {
            progressReportId : this.state.progressReportId,
            studentMarks : this.state.studentMarks,
            studentGrade : this.state.studentGrade,
            presentForTest : this.state.presentForTest,
            studentResult : this.state.studentResult,
            studentPercentage : this.state.studentPercentage,
            courseId : this.state.courseId
        }
        this.props.ProgressReportAction.editReport(payload);
        this.props.history.push("/reports");
    }
    onChange = (obj) => {
        this.setState({[obj.target.name] : obj.target.value});
    }
    render() {
        let report = this.props.getreport;
        console.log(report);
        return(
            <div>
			    <h1>Update  Progress Report </h1>
				 <form >
				    <div className="form-group">
                    <label>Enter Report id </label>
                       <input type="text" name="progressReportId" className="form-control" value={this.state.progressReportId} onChange={this.onChange}  readOnly></input><br></br>
                       <label>Enter Student's marks </label>
                       <input type="text" name="studentMarks" className="form-control" value={this.state.studentMarks} onChange={this.onChange}  required="required"></input><br></br>
                       <label>Enter Student's grade</label>
                       <input type="text" name="studentGrade" className="form-control" value={this.state.studentGrade} onChange={this.onChange}></input><br></br>
                       <label>Attendance(present/absent)</label>
                       <input type="text" name="presentForTest" className="form-control" value={this.state.presentForTest} onChange={this.onChange}></input> <br></br>
                       <label>Enter Student's result</label>
                       <input type="text" name="studentResult" className="form-control" value={this.state.studentResult} onChange={this.onChange}></input> <br></br>
                       <label>Enter Student's percentage</label>
                       <input type="text" name="studentPercentage" className="form-control" value={this.state.studentPercentage} onChange={this.onChange}></input> <br></br>
                       <label>Enter course ID</label>
                       <input type="text" name="courseId" className="form-control" value={this.state.courseId} onChange={this.onChange}></input> <br></br>
                    </div>
						<button className="btn btn-success" onClick={this.updateReport}>update Report</button>
                        <Link to="/reports"> <button className="btn btn-default">Cancel</button></Link> 
					</form> 
				</div>
        );

    }
}
function mapStateToProps(state) {
    return {
       editreport : state.ProgressReportReducer.editreport,
       login : state.LoginReducer.login
       };
   }
   function mapDispatchToProps(dispatch){
    return {
     ProgressReportAction : bindActionCreators(ProgressReportAction, dispatch)
      };
   }
   export default connect(mapStateToProps,mapDispatchToProps)(UpdateReport);