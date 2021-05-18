import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as MessageAction from '../store/actions/MessageAction';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
 
class GetAllMessage extends Component{
    componentDidMount(){
        this.props.MessageAction.getMessages()
      }
      render(){
        let stock = this.props.messages;
        let login = this.props.login;
       let userlogin = window.localStorage.getItem("login");
       console.log("from localstorage = "+userlogin);
        if(login===undefined){
         alert("unauthorized access.. please login!!!!");
         return <Redirect to="/login"></Redirect>
    
      }

      console.log(login.role);
      return(
          <div>
              <table className="table table-striped" align="center" width="50%" border="2">
              <thead>
                  <tr>
                      <th>MESSAGE_ID</th>
                      <th>MESSAGE_DESCRIPTION</th>
                      <th>STUDENT_ID</th>
                  </tr>
                  </thead>
                  <tbody>
                      {
                          stock.map( message=>
                      <tr key={message.messageId} align="center">
                          <td>{message.messageId}</td>        
                          <td>{message.messageDescription}</td>
                          <td>{message.studentDetails.studentId}</td> 
                          
                          <React.Fragment>
                          <td><Link to ={{pathname: '/updatemessage',state:{message}}}> <button className="btn btn-warning">Update</button> </Link> </td>
                          <td> <Link to={`/messages/${message.messageId}`}> <button className="btn btn-danger">Delete</button> </Link>  </td>
                          </React.Fragment>
                      </tr>
                          )}
                  </tbody>
              </table> <br></br>
             { (login.role==="admin")?
                  <Link to="/admin"><button className="btn btn-info">Back</button></Link>:
              
              <Link to="/user"><button className="btn btn-info">Back</button></Link>
      }
              
          </div>
      );
    }
}
function mapStateToProps(state) {
    return {
        messages : state.MessageReducer.messages,
        login : state.LoginReducer.login
    };
}
function mapDispatchToProps(dispatch){
    return {
       MessageAction : bindActionCreators(MessageAction, dispatch)
   };
}
export default connect(mapStateToProps,mapDispatchToProps)(GetAllMessage);