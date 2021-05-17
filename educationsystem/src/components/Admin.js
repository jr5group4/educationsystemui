import React, { Component } from 'react';
import {connect } from 'react-redux';
import {Link} from 'react-router-dom';


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
<<<<<<< HEAD
                <Link to="/addmessage">
                    <button className="btn btn-info">Add Message</button>
                </Link> &nbsp;
                <Link to="/updatemessage">
                    <button className="btn btn-info">Update Message</button>
                </Link> &nbsp;
                <Link to="/deletemessage">
                    <button className="btn btn-info">Delete Message</button>
=======
                <Link to="/addtrainer">
                    <button className="btn btn-info">Add Trainer</button>
>>>>>>> 9c42ed6ff385033a9be44cd91d7f07bf8b503266
                </Link> &nbsp;
                <button className="btn btn-warning" id="bt" onClick={this.logout}>Logout</button>
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
