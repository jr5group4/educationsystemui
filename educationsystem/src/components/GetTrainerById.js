import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as TrainerAction from '../store/actions/TrainerAction';
import {bindActionCreators} from 'redux';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';



class GetTrainerById extends Component{
    componentDidMount(){
        const {TrainerAction, match} = this.props;
        TrainerAction.getTrainerById(match.params.trainerId);
    }
       
    render(){
        
        let trainer = this.props.gettrainer;

        return(
            <div>
            <table className="table table-striped" align="center" width="50%" border="2">
                <tr><th>TRAINER ID</th><td>{trainer.trainerId}</td></tr>
                <tr><th>TRAINER NAME</th><td>{trainer.trainerName}</td></tr>
                <tr><th>PHONE NUMBER</th><td>{trainer.phoneNumber}</td></tr>
                <tr><th>TRAINER EXPERIENCE</th><td>{trainer.trainerExperience}</td></tr>
                <tr><th>TRAINER EMAIL ID</th><td>{trainer.trainerEmailId}</td></tr>
                {/* <tr><th>STUDENT ID</th><td>{trainer.student.studentId}</td></tr> */}
                <tr><th>COURSE ID</th><td>{trainer.course.courseId}</td></tr>
            </table>
            <Link to="/trainers"><button className="btn btn-info">Back to User Page</button></Link>
        </div>
        );
        
    }
}
function mapStateToProps(state) {
    return {
        gettrainer : state.TrainerReducer.gettrainer,
        login : state.LoginReducer.login
       
    };
}
function mapDispatchToProps(dispatch){
     return {
        TrainerAction : bindActionCreators(TrainerAction, dispatch)
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(GetTrainerById);