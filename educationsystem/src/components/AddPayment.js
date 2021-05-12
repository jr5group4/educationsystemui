import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as PaymentAction from '../store/actions/PaymentAction';
import {bindActionCreators} from 'redux';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';

class AddPayment extends Component{
    constructor(props){
        super(props)
        this.state = {
            paymentDate : '',
            paymentDue : '',
            feePaid : '',
            feeStatus: '',
            courseId :'',
            studentId : ''
        }
        this.addNewPayment = this.addNewPayment.bind(this);
    }
    addNewPayment = (add) => {
        add.preventDefault();
        let payload = {
            paymentDate : this.state.paymentDate,
            paymentDue : this.state.paymentDue,
            feePaid : this.state.feePaid,
            feeStatus : this.state.feeStatus,
            courseId : this.state.courseId,
            studentId : this.state.studentId
        }
        this.props.PaymentAction.addPayment(payload);
        this.props.history.push("/payments");
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
               <h1>Add New Payment </h1>
               <form >
                   <div className="form-group">
                       <label>Enter date of Payment </label>
                       <input type="date" name="paymentDate" className="form-control" value={this.state.paymentDate} onChange={this.onChange}  required="required"></input><br></br>
                       <label>Enter due date</label>
                       <input type="date" name="paymentDue" className="form-control" value={this.state.paymentDue} onChange={this.onChange}></input><br></br>
                       <label>Enter course fee</label>
                       <input type="text" name="feePaid" className="form-control" value={this.state.feePaid} onChange={this.onChange}></input> <br></br>
                       <label>Enter fee statud(paid/unpaid)</label>
                       <input type="text" name="feeStatus" className="form-control" value={this.state.feeStatus} onChange={this.onChange}></input> <br></br>
                       <label>Enter course ID</label>
                       <input type="text" name="courseId" className="form-control" value={this.state.courseId} onChange={this.onChange}></input> <br></br>
                       <label>Enter student ID</label>
                       <input type="text" name="studentId" className="form-control" value={this.state.studentId} onChange={this.onChange}></input> <br></br>
                       
                   </div>
                       <button className="btn btn-success" onClick={this.addNewPayment}>ADD Payment</button> &nbsp;&nbsp;
                       <Link to="/payments"> <button className="btn btn-default">Cancel</button></Link> 
                   </form>
               </div>
       );

   }
}
function mapStateToProps(state) {
    return {
       addpayment : state.PaymentReducer.addpayment,
       login : state.LoginReducer.login
       };
   }
   function mapDispatchToProps(dispatch){
    return {
     PaymentAction : bindActionCreators(PaymentAction, dispatch)
      };
   }
   
   export default connect(mapStateToProps,mapDispatchToProps)(AddPayment);