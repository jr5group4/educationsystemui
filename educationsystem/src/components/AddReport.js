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
            studentId : '',
            errors:{}
        }
        this.addNewReport = this.addNewReport.bind(this);
    }
    validate = () =>{
        let errors= {}
        let formIsValid = true
        if(!this.state.courseId)
        {
            formIsValid = false
            errors['courseId']='*Please enter course Id'
        }
        if(!this.state.studentId)
        {
            formIsValid = false
            errors['studentId']='*Please enter student Id'
        }
        this.setState({errors})
        return formIsValid
    } 
    addNewReport = (add) => {
        if(this.validate()){
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
                   <div className="form-group col-md-4 offset-md-4 offset-md-4">
                       <label>Enter Student's marks </label>
                       <input type="text" name="studentMarks" placeholder="Enter student's marks" className="form-control" value={this.state.studentMarks} onChange={this.onChange}  required="required"></input><br></br>
                       <div class="red_color">{this.state.errors.studentMarks}</div><br></br>
                       <label>Enter Student's grade</label>
                       <input type="text" name="studentGrade" placeholder="Enter student's grade" className="form-control" value={this.state.studentGrade} onChange={this.onChange}></input><br></br>
                       <div class="red_color">{this.state.errors.studentGrade}</div><br></br>
                       <label>Attendance(present/absent)</label>
                       <input type="text" name="presentForTest" placeholder="Enter attendence" className="form-control" value={this.state.presentForTest} onChange={this.onChange}></input> <br></br>
                       <div class="red_color">{this.state.errors.presentForTest}</div><br></br>
                       <label>Enter Student's result</label>
                       <input type="text" name="studentResult" placeholder="Enter students's result" className="form-control" value={this.state.studentResult} onChange={this.onChange}></input> <br></br>
                       <div class="red_color">{this.state.errors.studentResult}</div><br></br>
                       <label>Enter Student's percentage</label>
                       <input type="text" name="studentPercentage" placeholder="Enter student's percentage" className="form-control" value={this.state.studentPercentage} onChange={this.onChange}></input> <br></br>
                       <div class="red_color">{this.state.errors.studentPercentage}</div><br></br>
                       <label>Enter course ID</label>
                       <input type="text" name="courseId" placeholder="Enter course Id" className="form-control" value={this.state.courseId} onChange={this.onChange}></input> <br></br>
                       <div class="red_color">{this.state.errors.courseId}</div><br></br>
                       <label>Enter student ID</label>
                       <input type="text" name="studentId" placeholder="Enter student Id" className="form-control" value={this.state.studentId} onChange={this.onChange}></input> <br></br>
                       <div class="red_color">{this.state.errors.studentId}</div><br></br>
                   </div>
                       <button className="btn btn-success" onClick={this.addNewReport}>ADD Report</button> &nbsp;&nbsp;
                       <Link to="/admin"> <button className="btn btn-outline-secondary btn_space btn_size">Cancel</button></Link> 
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