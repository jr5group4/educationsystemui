import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as PaymentAction from '../store/actions/PaymentAction';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
 
class GetAllPayment extends Component{
    componentDidMount(){
        this.props.PaymentAction.getPayments()
      }
      render(){
        let stock = this.props.payments;
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
                      <th>PAYMENT_ID</th>
                      <th>PAYMENT_DATE</th>
                      <th>PAYMENT_DUE</th>
                      <th>FEE_PAID</th>
                      <th>FEE_STATUS</th>
                      <th>COURSE_ID</th>
                      <th>STUDENT_ID</th>
                      <th>UPDATE</th>
                      <th>DELETE</th>
                  </tr>
                  </thead>
                  <tbody>
                      {
                          stock.map( payment=>
                      <tr key={payment.paymentId} align="center">
                          <td>{payment.paymentId}</td>        
                          <td>{payment.paymentDate}</td>
                          <td>{payment.paymentDue}</td>
                          <td>{payment.feePaid}</td> 
                          <td>{payment.feeStatus}</td>
                          <td>{payment.course.courseId}</td>
                          <td>{payment.student.studentId}</td>
                          <React.Fragment>
                          <td><Link to ={{pathname: '/editpayment',state:{payment}}}> <button className="btn btn-warning"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button> </Link> </td>
                          <td> <Link to={`/payments/${payment.paymentId}`}> <button className="btn btn-danger"><i class="fa fa-trash"></i></button> </Link>  </td>
                          </React.Fragment>
                      </tr>
                          )}
                  </tbody>
              </table> <br></br> 
              <Link to="/user"><button className="btn btn-info"><i class="fa fa-chevron-circle-left" aria-hidden="true"></i> Back</button></Link>
              
          </div>
      );
    }
}
function mapStateToProps(state) {
    return {
        payments : state.PaymentReducer.payments,
        login : state.LoginReducer.login
    };
}
function mapDispatchToProps(dispatch){
    return {
       PaymentAction : bindActionCreators(PaymentAction, dispatch)
   };
}
export default connect(mapStateToProps,mapDispatchToProps)(GetAllPayment);