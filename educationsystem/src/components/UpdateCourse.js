import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as CourseAction from '../store/actions/CourseAction';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';

class UpdateCourse extends Component{
    constructor(props){
        super(props)
        this.state = {
            courseId : props.location.state.course.courseId,
            courseName : props.location.state.course.courseName,
            duration : props.location.state.course.duration,
            startDate : props.location.state.course.startDate,
            endDate : props.location.state.course.endDate,
            studentId : props.location.state.course.student.studentId
        }
    }
    componentDidMount(){
        console.log(this.props.location.state);
    }
        updateCourse= (e) =>{
            e.preventDefault();
            let payload = {
                courseId : this.state.courseId,
                courseName : this.state.courseName,
                duration : this.state.duration,
                startDate : this.state.startDate,
                endDate : this.state.endDate,
                studentId : this.state.studentId
            }
            this.props.CourseAction.editCourse(payload);
            this.props.history.push("/courses");
        }
        onChange = (obj) => {
            this.setState({[obj.target.name] : obj.target.value});
        }
    render() {
        let course = this.props.getcourse;
        console.log(course);
        return(
            <div>
			    <h1>Update  Course Details </h1>
				 <form >
				    <div className="form-group">
                    <label>Enter Course id </label>
                       <input type="text" name="courseId" className="form-control" value={this.state.courseId} onChange={this.onChange}  readOnly></input><br></br>
                        <label>Enter course name </label>
                       <input type="text" name="courseName" className="form-control" value={this.state.courseName} onChange={this.onChange}  required="required"></input><br></br>
                       <label>Enter duration of the course</label>
                       <input type="text" name="duration" className="form-control" value={this.state.duration} onChange={this.onChange}></input><br></br>
                       <label>Enter the start date</label>
                       <input type="date" name="startDate" className="form-control" value={this.state.startDate} onChange={this.onChange}></input> <br></br>
                       <label>Enter fee end date</label>
                       <input type="date" name="endDate" className="form-control" value={this.state.endDate} onChange={this.onChange}></input> <br></br>
                       <label>Enter student ID</label>
                       <input type="text" name="studentId" className="form-control" value={this.state.studentId} onChange={this.onChange}></input> <br></br>
                    </div>
						<button className="btn btn-success" onClick={this.updateCourse}>Update Course</button>
                        <Link to="/courses"> <button className="btn btn-default">Cancel</button></Link> 
					</form> 
				</div>
        );

    }
}
function mapStateToProps(state) {
    return {
       editcourse : state.CourseReducer.editcourse,
       login : state.LoginReducer.login
       };
   }
   function mapDispatchToProps(dispatch){
    return {
     CourseAction : bindActionCreators(CourseAction, dispatch)
      };
   }
   export default connect(mapStateToProps,mapDispatchToProps)(UpdateCourse);