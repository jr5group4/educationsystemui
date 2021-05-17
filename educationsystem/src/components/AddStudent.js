import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as StudentAction from '../store/actions/StudentAction';
import {bindActionCreators} from 'redux';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';

class AddStudent extends Component{
    constructor(props){
        super(props)
        this.state = {
        firstName : '',
        lastName : '',
        dateOfBirth : '',
        phoneNumber : '',
        studentEmailId : ''
        }
        this.addNewStudent = this.addNewStudent.bind(this);
    }
    addNewStudent = (add) => {
        add.preventDefault();
        let payload = {
        firstName : this.state.firstName,
        lastName : this.state.lastName,
        dateOfBirth : this.state.dateOfBirth,
        phoneNumber : this.state.phoneNumber,
        studentEmailId : this.state.studentEmailId
        }
        this.props.StudentAction.addStudent(payload);
        this.props.history.push("/students");
    }
    onChange = (obj)=> this.setState({[obj.target.name]:obj.target.value});
    render(){
        let login = this.props.login;
        if(login===undefined){
            alert("unauthorized access.. Please login!!!!!");
            return <Redirect to="/login"></Redirect>
        }
        return(
            <div class="container">
                <h1>Add New Student Details</h1>
                <form>
                    <div className="form-grou col-md-4 offset-md-4 offset-md-4">
                        <label>Enter Firstname</label>
                        <input type="text" name="firstName" placeholder="Enter first name" className="form-control" value={this.state.firstName} onChange={this.onChange} required="required"></input><br></br>
                        <label>Enter Lastname</label>
                        <input type="text" name="lastName" placeholder="Enter last name" className="form-control" value={this.state.lastName} onChange={this.onChange}></input><br></br>
                        <label>Enter Date Of Birth</label>
                        <input type="date" name="dateOfBirth" placeholder="Enter date of birth" className="form-control" value={this.state.dateOfBirth} onChange={this.onChange} required="required"></input><br></br>
                        <label>Enter Phone number</label>
                        <input type="text" name="phoneNumber" placeholder="Enter phone number" className="form-control" value={this.state.phoneNumber} onChange={this.onChange} required="required"></input><br></br>
                        <label>Enter Email Id</label>
                        <input type="text" name="studentEmailId" placeholder="Enter email id" className="form-control" value={this.state.studentEmailId} onChange={this.onChange}></input><br></br>   
                    </div>
                    <button className="btn btn-success" onClick={this.addNewStudent}>Submit</button> &nbsp;&nbsp;
                       <Link to="/students"> <button className="btn btn-default">Cancel</button></Link> 
                </form>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
       addstudent : state.StudentReducer.addstudent,
       login : state.LoginReducer.login
       };
   }
   function mapDispatchToProps(dispatch){
    return {
     StudentAction : bindActionCreators(StudentAction, dispatch)
      };
   }
    
   export default connect(mapStateToProps,mapDispatchToProps)(AddStudent);