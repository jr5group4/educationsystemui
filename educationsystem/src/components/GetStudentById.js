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
        /* if(this.props.getstudent !== undefined){
            this.props.history.push("/");
        } */
        let student = this.props.getstudent;
        
        return(<div>
                    
                        {student.studentId}<br></br>
                        {student.firstName}<br></br>
                        {student.lastName}<br></br>
                        {student.phoneNumber}<br></br>
                        {student.studentEmailId}<br></br>
                        {student.dateOfBirth}<br></br>
                    
            <Link to="/students"><button className="btn btn-info">Back to User Page</button></Link></div>
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