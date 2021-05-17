import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as TrainerAction from '../store/actions/TrainerAction';
import {bindActionCreators} from 'redux';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';

class AddTrainer extends Component{
    constructor(props){
        super(props)
        this.state = {
            trainerName : '',
            phoneNumber : '',
            trainerExperience : '',
            trainerEmailId : '',
            //studentId : '',
            courseId :''
        }
        this.addNewTrainer = this.addNewTrainer.bind(this);
    }
    addNewTrainer = (add) => {
        add.preventDefault();
        let payload = {
            trainerName : this.state.trainerName,
            phoneNumber : this.state.phoneNumber,
            trainerExperience : this.state.trainerExperience,
            trainerEmailId : this.state.trainerEmailId,
            //studentId : this.state.studentId,
            courseId : this.state.courseId
        }
        this.props.TrainerAction.addTrainer(payload);
        this.props.history.push("/trainers");
     }
    onChange = (obj) => {
        this.setState({[obj.target.name] : obj.target.value});
    }
    render() {
        let login = this.props.login;
       if(login===undefined){
           alert("unauthorized access.. please login!!!!");
           return <Redirect to="/login"></Redirect>
        }
       return(
           <div>
               <h1>Add New Trainer </h1>
               <form >
                   <div className="form-group">
                       <label>Enter name of the trainer </label>
                       <input type="text" name="trainerName" className="form-control" value={this.state.trainerName} onChange={this.onChange}  required="required"></input><br></br>
                       <label>Enter phone number of the trainer</label>
                       <input type="text" name="phoneNumber" className="form-control" value={this.state.phoneNumber} onChange={this.onChange}></input><br></br>
                       <label>Enter experience of the trainer</label>
                       <input type="text" name="trainerExperience" className="form-control" value={this.state.trainerExperience} onChange={this.onChange}></input> <br></br>
                       <label>Enter email address of the trainer</label>
                       <input type="text" name="trainerEmailId" className="form-control" value={this.state.trainerEmailId} onChange={this.onChange}></input> <br></br>
                       {/* <label>Enter student ID</label>
                       <input type="text" name="studentId" className="form-control" value={this.state.studentId} onChange={this.onChange}></input> <br></br> */}
                       <label>Enter course ID</label>
                       <input type="text" name="courseId" className="form-control" value={this.state.courseId} onChange={this.onChange}></input> <br></br>
                   </div>
                       <button className="btn btn-success" onClick={this.addNewTrainer}>ADD Trainer</button> &nbsp;&nbsp;
                       <Link to="/trainers"> <button className="btn btn-default">Cancel</button></Link> 
                   </form>
               </div>
       );

   }
}
function mapStateToProps(state) {
    return {
       addtrainer : state.TrainerReducer.addtrainer,
       login : state.LoginReducer.login
       };
   }
   function mapDispatchToProps(dispatch){
    return {
     TrainerAction : bindActionCreators(TrainerAction, dispatch)
      };
   }
   
   export default connect(mapStateToProps,mapDispatchToProps)(AddTrainer);