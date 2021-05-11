import React, { Component } from 'react';
import {connect } from 'react-redux';

class Admin extends Component{
    logout(){
        window.location.href="/"
    }
    render(){
        return(
            <div>
                <h1>Welcome Admin</h1>
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
