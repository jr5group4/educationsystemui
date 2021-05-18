import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as TrainerAction from '../store/actions/TrainerAction';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';

class UpdateTrainer extends Component{
    constructor(props){
        super(props)
        this.state = {
            trainerId : props.location.state.trainer.trainerId,
            trainerName : props.location.state.trainer.trainerName,
            phoneNumber : props.location.state.trainer.phoneNumber,
            trainerExperience : props.location.state.trainer.trainerExperience,
            trainerEmailId : props.location.state.trainer.trainerEmailId,
            //studentId : props.location.state.trainer.student.studentId,
            courseId : props.location.state.trainer.course.courseId
        }
    }
    componentDidMount(){
        console.log(this.props.location.state);
    }
        updateTrainer= (e) =>{
            e.preventDefault();
            let payload = {
                trainerId : this.state.trainerId,
                trainerName : this.state.trainerName,
                phoneNumber : this.state.phoneNumber,
                trainerExperience : this.state.trainerExperience,
                trainerEmailId : this.state.trainerEmailId,
                //studentId : this.state.studentId,
                courseId : this.state.courseId
            }
            this.props.TrainerAction.editTrainer(payload);
            this.props.history.push("/trainers");
        }
        onChange = (obj) => {
            this.setState({[obj.target.name] : obj.target.value});
        }
    render() {
        let trainer = this.props.gettrainer;
        console.log(trainer);
        return(
            <div>
			    <h1>Update Trainer Details </h1>
				 <form >
				    <div className="form-group col-md-4 offset-md-4 offset-md-4">
                    <label>Enter Trainer id </label>
                       <input type="text" name="trainerId" className="form-control" value={this.state.trainerId} onChange={this.onChange}  readOnly></input><br></br>
                        <label>Enter name of the Trainer </label>
                       <input type="text" name="trainerName" className="form-control" value={this.state.trainerName} onChange={this.onChange}  required="required"></input><br></br>
                       <label>Enter phone number of the Trainer</label>
                       <input type="text" name="phoneNumber" className="form-control" value={this.state.phoneNumber} onChange={this.onChange}></input><br></br>
                       <label>Enter experience of the trainer</label>
                       <input type="text" name="trainerExperience" className="form-control" value={this.state.trainerExperience} onChange={this.onChange}></input> <br></br>
                       <label>Enter email id of the trainer</label>
                       <input type="text" name="trainerEmailId" className="form-control" value={this.state.trainerEmailId} onChange={this.onChange}></input> <br></br>
                      {/*  <label>Enter student ID</label>
                       <input type="text" name="studentId" className="form-control" value={this.state.studentId} onChange={this.onChange}></input> <br></br> */}
                       <label>Enter course ID</label>
                       <input type="text" name="courseId" className="form-control" value={this.state.courseId} onChange={this.onChange}></input> <br></br>
                    </div>
						<button className="btn btn-success" onClick={this.updateTrainer}>Update Trainer</button>
                        <Link to="/trainers"> <button className="btn btn-default">Cancel</button></Link> 
					</form> 
				</div>
        );

    }
}
function mapStateToProps(state) {
    return {
       edittrainer : state.TrainerReducer.edittrainer,
       login : state.LoginReducer.login
       };
   }
   function mapDispatchToProps(dispatch){
    return {
     TrainerAction : bindActionCreators(TrainerAction, dispatch)
      };
   }
   export default connect(mapStateToProps,mapDispatchToProps)(UpdateTrainer);