import React, { Component } from 'react';
import {connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';

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
