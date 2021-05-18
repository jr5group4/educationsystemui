import React, { Component } from 'react';
import {connect } from 'react-redux';
import {Link} from 'react-router-dom';
import './User.css';


class Admin extends Component{
    logout(){
        window.location.href="/"
    }
    render(){
        return(
            <div>
                <h1>Welcome Admin</h1>
                <Link to="/reports">
                    <button className="btn btn-info">View All Progress Reports</button>
                </Link> &nbsp;
                <Link to="/addreport">
                    <button className="btn btn-info">Add Report</button>
                </Link> &nbsp;
                <Link to="/addcourse">
                    <button className="btn btn-info">Add Course</button>
                </Link> &nbsp;
                <Link to="/addmessage">
                    <button className="btn btn-info">Add Message</button>
                </Link> &nbsp;
                <Link to="/messages">
                    <button className="btn btn-info">View All Messages</button>
                </Link> &nbsp;  
                <Link to="/addtrainer">
                    <button className="btn btn-info">Add Trainer</button>
                </Link> &nbsp;
                <button className="btn btn-danger" id="bt" onClick={this.logout}>Logout</button>
            <div className="admin"></div>
            </div>

        );
    }
}
function mapStateToProps(state){
    return{
        login:state.LoginReducer.login
    };
}
export default connect(mapStateToProps)(Admin);
