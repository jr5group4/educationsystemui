import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as StudentAction from '../store/actions/StudentAction';
import * as TrainerAction from '../store/actions/TrainerAction';
import {bindActionCreators} from 'redux';

class RegisterTrainer extends Component{
    componentDidMount(){
        const {TrainerAction, match} = this.props;
        TrainerAction.registerTrainer(match.params.trainerId,match.params.studentId);
    }
    render(){
        let student = this.props.getstudent;
        if(this.props.registertrainer !== undefined){
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
        registertrainer : state.TrainerReducer.registertrainer
       
    };
}
function mapDispatchToProps(dispatch){
     return {
        StudentAction : bindActionCreators(StudentAction, dispatch),
        TrainerAction : bindActionCreators(TrainerAction, dispatch)
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(RegisterTrainer);