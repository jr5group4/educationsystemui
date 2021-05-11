import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as PaymentAction from '../store/actions/PaymentAction';
import {bindActionCreators} from 'redux';

class DeletePayment extends Component{
    componentDidMount(){
        const {PaymentAction, match} = this.props;
        PaymentAction.deletePayment(match.params.paymentId);
    }
    render(){
        if(this.props.delpayment !== undefined){
            this.props.history.push("/payments");
        }
        return(
            <div></div>
        );
    }
}

function mapStateToProps(state) {
    return {
        delpayment : state.PaymentReducer.delpayment
       
    };
}
function mapDispatchToProps(dispatch){
     return {
        PaymentAction : bindActionCreators(PaymentAction, dispatch)
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(DeletePayment);