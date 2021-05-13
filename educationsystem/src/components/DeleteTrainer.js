import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as TrainerAction from '../store/actions/TrainerAction';
import {bindActionCreators} from 'redux';

class DeleteTrainer extends Component{
    componentDidMount(){
        const {TrainerAction, match} = this.props;
        TrainerAction.deleteTrainer(match.params.trainerId);
    }
    render(){
        if(this.props.deltrainer !== undefined){
            this.props.history.push("/trainers");
        }
        return(
            <div></div>
        );
    }
}

function mapStateToProps(state) {
    return {
        deltrainer : state.TrainerReducer.deltrainer
       
    };
}
function mapDispatchToProps(dispatch){
     return {
        TrainerAction : bindActionCreators(TrainerAction, dispatch)
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(DeleteTrainer);