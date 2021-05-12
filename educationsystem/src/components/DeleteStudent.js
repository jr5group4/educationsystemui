import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as StudentAction from '../store/actions/StudentAction';
import {bindActionCreators} from 'redux';

class DeleteStudent extends Component{
    componentDidMount(){
        const {StudentAction, match} = this.props;
        StudentAction.deleteStudent(match.params.studentId);
    }
    render(){
        if(this.props.deletestudent !== undefined){
            this.props.history.push("/students");
        }
        return(
            <div></div>
        );
    } 
}

function mapStateToProps(state) {
    return {
        deletestudent : state.StudentReducer.deletestudent
       
    };
}
function mapDispatchToProps(dispatch){
     return {
        StudentAction : bindActionCreators(StudentAction, dispatch)
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(DeleteStudent);