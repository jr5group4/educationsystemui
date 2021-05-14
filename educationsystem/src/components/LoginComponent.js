import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as LoginAction from '../store/actions/LoginAction';
import {bindActionCreators} from 'redux';
import {Redirect} from 'react-router-dom';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';

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
             /*  else {
                 alert("Incorrect username/password");
                 window.location.href="/"
             } */
         }
         return(
             <div >
                 <Form action="/action_page.php" class="was-validated">
                     <div className="form-group">
                         <label>Username</label>
                         <input type="text" name="userId" placeholder="Enter Username" className="form-control" value={this.state.userId} onChange={this.onChange} required></input><br></br>
                         <div class="valid-feedback">Valid.</div>
                         <div class="invalid-feedback">Please fill out this field.</div>
                         </div>
                         <div className="form-group">
                         <label>Password</label>
                         <input type="text" name="userPassword" placeholder="Password" className="form-control" value={this.state.userPassword} onChange={this.onChange} required></input><br></br>
                         </div>
                         <div className="form-group">
                         <label>Role</label>
                         <input type="text" name="role" placeholder="Enter role" className="form-control" value={this.state.role} onChange={this.onChange} required></input><br></br>
                     </div>
                     <button className="btn btn-success" onClick={this.validation}>Login</button>
                     <button className="btn btn-info" id="bt" onClick={this.signup}>Sign Up</button>
                     </Form>
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