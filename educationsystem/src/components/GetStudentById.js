import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as StudentAction from '../store/actions/StudentAction';
import {bindActionCreators} from 'redux';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';



class GetStudentById extends Component{
    componentDidMount(){
        const {StudentAction, match} = this.props;
        StudentAction.getStudentById(match.params.studentId);
    }
       
    render(){
        
        let student = this.props.getstudent;

        return(
            <div>
            <table className="table table-striped" align="center" width="50%" border="2">
                <tr><th>STUDENT ID</th><td>{student.studentId}</td></tr>
                <tr><th>FIRST NAME</th><td>{student.firstName}</td></tr>
                <tr><th>LAST NAME</th><td>{student.lastName}</td></tr>
                <tr><th>PHONE NUMBER</th><td>{student.phoneNumber}</td></tr>
                <tr><th>EMAIL ID</th><td>{student.studentEmailId}</td></tr>
                <tr><th>DATE OF BIRTH</th><td>{student.dateOfBirth}</td></tr>
            </table>
            <Link to="/students"><button className="btn btn-info">Back to User Page</button></Link>
        </div>
        );
        
    }
}
function mapStateToProps(state) {
    return {
        getstudent : state.StudentReducer.getstudent,
        login : state.LoginReducer.login
       
    };
}
function mapDispatchToProps(dispatch){
     return {
        StudentAction : bindActionCreators(StudentAction, dispatch)
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(GetStudentById);