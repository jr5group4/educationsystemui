import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as TrainerAction from '../store/actions/TrainerAction';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';

class GetTrainerByCourse extends Component{
    componentDidMount(){
        const {TrainerAction, match} = this.props;
        TrainerAction.getTrainerByCourse(match.params.courseId)
    }
    render(){
        let stock=this.props.gettrainercourse;
        let student=this.props.getstudent;
        return(
            <div>
                <table className="table table-striped" align="center" width="50%" border="2">
              <thead>
                  <tr>
                      <th>TRAINER_ID</th>
                      <th>TRAINER_NAME</th>
                      <th>PHONE_NUMBER</th>
                      <th>TRAINER_EXPERIENCE</th>
                      <th>TRAINER_EMAIL_ID</th>
                  </tr>
                  </thead>
                  <tbody>
                      {
                          stock.map( trainer=>
                      <tr key={trainer.trainerId} align="center">
                          <td>{trainer.trainerId}</td>        
                          <td>{trainer.trainerName}</td>
                          <td>{trainer.phoneNumber}</td>
                          <td>{trainer.trainerExperience}</td> 
                          <td>{trainer.trainerEmailId}</td>
                          <React.Fragment>
                          <td> <Link to={`/registertrainer/${trainer.trainerId}/${student.studentId}`}> <button className="btn btn-info">Register</button> </Link>  </td>
                          </React.Fragment>
                      </tr>
                          )}
                  </tbody>
              </table> <br></br> 
             <Link to="/student/:studentId"><button className="btn btn-info"><i class="fa fa-chevron-circle-left" aria-hidden="true"></i> Back</button></Link> 
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        getstudent : state.StudentReducer.getstudent,
        gettrainercourse : state.TrainerReducer.gettrainercourse,
        login : state.LoginReducer.login
    };
}
function mapDispatchToProps(dispatch){
    return {
       TrainerAction : bindActionCreators(TrainerAction, dispatch)
   };
}
export default connect(mapStateToProps,mapDispatchToProps)(GetTrainerByCourse);