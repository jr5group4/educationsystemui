import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as MessageAction from '../store/actions/MessageAction';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';

class UpdateMessage extends Component{
    constructor(props){
        super(props)
        this.state = {
            messageId : props.location.state.message.messageId,
            messageDescription : props.location.state.message.messageDescription
        }
    }
    componentDidMount(){
        console.log(this.props.location.state);
    }
        UpdateMessage= (e) =>{
            e.preventDefault();
            let payload = {
                messageId : this.state.messageId,
                messageDescription : this.state.messageDescription,
                studentId : this.state.studentId
            }
            this.props.MessageAction.UpdateMessage(payload);
            this.props.history.push("/messages");
        }
        onChange = (obj) => {
            this.setState({[obj.target.name] : obj.target.value});
        }
    render() {
        let message = this.props.getmessage;
        console.log(message);
        return(
            <div>
			    <h1>Update Message Details </h1>
				 <form >
				    <div className="form-group">
                    <label>Enter Message id </label>
                       <input type="text" name="messageId" className="form-control" value={this.state.messageId} onChange={this.onChange}  readOnly></input><br></br>
                        <label>Enter Message description </label><br></br>
                       <textarea rows="3" cols="70" name="messageDescription" className="form-control" value={this.state.messageDescription} onChange={this.onChange}  required="required"></textarea><br></br>
                       <label>Enter student ID</label>
                       <input type="text" name="studentId" className="form-control" value={this.state.studentId} onChange={this.onChange}></input> <br></br>
                    </div>
						<button className="btn btn-success" onClick={this.updatePayment}>update message</button>
                        <Link to="/messages"> <button className="btn btn-default">Cancel</button></Link> 
					</form> 
				</div>
        );

    }
}
function mapStateToProps(state) {
    return {
       updatemessage : state.MessageReducer.updatemessage,
       login : state.LoginReducer.login
       };
   }
   function mapDispatchToProps(dispatch){
    return {
     MessageAction : bindActionCreators(MessageAction, dispatch)
      };
   }
   export default connect(mapStateToProps,mapDispatchToProps)(UpdateMessage);