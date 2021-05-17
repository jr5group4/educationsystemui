import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as MessageAction from '../store/actions/MessageAction';
import {bindActionCreators} from 'redux';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';



class GetMessageById extends Component{
    componentDidMount(){
        const {MessageAction, match} = this.props;
        MessageAction.getMessageById(match.params.messageId);
    }
       
    render(){
        
        let message = this.props.getmessage;
        let newstudent=message.student;

        return(
            <div>
            <table className="table table-striped" align="center" width="50%" border="2">
                <tr><th>MESSAGE ID</th><td>{message.messageId}</td></tr>
                <tr><th>MESSAGE DESCRIPTioN</th><td>{message.messageDescription}</td></tr>
                {/*  <tr><th>STUDENT ID</th><td>{newstudent.studentId}</td></tr>  */}
            </table>
            <Link to="/messages"><button className="btn btn-info">Back to User Page</button></Link>
        </div>
        );
        
    }
}
function mapStateToProps(state) {
    return {
        getmessage : state.MessageReducer.getmessage,
        login : state.LoginReducer.login
       
    };
} 
function mapDispatchToProps(dispatch){
     return {
        MessageAction : bindActionCreators(MessageAction, dispatch)
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(GetMessageById);