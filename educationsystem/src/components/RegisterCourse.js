import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as CourseAction from '../store/actions/CourseAction';
import {bindActionCreators} from 'redux';

class RegisterCourse extends Component{
    componentDidMount(){
        const {CourseAction, match} = this.props;
        CourseAction.registerCourse(match.params.courseId,match.params.studentId);
    }
    render(){
        if(this.props.registercourse !== undefined){
            this.props.history.push("/students");
        }
        return(
            <div></div>
        );
    }
}
function mapStateToProps(state) {
    return {
        registercourse : state.CourseReducer.registercourse
       
    };
}
function mapDispatchToProps(dispatch){
     return {
        CourseAction : bindActionCreators(CourseAction, dispatch)
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(RegisterCourse);