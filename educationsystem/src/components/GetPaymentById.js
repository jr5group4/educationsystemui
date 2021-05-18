import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as StudentAction from '../store/actions/StudentAction';
import * as PaymentAction from '../store/actions/PaymentAction';
import {bindActionCreators} from 'redux';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';

class GetPaymentById extends Component{
    componentDidMount(){
        const {PaymentAction, match} = this.props;
        PaymentAction.getPaymentByCode(match.params.studentId,match.params.courseId)
    }
    render(){
        let student = this.props.getstudent;
        let payments=this.props.getpayment;
        return(
            <div>
                <b>PAYMENT DETAILS</b> <br></br>
            {(Object.entries(payments).length==0)?
            <React.Fragment>
                NO PAYMENT DETAILS AVAILABLE<br></br>
            </React.Fragment>:
            <React.Fragment>
                 <table className="table table-striped" align="center" width="50%" border="2">
                {payments.map(payment=>
                <tr><th>PAYMENT ID</th><td>{payment.paymentId}</td></tr> )}     
                {payments.map(payment=>
                <tr><th>DATE OF PAYMENT</th><td>{payment.paymentDate}</td></tr>
                )}
                {payments.map(payment=>
                <tr><th>LAST DATE OF PAYMENT</th><td>{payment.paymentDue}</td></tr> )}
                {payments.map(payment=>
                <tr><th>AMOUNT(RS)</th><td>{payment.feePaid}</td></tr> )}
                {payments.map(payment=>
                <tr><th>FEE STATUS</th><td>{payment.feeStatus}</td></tr> )}
            </table>
                </React.Fragment>}
                <Link to={`/student/${student.studentId}`}><button className="btn btn-info">Back</button></Link>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        getstudent : state.StudentReducer.getstudent,
        getpayment : state.PaymentReducer.getpayment,
        login : state.LoginReducer.login
       
    };
}
function mapDispatchToProps(dispatch){
     return {
        StudentAction : bindActionCreators(StudentAction, dispatch),
        PaymentAction : bindActionCreators(PaymentAction,dispatch)
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(GetPaymentById);