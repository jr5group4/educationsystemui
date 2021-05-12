import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as CourseAction from '../store/actions/CourseAction';
import {bindActionCreators} from 'redux';

class DeleteCourse extends Component{
    componentDidMount(){
        const {CourseAction, match} = this.props;
        CourseAction.deleteCourse(match.params.courseId);
    }
    render(){
        if(this.props.delcourse !== undefined){
            this.props.history.push("/courses");
        }
        return(
            <div></div>
        );
    }
}

function mapStateToProps(state) {
    return {
        delcourse : state.CourseReducer.delcourse
       
    };
}
function mapDispatchToProps(dispatch){
     return {
        CourseAction : bindActionCreators(CourseAction, dispatch)
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(DeleteCourse);