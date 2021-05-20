import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as LoginAction from '../store/actions/LoginAction';
import {bindActionCreators} from 'redux';
import {Redirect} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

 class LoginComponent extends Component{
     constructor(props){
         super(props)
         this.state={
             userId:'',
             userPassword:'',
             role:'',
             errors:{}
         }
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

      validation=(usr)=>{
        usr.preventDefault();
        if(this.validate()){
         let payload={
             userId:this.state.userId,
             userPassword:this.state.userPassword,
             role:this.state.role
         }
         this.props.LoginAction.loginValidate(payload);
       
        }   
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
            <h1>Education System</h1>
            <div className="row">
                        <div className="card col-md-4 offset-md-4 offset-md-4">
                            <h3 className="text-center mt-2">Login</h3>
                            <div className="card-body"></div>
            <form>
                <div className="form-group">
                    
                    <label>Username</label>
                    <input type="text" name="userId" placeholder="Enter Username" className="form-control" value={this.state.userId} onChange={this.onChange} required/><br></br>
                    <div class="red_color">{this.state.errors.userId}</div><br></br>
                    <label>Enter password</label>
               <input type="password" name="userPassword" placeholder="Enter Password" className="form-control" value={this.state.userPassword} onChange={this.onChange} required></input><br></br>
               <div class="red_color">{this.state.errors.userPassword}</div><br></br>
               <label>Role</label>
                         <input type="text" name="role" placeholder="Enter role" className="form-control" value={this.state.role} onChange={this.onChange} required></input><br></br>
                         <div class="red_color">{this.state.errors.role}</div><br></br>
                </div>
                     <button className="btn btn-success mt-1 mb-4 btn_size " onClick={this.validation}>Login</button>
                     {/* <button className="btn btn-info mt-1 mb-4 btn_space btn_size" id="bt" onClick={this.signup}>Sign Up</button> */}
                     </form>
            </div></div>
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