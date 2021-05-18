import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as CourseAction from '../store/actions/CourseAction';
import {bindActionCreators} from 'redux';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';

class AddCourse extends Component{
    constructor(props){
        super(props)
        this.state = {
            courseName : '',
            duration : '',
            startDate : '',
            endDate : '',
            studentId :'',
            errors:{}
        }
        this.addNewCourse = this.addNewCourse.bind(this);
    }
    validate = () =>{
        let errors= {}
        let formIsValid = true
        if(!this.state.courseName)
        {
            formIsValid = false
            errors['courseName']='*Please enter course name'
        }
        if(!this.state.duration)
        {
            formIsValid = false
            errors['duration']='*Please enter duration'
        }
        if(!this.state.startDate)
        {
            formIsValid = false
            errors['startDate']='*Please enter start date'
        }
        if(!this.state.endDate)
        {
            formIsValid = false
            errors['endDate']='*Please enter end date'
        }
        if(!this.state.studentId)
        {
            formIsValid = false
            errors['studentId']='*Please enter student Id'
        }
        this.setState({errors})
        return formIsValid
    } 
    addNewCourse = (add) => {
        add.preventDefault();
        if(this.validate()){
        let payload = {
            courseName : this.state.courseName,
            duration : this.state.duration,
            startDate : this.state.startDate,
            endDate : this.state.endDate,
            studentId : this.state.studentId
        }
        this.props.CourseAction.addCourse(payload);
        this.props.history.push("/courses");
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
               <h1>Add New Course </h1>
               <form >
                   <div className="form-group col-md-4 offset-md-4 offset-md-4">
                       <label>Enter name of the course </label>
                       <input type="text" name="courseName" placeholder="Enter course name" className="form-control" value={this.state.courseName} onChange={this.onChange}  required="required"></input><br></br>
                       <div class="red_color">{this.state.errors.courseName}</div><br></br>
                       <label>Enter duration of the course</label>
                       <input type="text" name="duration" placeholder="Enter course duration" className="form-control" value={this.state.duration} onChange={this.onChange}></input><br></br>
                       <div class="red_color">{this.state.errors.duration}</div><br></br>
                       <label>Enter starting date</label>
                       <input type="date" name="startDate" placeholder="Enter course starting date" className="form-control" value={this.state.startDate} onChange={this.onChange}></input> <br></br>
                       <div class="red_color">{this.state.errors.startDate}</div><br></br>
                       <label>Enter ending date</label>
                       <input type="date" name="endDate" placeholder="Enter course ending date" className="form-control" value={this.state.endDate} onChange={this.onChange}></input> <br></br>
                       <div class="red_color">{this.state.errors.endDate}</div><br></br>
                       <label>Enter student ID</label>
                       <input type="text" name="studentId" placeholder="Enter studen Id" className="form-control" value={this.state.studentId} onChange={this.onChange}></input> <br></br>
                       <div class="red_color">{this.state.errors.studentId}</div><br></br>
                   </div>
                       <button className="btn btn-success" onClick={this.addNewCourse}>ADD Course</button> &nbsp;&nbsp;
                       <Link to="/admin"> <button className="btn btn-default">Cancel</button></Link> 
                   </form>
               </div>
       );

   }
}
function mapStateToProps(state) {
    return {
       addcourse : state.CourseReducer.addcourse,
       login : state.LoginReducer.login
       };
   }
   function mapDispatchToProps(dispatch){
    return {
     CourseAction : bindActionCreators(CourseAction, dispatch)
      };
   }
   
   export default connect(mapStateToProps,mapDispatchToProps)(AddCourse);