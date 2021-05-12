import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as StudentAction from '../store/actions/StudentAction';
import {bindActionCreators} from 'redux';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';

class GetAllStudent extends Component{
    componentDidMount(){
        this.props.StudentAction.getStudents()
    }
    render(){
        let stock = this.props.students;
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
                        <th>STUDENT_ID</th>
                        <th>FIRST_NAME</th>
                        <th>LAST_NAME</th>
                        <th>DATE_OF_BIRTH</th>
                        <th>PHONE_NUMBER</th>
                        <th>EMAIL_ID</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            stock.map( student=>
                        <tr key={student.studentId} align="center">
                            <td>{student.studentId}</td>
                            <td>{student.firstName}</td>        
                            <td>{student.lastName}</td>
                            <td>{student.dateOfBirth}</td>
                            <td>{student.phoneNumber}</td> 
                            <td>{student.studentEmailId}</td>
                            
                            <React.Fragment>
                            <td><Link to ={{pathname: '/updatestudent',state:{student}}}> <button className="btn btn-warning">Update</button> </Link> </td>
                            <td> <Link to={`/students/${student.studentId}`}> <button className="btn btn-danger">Delete</button> </Link>  </td>
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
          students : state.StudentReducer.students,
          login : state.LoginReducer.login
      };
  }
  function mapDispatchToProps(dispatch){
      return {
         StudentAction : bindActionCreators(StudentAction, dispatch)
     };
  }
  export default connect(mapStateToProps,mapDispatchToProps)(GetAllStudent);
