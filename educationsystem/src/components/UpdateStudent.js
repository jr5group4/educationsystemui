import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as StudentAction from '../store/actions/StudentAction';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';

class UpdateStudent extends Component{
    constructor(props){
        super(props)
        this.state = {
            studentId: props.location.state.student.studentId,
            firstName: props.location.state.student.firstName,
            lastName: props.location.state.student.lastName,
            dateOfBirth: props.location.state.student.dateOfBirth,
            phoneNumber: props.location.state.student.phoneNumber,
            studentEmailId: props.location.state.student.studentEmailId
        }
    } 
    componentDidMount(){
        console.log(this.props.location.state);
    }
        updateStudent= (e) =>{
            e.preventDefault();
            let payload = {
                studentId : this.state.studentId,
                firstName : this.state.firstName,
                lastName : this.state.lastName,
                dateOfBirth : this.state.dateOfBirth,
                phoneNumber : this.state.phoneNumber,
                studentEmailId : this.state.studentEmailId
            }
            this.props.StudentAction.updateStudent(payload);
            this.props.history.push("/students");
        }
        onChange = (obj) => {
            this.setState({[obj.target.name] : obj.target.value});
        }
    render() {
        let student = this.props.getstudent;
        console.log(student);
        return(
            <div>
			    <h1>Update  Student Details </h1>
				 <form >
				    <div className="form-group col-md-4 offset-md-4 offset-md-4">
                    <label>Enter Student id </label>
                       <input type="text" name="studentId" className="form-control" value={this.state.studentId} onChange={this.onChange}  readOnly></input><br></br>
                        <label>Enter first name </label>
                       <input type="text" name="firstName" className="form-control" value={this.state.firstName} onChange={this.onChange}  required="required"></input><br></br>
                       <label>Enter last name</label>
                       <input type="text" name="lastName" className="form-control" value={this.state.lastName} onChange={this.onChange}></input><br></br>
                       <label>Enter date of birth</label>
                       <input type="date" name="dateOfBirth" className="form-control" value={this.state.dateOfBirth} onChange={this.onChange}></input> <br></br>
                       <label>Enter phone number</label>
                       <input type="text" name="phoneNumber" className="form-control" value={this.state.phoneNumber} onChange={this.onChange}></input> <br></br>
                       <label>Enter email ID</label>
                       <input type="text" name="studentEmailId" className="form-control" value={this.state.studentEmailId} onChange={this.onChange}></input> <br></br>
                    </div>
						<button className="btn btn-success" onClick={this.updateStudent}>update student</button>
                        <Link to="/students"> <button className="btn btn-default">Cancel</button></Link> 
					</form> 
				</div>
        );

    }
}
function mapStateToProps(state) {
    return {
       updatestudent : state.StudentReducer.updatestudent,
       login : state.LoginReducer.login
       };
   }
   function mapDispatchToProps(dispatch){
    return {
     StudentAction : bindActionCreators(StudentAction, dispatch)
      };
   }
   export default connect(mapStateToProps,mapDispatchToProps)(UpdateStudent);