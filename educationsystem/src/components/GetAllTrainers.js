import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as TrainerAction from '../store/actions/TrainerAction';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
 
class GetAllTrainers extends Component{
    componentDidMount(){
        this.props.TrainerAction.getTrainers()
      }
      render(){
        let stock = this.props.trainers;
        let login = this.props.login;
       let userlogin = window.localStorage.getItem("login");
       console.log("from localstorage = "+userlogin);
        if(login===undefined){
         alert("unauthorized access.. please login!!!!");
         return <Redirect to="/login"></Redirect>
      }

      console.log(login.role);
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
                      <th>COURSE_ID</th>
                      <th>UPDATE</th>
                      <th>DELETE</th>
                      <th>VIEW</th>
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
                          <td>{trainer.course.courseId}</td>
                          <React.Fragment>
                          <td><Link to ={{pathname: '/edittrainer',state:{trainer}}}> <button className="btn btn-warning">Update</button> </Link> </td>
                          <td> <Link to={`/trainers/${trainer.trainerId}`}> <button className="btn btn-danger">Delete</button> </Link>  </td>
                          <td> <Link to={`/trainer/${trainer.trainerId}`}> <button className="btn btn-info">View</button> </Link>  </td>
                          </React.Fragment>
                      </tr>
                          )}
                  </tbody>
              </table> <br></br> 
              <Link to="/user"><button className="btn btn-info">Back to User Page</button></Link>
              
          </div>
      );
    }
}
function mapStateToProps(state) {
    return {
        trainers : state.TrainerReducer.trainers,
        login : state.LoginReducer.login
    };
}
function mapDispatchToProps(dispatch){
    return {
       TrainerAction : bindActionCreators(TrainerAction, dispatch)
   };
}
export default connect(mapStateToProps,mapDispatchToProps)(GetAllTrainers);