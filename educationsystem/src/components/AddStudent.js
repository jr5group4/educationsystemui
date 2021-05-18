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
        studentEmailId : '',
        errors:{}
        }
        this.addNewStudent = this.addNewStudent.bind(this);
    }
    validate = () =>{
        let errors= {}
        let formIsValid = true
        if(!this.state.firstName)
        {
            formIsValid = false
            errors['firstName']='*Please enter first name'
        }
        if(!this.state.lastName)
        {
            formIsValid = false
            errors['lastName']='*Please enter last name'
        }
        if(!this.state.dateOfBirth)
        {
            formIsValid = false
            errors['dateOfBirth']='*Please enter date of birth'
        }
        if(!this.state.phoneNumber)
        {
            formIsValid = false
            errors['phoneNumber']='*Please enter phone number'
        }
        if(!this.state.studentEmailId)
        {
            formIsValid = false
            errors['studentEmailId']='*Please enter student email Id'
        }
        this.setState({errors})
        return formIsValid
    } 
    addNewStudent = (add) => {
        add.preventDefault();
        if(this.validate()){
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
                        <div class="red_color">{this.state.errors.firstName}</div><br></br>
                        <label>Enter Lastname</label>
                        <input type="text" name="lastName" placeholder="Enter last name" className="form-control" value={this.state.lastName} onChange={this.onChange}></input><br></br>
                        <div class="red_color">{this.state.errors.lastName}</div><br></br>
                        <label>Enter Date Of Birth</label>
                        <input type="date" name="dateOfBirth" placeholder="Enter date of birth" className="form-control" value={this.state.dateOfBirth} onChange={this.onChange} required="required"></input><br></br>
                        <div class="red_color">{this.state.errors.dateOfBirth}</div><br></br>
                        <label>Enter Phone number</label>
                        <input type="text" name="phoneNumber" placeholder="Enter phone number" className="form-control" value={this.state.phoneNumber} onChange={this.onChange} required="required"></input><br></br>
                        <div class="red_color">{this.state.errors.phoneNumber}</div><br></br>
                        <label>Enter Email Id</label>
                        <input type="text" name="studentEmailId" placeholder="Enter email id" className="form-control" value={this.state.studentEmailId} onChange={this.onChange}></input><br></br>   
                        <div class="red_color">{this.state.errors.studentEmailId}</div><br></br>
                    </div>
                    <button className="btn btn-success" onClick={this.addNewStudent}>Submit</button> &nbsp;&nbsp;
                       <Link to="/user"> <button className="btn btn-default">Cancel</button></Link> 
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