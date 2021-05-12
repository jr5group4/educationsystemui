import React, { Component } from 'react';
import {connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';

class User extends Component{
    logout(){
        window.location.href="/"
    }
    render(){
        let login = this.props.login;
        if(login===undefined){
            alert("unauthorized access.. please login!!!!");
            return <Redirect to="/login"></Redirect>
         }
        return(
            <div>
                <h1>Welcome {this.props.login.userId}</h1>
                <Link to="/payments">
                    <button className="btn btn-info">View All Payments</button>
                </Link> &nbsp;
                <Link to="/addpayment">
                    <button className="btn btn-info">Add Payment</button>
                </Link> &nbsp;
                <Link to="/students">
                    <button className="btn btn-info">View All Students</button>
                </Link> &nbsp;
                <Link to="/addstudent">
                    <button className="btn btn-info">Add Student</button>
                </Link> &nbsp;
        
                <Link to="/courses">
                    <button className="btn btn-info">View All Courses</button>
                </Link> &nbsp;
                <button className="btn btn-warning" id="bt" onClick={this.logout}>Logout</button>
            </div>
        );
    }
}
function mapStateToProps(state){
    return{
        login : state.LoginReducer.login
    };
}
export default connect(mapStateToProps)(User);