import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as StudentAction from '../store/actions/StudentAction';
import * as CourseAction from '../store/actions/CourseAction';
import {bindActionCreators} from 'redux';

class RegisterCourse extends Component{
    componentDidMount(){
        const {CourseAction, match} = this.props;
        CourseAction.registerCourse(match.params.courseId,match.params.studentId);
    }
    render(){
        let student = this.props.getstudent;
        if(this.props.registercourse !== undefined){
            this.props.history.push(`/student/${student.studentId}`);
        }
        return(
            <div></div>
        );
    }
}
function mapStateToProps(state) {
    return {
        getstudent : state.StudentReducer.getstudent,
        registercourse : state.CourseReducer.registercourse
       
    };
}
function mapDispatchToProps(dispatch){
     return {
        StudentAction : bindActionCreators(StudentAction, dispatch),
        CourseAction : bindActionCreators(CourseAction, dispatch)
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(RegisterCourse);