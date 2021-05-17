import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as MessageAction from '../store/actions/MessageAction';
import {bindActionCreators} from 'redux';

class DeleteMessage extends Component{
    componentDidMount(){
        const {MessageAction, match} = this.props;
        MessageAction.deleteMessage(match.params.messageId);
    }
    render(){
        if(this.props.deletemessage !== undefined){
            this.props.history.push("/messages");
        }
        return(
            <div></div>
        );
    } 
}

function mapStateToProps(state) {
    return {
        deletemessage : state.MessageReducer.deletemessage
       
    };
}
function mapDispatchToProps(dispatch){
     return {
        MessageAction : bindActionCreators(MessageAction, dispatch)
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(DeleteMessage);