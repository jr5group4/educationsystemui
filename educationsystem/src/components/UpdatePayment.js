import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as PaymentAction from '../store/actions/PaymentAction';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';

class UpdatePayment extends Component{
    constructor(props){
        super(props)
        this.state = {
            paymentId : props.location.state.payment.paymentId,
            paymentDate : props.location.state.payment.paymentDate,
            paymentDue : props.location.state.payment.paymentDue,
            feePaid : props.location.state.payment.feePaid,
            feeStatus : props.location.state.payment.feeStatus,
            courseId : props.location.state.payment.course.courseId,
            studentId : props.location.state.payment.student.studentId
        }
    }
    componentDidMount(){
        console.log(this.props.location.state);
    }
        updatePayment= (e) =>{
            e.preventDefault();
            let payload = {
                paymentId : this.state.paymentId,
                paymentDate : this.state.paymentDate,
                paymentDue : this.state.paymentDue,
                feePaid : this.state.feePaid,
                feeStatus : this.state.feeStatus,
                courseId : this.state.courseId,
                studentId : this.state.studentId
            }
            this.props.PaymentAction.editPayment(payload);
            this.props.history.push("/payments");
        }
        onChange = (obj) => {
            this.setState({[obj.target.name] : obj.target.value});
        }
    render() {
        let payment = this.props.getpayment;
        console.log(payment);
        return(
            <div>
			    <h1>Update  Payment Details </h1>
				 <form >
				    <div className="form-group col-md-4 offset-md-4 offset-md-4">
                    <label>Enter Payment id </label>
                       <input type="text" name="paymentId" className="form-control" value={this.state.paymentId} onChange={this.onChange}  readOnly></input><br></br>
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
						<button className="btn btn-success" onClick={this.updatePayment}>update payment</button>
                        <Link to="/payments"> <button className="btn btn-default">Cancel</button></Link> 
					</form> 
				</div>
        );

    }
}
function mapStateToProps(state) {
    return {
       editpayment : state.PaymentReducer.editpayment,
       login : state.LoginReducer.login
       };
   }
   function mapDispatchToProps(dispatch){
    return {
     PaymentAction : bindActionCreators(PaymentAction, dispatch)
      };
   }
   export default connect(mapStateToProps,mapDispatchToProps)(UpdatePayment);