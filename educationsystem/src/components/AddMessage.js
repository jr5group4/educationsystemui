import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as MessageAction from '../store/actions/MessageAction';
import {bindActionCreators} from 'redux';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';

class AddMessage extends Component{
    constructor(props){
        super(props)
        this.state = {
            messageDescription :'',
            studentId : '',
            errors:{}
        }
        this.addNewMessage = this.addNewMessage.bind(this);
    }
    validate = () =>{
        let errors= {}
        let formIsValid = true
        if(!this.state.messageDescription)
        {
            formIsValid = false
            errors['messageDescription']='*Please enter message description'
        }
        if(!this.state.studentId)
        {
            formIsValid = false
            errors['studentId']='*Please enter student Id'
        }
        this.setState({errors})
        return formIsValid
    } 
    addNewMessage = (add) => {
        if(this.validate()){
        add.preventDefault();
        let payload = {
            messageDescription : this.state.messageDescription,
            studentId : this.state.studentId
        }
        this.props.MessageAction.addMessage(payload);
        this.props.history.push("/messages");
     }
    }
    onChange = (obj) => {
        this.setState({[obj.target.name] : obj.target.value});
    }
    render() {
        let login = this.props.login;
       if(login===undefined){
           alert("unauthorized access.. please login!!!!");
           return <Redirect to="/login"></Redirect>
        }
       return(
           <div>
               <h1>Add New Message </h1>
               <form >
                   <div className="form-group col-md-4 offset-md-4 offset-md-4">
                       <label>Enter message description</label><br></br>
                       <textarea rows="3" cols="70" name="messageDescription" placeholder="Enter Message Description" className="form-control" value={this.state.messageDescription} onChange={this.onChange}  required="required"></textarea> <br></br>
                       <div class="red_color">{this.state.errors.messageDescription}</div><br></br>
                       <label>Enter student ID</label>
                       <input type="text" name="studentId" className="form-control" placeholder="Enter student Id" value={this.state.studentId} onChange={this.onChange}></input> <br></br>
                       <div class="red_color">{this.state.errors.studentId}</div><br></br>
                   </div>
                       <button className="btn btn-success" onClick={this.addNewMessage}>Submit</button> &nbsp;&nbsp;
                       <Link to="/messages"> <button className="btn btn-default">Cancel</button></Link> 
                   </form>
               </div>
       );

   }
}
function mapStateToProps(state) {
    return {
       addMessage : state.MessageReducer.addmessage,
       login : state.LoginReducer.login
       };
   } 
   function mapDispatchToProps(dispatch){
    return {
     MessageAction : bindActionCreators(MessageAction, dispatch)
      };
   }
   
   export default connect(mapStateToProps,mapDispatchToProps)(AddMessage);