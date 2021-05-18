import axios from 'axios';

const REPORTURL="http://localhost:8105/educationsystem/report";

export const getReportsSuccess = (reports) => {
    console.log("inside getAllReportsSuccess method");
    return {
        type : 'GET_ALL_REPORTS_SUCCESS',reports
    }
};

export const getReports = () => {
    console.log("inside Get All Reports method");
        return (dispatch)=> {
        return axios.get(REPORTURL+"/getall")
        .then(Response => {
            localStorage.setItem("reports",JSON.stringify(Response.data));
            console.log("api call");
            dispatch(getReportsSuccess(Response.data));
        })
    };
};


export const addReportSuccess=()=>{
    console.log("inside addReportSuccess method");
    return {
        type : 'REPORT_ADDED'
    }
};

export const addReport = (payload) =>{
    console.log("inside addReport method");
    let report = {
        studentMarks : payload.studentMarks,
        studentGrade : payload.studentGrade,
        presentForTest  : payload.presentForTest,
        studentPercentage : payload.studentPercentage,
        studentResult : payload.studentResult,
        courseId : payload.courseId,
        studentId : payload.studentId
    }
    return (dispatch)=> {
        return axios.post(REPORTURL+"/add",report)
        .then(Response => {
            console.log("api call");
            dispatch(addReportSuccess());
        })
        .catch(Error=> {
            console.log("Error");
            throw(Error);
        });
    };
};

export const deleteReportSuccess=()=>{
    console.log("inside deleteReportSuccess method");
    return {
        type : 'REPORT_DELETED'
    }
};

export const deleteReport = (progressReportId) =>{
    console.log("inside deleteReport method");
    return (dispatch)=> {
        return axios.delete(REPORTURL+"/delete/"+progressReportId)
        .then(Response => {
            console.log("api call");
            dispatch(deleteReportSuccess());
        })
        .catch(Error=> {
            console.log("Error");
            throw(Error);
        });
    };
};

export const editReportSuccess=()=>{
    console.log("inside editReportSuccess method");
    return {
        type : 'REPORT_EDITED'
    }
};

export const editReport = (payload) =>{
    console.log("inside editReport method");
    let report = {
        progressReportId : payload.progressReportId,
        studentMarks : payload.studentMarks,
        studentGrade : payload.studentGrade,
        presentForTest  : payload.presentForTest,
        studentPercentage : payload.studentPercentage,
        studentResult : payload.studentResult,
        courseId : payload.courseId,
        studentId : payload.studentId
    }
    return (dispatch)=> {
        return axios.put(REPORTURL+"/update",report)
        .then(Response => {
            console.log("api call");
            dispatch(editReportSuccess());
        })
        .catch(Error=> {
            console.log("Error");
            throw(Error);
        });
    };
};
export const getReportByCodeSuccess = (getreport) => {
    console.log("inside getReportByCodeSuccess method");
    return {
        type : 'GET_REPORT_BY_CODE_SUCCESS',getreport
    }
};

export const getReportByCode = (studentId,courseId) => {
    console.log("inside getReportByCode method");
    return (dispatch)=> {
        return axios.get(REPORTURL+"/getbyid/"+studentId+"/"+courseId)
        .then(Response => {
            localStorage.setItem("getreport",JSON.stringify(Response.data));
            console.log("api call");
            dispatch(getReportByCodeSuccess(Response.data));
        })
        .catch(Error =>{
            console.log("error");
            throw(Error);
        });
    };
};