import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as LoginAction from '../store/actions/LoginAction';
import {bindActionCreators} from 'redux';

class RegisterUser extends Component{
    constructor(props){
        super(props)
        this.state={
            userId:'',
            userPassword:'',
            role:''
        }
        this.registration=this.registration.bind(this);
    }
    registration=(reg)=>{
        let payload={
            userId:this.state.userId,
            userPassword:this.state.userPassword,
            role:this.state.role
        }
        this.props.LoginAction.registerUser(payload);
    }
    onChange=(obj)=>this.setState({[obj.target.name]:obj.target.value});
    render(){
        return(
            <div>
                 <h1>Registration Page</h1>
                 <form>
                     <div className="form-group">
                         <label>Enter Username</label>
                         <input type="text" name="userId" className="form-control" value={this.state.userId} onChange={this.onChange} required></input><br></br>
                         <label>Enter Password</label>
                         <input type="text" name="userPassword" className="form-control" value={this.state.userPassword} onChange={this.onChange} required></input><br></br>
                         <label>Enter Role</label>
                         <input type="text" name="role" className="form-control" value={this.state.role} onChange={this.onChange} required></input><br></br>
                     </div>
                     <button className="btn btn-success" onClick={this.registration}>Submit</button>
                 </form>
             </div>
        );
    }
}
function mapStateToProps(state){
    return{
        register:state.LoginReducer.register
    };
}
function mapDispatchToProps(dispatch){
    return{
        LoginAction:bindActionCreators(LoginAction,dispatch)
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(RegisterUser);