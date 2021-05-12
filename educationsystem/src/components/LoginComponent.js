import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as LoginAction from '../store/actions/LoginAction';
import {bindActionCreators} from 'redux';
import {Redirect} from 'react-router-dom';

 class LoginComponent extends Component{
     constructor(props){
         super(props)
         this.state={
             userId:'',
             userPassword:'',
             role:''
         }
     }
     validation=(usr)=>{
         let payload={
             userId:this.state.userId,
             userPassword:this.state.userPassword,
             role:this.state.role
         }
         this.props.LoginAction.loginValidate(payload);
         usr.preventDefault();
     }
     onChange=(obj)=>this.setState({[obj.target.name]:obj.target.value});

     signup(){
        window.location.href="/register"
    }

     render(){
         let login=this.props.login;
         console.log("Inside Render method"+login);
         if(login!==undefined){
             if(login.role==="admin"){
                 return <Redirect to="/admin"></Redirect>
             } else if(login.role==="user"){
                 return <Redirect to="/user"></Redirect>
             }
              else {
                 alert("Incorrect username/password");
                 window.location.href="/"
             }
         }
         return(
             <div>
                 <h1>Login Page</h1>
                 <form>
                     <div className="form-group">
                         <label>Username</label>
                         <input type="text" name="userId" className="form-control" value={this.state.userId} onChange={this.onChange} required></input><br></br>
                         <label>Password</label>
                         <input type="text" name="userPassword" className="form-control" value={this.state.userPassword} onChange={this.onChange} required></input><br></br>
                         <label>Role</label>
                         <input type="text" name="role" className="form-control" value={this.state.role} onChange={this.onChange} required></input><br></br>
                     </div>
                     <button className="btn btn-success" onClick={this.validation}>Login</button>
                     <button className="btn btn-info" id="bt" onClick={this.signup}>Sign Up</button>
                 </form>
             </div>
         );
     }
 }
 function mapStateToProps(state){
     return{
         login:state.LoginReducer.login
     };
 }
 function mapDispatchToProps(dispatch){
     return{
         LoginAction:bindActionCreators(LoginAction,dispatch)
     };
 }
 export default connect(mapStateToProps,mapDispatchToProps)(LoginComponent);