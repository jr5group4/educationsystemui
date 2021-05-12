import axios from 'axios';

const PAYMENTURL="http://localhost:8105/educationsystem/payment";

export const getPaymentsSuccess = (payments) => {
    console.log("inside getAllPaymentsSuccess method");
    return {
        type : 'GET_ALL_PAYMENTS_SUCCESS',payments
    }
};

export const getPayments = () => {
    console.log("inside Get All Payment method");
        return (dispatch)=> {
        return axios.get(PAYMENTURL+"/getall")
        .then(Response => {
            localStorage.setItem("payments",JSON.stringify(Response.data));
            console.log("api call");
            dispatch(getPaymentsSuccess(Response.data));
        })
    };
};

export const addPaymentSuccess=()=>{
    console.log("inside addPaymentSuccess method");
    return {
        type : 'PAYMENT_ADDED'
    }
};

export const addPayment = (payload) =>{
    console.log("inside addPayment method");
    let item = {
        paymentDate : payload.paymentDate,
        paymentDue : payload.paymentDue,
        feePaid  : payload.feePaid,
        feeStatus : payload.feeStatus,
        courseId : payload.courseId,
        studentId : payload.studentId
    }
    return (dispatch)=> {
        return axios.post(PAYMENTURL+"/add",item)
        .then(Response => {
            console.log("api call");
            dispatch(addPaymentSuccess());
        })
        .catch(Error=> {
            console.log("Error");
            throw(Error);
        });
    };
};

export const getPaymentByCodeSuccess = (payment) => {
    console.log("inside getPaymentByCodeSuccess method");
    return {
        type : 'GET_PAYEMENT_BY_CODE_SUCCESS',payment
    }
};

export const getPaymentByCode = (code) => {
    console.log("inside getPaymentByCode method");
    return (dispatch)=> {
        return axios.get(PAYMENTURL+"/getbyid"+code)
        .then(Response => {
            localStorage.setItem("item",JSON.stringify(Response.data));
            console.log("api call");
            dispatch(getPaymentByCodeSuccess(Response.data));
        })
        .catch(Error =>{
            console.log("error");
            throw(Error);
        });
    };
};

export const deletePaymentSuccess=()=>{
    console.log("inside deletePaymentSuccess method");
    return {
        type : 'PAYMENT_DELETED'
    }
};

export const deletePayment = (paymentId) =>{
    console.log("inside deletePayment method");
    return (dispatch)=> {
        return axios.delete(PAYMENTURL+"/delete/"+paymentId)
        .then(Response => {
            console.log("api call");
            dispatch(deletePaymentSuccess());
        })
        .catch(Error=> {
            console.log("Error");
            throw(Error);
        });
    };
};

export const editPaymentSuccess=()=>{
    console.log("inside editPaymentSuccess method");
    return {
        type : 'PAYMENT_EDITED'
    }
};

export const editPayment = (payload) =>{
    console.log("inside editPayment method");
    let payment = {
        paymentId : payload.paymentId,
        paymentDate : payload.paymentDate,
        paymentDue : payload.paymentDue,
        feePaid  : payload.feePaid,
        feeStatus : payload.feeStatus,
        courseId : payload.courseId,
        studentId : payload.studentId
    }
    return (dispatch)=> {
        return axios.put(PAYMENTURL+"/update",payment)
        .then(Response => {
            console.log("api call");
            dispatch(editPaymentSuccess());
        })
        .catch(Error=> {
            console.log("Error");
            throw(Error);
        });
    };
};