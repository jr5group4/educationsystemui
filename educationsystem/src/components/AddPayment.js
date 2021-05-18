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
            studentId : '',
            errors:{}
        }
        this.addNewPayment = this.addNewPayment.bind(this);
    }
    validate = () =>{
        let errors= {}
        let formIsValid = true
        if(!this.state.paymentDate)
        {
            formIsValid = false
            errors['paymentDate']='*Please enter payment date'
        }
        if(!this.state.paymentDue)
        {
            formIsValid = false
            errors['paymentDue']='*Please enter payment due'
        }
        if(!this.state.feePaid)
        {
            formIsValid = false
            errors['feePaid']='*Please enter fee paid'
        }
        if(!this.state.feeStatus)
        {
            formIsValid = false
            errors['feeStatus']='*Please enter fee status'
        }
        if(!this.state.courseId)
        {
            formIsValid = false
            errors['courseId']='*Please enter course Id'
        }
        if(!this.state.studentId)
        {
            formIsValid = false
            errors['studentId']='*Please enter student Id'
        }
        this.setState({errors})
        return formIsValid
    } 
    addNewPayment = (add) => {
        if(this.validate()){
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
                   <div className="form-group col-md-4 offset-md-4 offset-md-4">
                       <label>Enter date of Payment </label>
                       <input type="date" name="paymentDate" placeholder="Enter payment date" className="form-control" value={this.state.paymentDate} onChange={this.onChange}  required="required"></input><br></br>
                       <div class="red_color">{this.state.errors.paymentDate}</div><br></br>
                       <label>Enter due date</label>
                       <input type="date" name="paymentDue" placeholder="Enter pyment due date" className="form-control" value={this.state.paymentDue} onChange={this.onChange}></input><br></br>
                       <div class="red_color">{this.state.errors.paymentDue}</div><br></br>
                       <label>Enter course fee</label>
                       <input type="text" name="feePaid" placeholder="Enter course fees" className="form-control" value={this.state.feePaid} onChange={this.onChange}></input> <br></br>
                       <div class="red_color">{this.state.errors.feePaid}</div><br></br>
                       <label>Enter fee status(paid/unpaid)</label>
                       <input type="text" name="feeStatus" placeholder="Enter fee status" className="form-control" value={this.state.feeStatus} onChange={this.onChange}></input> <br></br>
                       <div class="red_color">{this.state.errors.feeStatus}</div><br></br>
                       <label>Enter course ID</label>
                       <input type="text" name="courseId" placeholder="Enter course Id" className="form-control" value={this.state.courseId} onChange={this.onChange}></input> <br></br>
                       <div class="red_color">{this.state.errors.courseId}</div><br></br>
                       <label>Enter student ID</label>
                       <input type="text" name="studentId" placeholder="Enter student Id" className="form-control" value={this.state.studentId} onChange={this.onChange}></input> <br></br>
                       <div class="red_color">{this.state.errors.studentId}</div><br></br>
                   </div>
                       <button className="btn btn-success" onClick={this.addNewPayment}>ADD Payment</button> &nbsp;&nbsp;
                       <Link to="/user"> <button className="btn btn-default">Cancel</button></Link> 
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