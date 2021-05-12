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

/* export const getPreviousReportsSuccess = (reports) => {
    console.log("inside getPreviousReportsSuccess method");
    return {
        type : 'GET_PREVIOUS_REPORTS_SUCCESS',reports
    }
};

export const getPreviousReports = () => {
    console.log("inside Get Previous Reports method");
        return (dispatch)=> {
        return axios.get(REPORTURL+"/getprevious/"+studentId)
        .then(Response => {
            localStorage.setItem("reports",JSON.stringify(Response.data));
            console.log("api call");
            dispatch(getPreviousReportsSuccess(Response.data));
        })
    };
};

export const getCurrentReportsSuccess = (reports) => {
    console.log("inside getCurrentReportsSuccess method");
    return {
        type : 'GET_CURRENT_REPORTS_SUCCESS',reports
    }
};

export const getCurrentReports = () => {
    console.log("inside Get Current Reports method");
        return (dispatch)=> {
        return axios.get(REPORTURL+"/getcurrent/"+studentId)
        .then(Response => {
            localStorage.setItem("reports",JSON.stringify(Response.data));
            console.log("api call");
            dispatch(getCurrentReportsSuccess(Response.data));
        })
    };
}; */

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