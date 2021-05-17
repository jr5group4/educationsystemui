import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as TrainerAction from '../store/actions/TrainerAction';
import {bindActionCreators} from 'redux';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';

class RegisterTrainer extends Component{
    componentDidMount(){
        const {TrainerAction, match} = this.props;
        TrainerAction.registerTrainer(match.params.trainerId,match.params.studentId);
    }
    render(){
        if(this.props.registertrainer !== undefined){
            this.props.history.push("/students");
        }
        return(
            <div></div>
        );
    }
}
function mapStateToProps(state) {
    return {
        registertrainer : state.TrainerReducer.registertrainer
       
    };
}
function mapDispatchToProps(dispatch){
     return {
        TrainerAction : bindActionCreators(TrainerAction, dispatch)
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(RegisterTrainer);