import axios from 'axios';

const STUDENTURL="http://localhost:8105/educationsystem/student";

export const getStudentSuccess = (students) =>{
    console.log("inside getAllStudentSuccesss method");
    return {
        type : 'GET_ALL_STUDENT_SUCCESS',students
    }
};

export const getStudents = () => {
    console.log("inside Get All Student mathod");
    return (dispatch)=> {
        return axios.get(STUDENTURL+"/getall")
        .then(Response =>{
            localStorage.setItem("students",JSON.stringify(Response.data));
            console.log("api call");
            dispatch(getStudentSuccess(Response.data));
        })
    };
};

export const addStudentSuccess=()=>{
    console.log("inside addStudentSuccess method");
    return {
        type : 'STUDENT_ADDED'
    }
};

export const addStudent = (payload) =>{
    console.log("inside addStudent method");
    let student = {
        firstName : payload.firstName,
        lastName : payload.lastName,
        dateOfBirth : payload.dateOfBirth,
        phoneNumber : payload.phoneNumber,
        studentEmailId : payload.studentEmailId     
    }
    return (dispatch)=> {
        return axios.post(STUDENTURL+"/add",student)
        .then(Response => {
            console.log("api call");
            dispatch(addStudentSuccess());
        })
        .catch(Error=> {
            console.log("Error");
            throw(Error);
        });
    };
};

export const getStudentByIdSuccess = (student) => {
    console.log("inside getStudentByIdSuccess method");
    return {
        type : 'GET_STUDENT_BY_ID_SUCCESS',student
    }
};

export const getStudentById = (studentId) => {
    console.log("inside getStudentById method");
    return (dispatch)=> {
        return axios.get(STUDENTURL+"/getbyid"+studentId)
        .then(Response => {
            localStorage.setItem("student",JSON.stringify(Response.data));
            console.log("api call");
            dispatch(getStudentByIdSuccess(Response.data));
        })
        .catch(Error =>{
            console.log("error");
            throw(Error);
        });
    };
};

export const deleteStudentSuccess=()=>{
    console.log("inside deleteStudentSuccess method");
    return {
        type : 'STUDENT_DELETED'
    }
};

export const deleteStudent = (studentId) =>{
    console.log("inside deleteStudent method");
    return (dispatch)=> {
        return axios.delete(STUDENTURL+"/delete/"+studentId)
        .then(Response => {
            console.log("api call");
            dispatch(deleteStudentSuccess());
        })
        .catch(Error=> {
            console.log("Error");
            throw(Error);
        });
    };
};

export const updateStudentSuccess=()=>{
    console.log("inside updateStudentSuccess method");
    return {
        type : 'STUDENT_UPDATED'
    }
};

export const updateStudent = (payload) =>{
    console.log("inside editPayment method");
    let student = {
        studentId : payload.studentId,
        firstName : payload.firstName,
        lastName : payload.lastName,
        phoneNumber : payload.phoneNumber,
        studentEmailId : payload.studentEmailId,
        dateOfBirth : payload.dateOfBirth
    }
    return (dispatch)=> {
        return axios.put(STUDENTURL+"/update",student)
        .then(Response => {
            console.log("api call");
            dispatch(updateStudentSuccess());
        })
        .catch(Error=> {
            console.log("Error");
            throw(Error);
        });
    };
};