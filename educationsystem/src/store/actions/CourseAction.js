import axios from 'axios';

const COURSEURL="http://localhost:8105/educationsystem/course";

export const getCoursesSuccess = (courses) => {
    console.log("inside getAllCoursesSuccess method");
    return{
        type : 'GET_ALL_COURSES_SUCCESS',courses
    }
};

export const getCourses = () => {
    console.log("inside Get All Courses method");
        return (dispatch)=> {
        return axios.get(COURSEURL+"/getall")
        .then(Response => {
            localStorage.setItem("courses",JSON.stringify(Response.data));
            console.log("api call");
            dispatch(getCoursesSuccess(Response.data));
        })
    };
};

export const addCourseSuccess=()=>{
    console.log("inside addCourseSuccess method");
    return {
        type : 'COURSE_ADDED'
    }
};

export const addCourse = (payload) =>{
    console.log("inside addCOurse method");
    let item = {
        courseName : payload.courseName,
        duration : payload.duration,
        startDate  : payload.startDate,
        endDate : payload.endDate,
        studentId : payload.studentId
    }
    return (dispatch)=> {
        return axios.post(COURSEURL+"/add",item)
        .then(Response => {
            console.log("api call");
            dispatch(addCourseSuccess());
        })
        .catch(Error=> {
            console.log("Error");
            throw(Error);
        });
    };
};

export const getCourseByIdSuccess = (getcourse) => {
    console.log("inside getCourseByIdSuccess method");
    return {
        type : 'GET_COURSE_BY_ID_SUCCESS',getcourse
    }
};

export const getCourseById = (courseId) => {
    console.log("inside getCourseById method");
    return (dispatch)=> {
        return axios.get(COURSEURL+"/getbyid/"+courseId)
        .then(Response => {
            localStorage.setItem("course",JSON.stringify(Response.data));
            console.log("api call");
            dispatch(getCourseByIdSuccess(Response.data));
        })
        .catch(Error =>{
            console.log("error");
            throw(Error);
        });
    };
};

export const deleteCourseSuccess=()=>{
    console.log("inside deleteCourseSuccess method");
    return {
        type : 'COURSE_DELETED'
    }
};

export const deleteCourse = (courseId) =>{
    console.log("inside deleteCourse method");
    return (dispatch)=> {
        return axios.delete(COURSEURL+"/delete/"+courseId)
        .then(Response => {
            console.log("api call");
            dispatch(deleteCourseSuccess());
        })
        .catch(Error=> {
            console.log("Error");
            throw(Error);
        });
    };
};

export const editCourseSuccess=()=>{
    console.log("inside editCourseSuccess method");
    return {
        type : 'COURSE_EDITED'
    }
};

export const editCourse = (payload) =>{
    console.log("inside editCourse method");
    let course = {
        courseId : payload.courseId,
        courseName : payload.courseName,
        duration : payload.duration,
        startDate  : payload.startDate,
        endDate : payload.endDate,
        studentId : payload.studentId
    }
    return (dispatch)=> {
        return axios.put(COURSEURL+"/update",course)
        .then(Response => {
            console.log("api call");
            dispatch(editCourseSuccess());
        })
        .catch(Error=> {
            console.log("Error");
            throw(Error);
        });
    };
};