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
            role:'',
            errors:{}
        }
        this.registration=this.registration.bind(this);
    }
    validate = () =>{
        let errors= {}
        let formIsValid = true
        if(!this.state.userId)
        {
            formIsValid = false
            errors['userId']='*Please enter username'
        }
        if(!this.state.userPassword)
        {
            formIsValid = false
            errors['userPassword']='*Please enter password'
        }
        if(!this.state.role)
        {
            formIsValid = false
            errors['role']='*Please enter role'
        }
        this.setState({errors})
        return formIsValid
    } 
    registration=(reg)=>{
        if(this.validate()){
        let payload={
            userId:this.state.userId,
            userPassword:this.state.userPassword,
            role:this.state.role
        }
        this.props.LoginAction.registerUser(payload);
    }
}
    onChange=(obj)=>this.setState({[obj.target.name]:obj.target.value});
    render(){
        return(
            <div>
                 <h1>Registration Page</h1>
                 <form>
                     <div className="form-group col-md-4 offset-md-4 offset-md-4">
                         <label>Enter Username</label>
                         <input type="text" name="userId" placeholder="Enter Username" className="form-control" value={this.state.userId} onChange={this.onChange} required></input><br></br>
                         <div class="red_color">{this.state.errors.userId}</div><br></br>
                         <label>Enter Password</label>
                         <input type="text" name="userPassword" placeholder="Enter password" className="form-control" value={this.state.userPassword} onChange={this.onChange} required></input><br></br>
                         <div class="red_color">{this.state.errors.userPassword}</div><br></br>
                         <label>Enter Role</label>
                         <input type="text" name="role" placeholder="Enter role" className="form-control" value={this.state.role} onChange={this.onChange} required></input><br></br>
                         <div class="red_color">{this.state.errors.role}</div><br></br>
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