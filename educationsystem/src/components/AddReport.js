import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as ProgressReportAction from '../store/actions/ProgressReportAction';
import {bindActionCreators} from 'redux';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';

class AddReport extends Component{
    constructor(props){
        super(props)
        this.state = {
            studentMarks : '',
            studentGrade : '',
            presentForTest : '',
            studentPercentage: '',
            studentResult:'',
            courseId :'',
            studentId : ''
        }
        this.addNewReport = this.addNewReport.bind(this);
    }
    addNewReport = (add) => {
        add.preventDefault();
        let payload = {
            studentMarks : this.state.studentMarks,
            studentGrade : this.state.studentGrade,
            presentForTest : this.state.presentForTest,
            studentResult : this.state.studentResult,
            studentPercentage : this.state.studentPercentage,
            courseId : this.state.courseId,
            studentId : this.state.studentId
        }
        this.props.ProgressReportAction.addReport(payload);
        this.props.history.push("/reports");
     }
     onChange = (obj) => {
        this.setState({[obj.target.name] : obj.target.value});
    }
    render() {
        let login = this.props.login;
       if(login===undefined){
           alert("unauthorized access.. please login!!!!");
           return <Redirect to="/login"></Redirect>
        }
       return(
           <div>
               <h1>Add New Progress Report </h1>
               <form >
                   <div className="form-group">
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
                       <label>Enter student ID</label>
                       <input type="text" name="studentId" className="form-control" value={this.state.studentId} onChange={this.onChange}></input> <br></br>
                       
                   </div>
                       <button className="btn btn-success" onClick={this.addNewReport}>ADD Report</button> &nbsp;&nbsp;
                       <Link to="/reports"> <button className="btn btn-default">Cancel</button></Link> 
                   </form>
               </div>
       );

   }
}

function mapStateToProps(state) {
    return {
       addreport : state.ProgressReportReducer.addreport,
       login : state.LoginReducer.login
       };
   }
   function mapDispatchToProps(dispatch){
    return {
     ProgressReportAction : bindActionCreators(ProgressReportAction, dispatch)
      };
   }
   
   export default connect(mapStateToProps,mapDispatchToProps)(AddReport);