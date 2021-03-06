import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as CourseAction from '../store/actions/CourseAction';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';



class GetCourseById extends Component{
    componentDidMount(){
        const {CourseAction, match} = this.props;
        CourseAction.getCourseById(match.params.courseId);
    }
       
    render(){
        
        let course = this.props.getcourse;

        return(
            <div>
            <table className="table table-striped" align="center" width="50%" border="2">
                <tr><th>COURSE ID</th><td>{course.courseId}</td></tr>
                <tr><th>COURSE NAME</th><td>{course.courseName}</td></tr>
                <tr><th>DURATION</th><td>{course.duration}</td></tr>
                <tr><th>START DATE</th><td>{course.startDate}</td></tr>
                <tr><th>END DATE</th><td>{course.endDate}</td></tr>
                {/*  <tr><th>STUDENT ID</th><td>{newstudent.studentId}</td></tr>  */}
            </table>
            <Link to="/courses"><button className="btn btn-info"><i class="fa fa-chevron-circle-left" aria-hidden="true"></i> Back to User Page</button></Link>
        </div>
        );
        
    }
}
function mapStateToProps(state) {
    return {
        getcourse : state.CourseReducer.getcourse,
        login : state.LoginReducer.login
       
    };
}
function mapDispatchToProps(dispatch){
     return {
        CourseAction : bindActionCreators(CourseAction, dispatch)
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(GetCourseById);