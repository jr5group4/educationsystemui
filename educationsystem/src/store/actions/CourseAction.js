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

export const getUpcommingCoursesSuccess = (upcommingcourses) => {
    console.log("inside getAllCoursesSuccess method");
    return{
        type : 'GET_ALL_UPCOMMING_COURSES_SUCCESS',upcommingcourses
    }
};

export const getUpcommingCourses = () => {
    console.log("inside Get All Upcomming Courses method");
        return (dispatch)=> {
        return axios.get(COURSEURL+"/getallupcomming")
        .then(Response => {
            localStorage.setItem("upcommingcourses",JSON.stringify(Response.data));
            console.log("api call");
            dispatch(getUpcommingCoursesSuccess(Response.data));
        })
    };
};

export const getRegisteredCoursesSuccess = (registeredcourses) => {
    console.log("inside getRegisteredCoursesSuccess method");
    return{
        type : 'GET_ALL_REGISTERED_COURSES_SUCCESS',registeredcourses
    }
};

export const getRegisteredCourses = (studentId) => {
    console.log("inside Get All Registered Courses method");
        return (dispatch)=> {
        return axios.get(COURSEURL+"/getallregistered/"+studentId)
        .then(Response => {
            localStorage.setItem("registeredcourses",JSON.stringify(Response.data));
            console.log("api call");
            dispatch(getRegisteredCoursesSuccess(Response.data));
        })
    };
};

export const getOngoingCoursesSuccess = (ongoingcourses) => {
    console.log("inside getOngoingCoursesSuccess method");
    return{
        type : 'GET_ALL_ONGOING_COURSES_SUCCESS',ongoingcourses
    }
};

export const getOngoingCourses = (studentId) => {
    console.log("inside Get All Ongoing Courses method");
        return (dispatch)=> {
        return axios.get(COURSEURL+"/getallongoing/"+studentId)
        .then(Response => {
            localStorage.setItem("ongoingcourses",JSON.stringify(Response.data));
            console.log("api call");
            dispatch(getOngoingCoursesSuccess(Response.data));
        })
    };
};

export const getCompletedCoursesSuccess = (completedcourses) => {
    console.log("inside getCompletedCoursesSuccess method");
    return{
        type : 'GET_ALL_COMPLETED_COURSES_SUCCESS',completedcourses
    }
};

export const getCompletedCourses = (studentId) => {
    console.log("inside Get All Completed Courses method");
        return (dispatch)=> {
        return axios.get(COURSEURL+"/getallcompleted/"+studentId)
        .then(Response => {
            localStorage.setItem("completedcourses",JSON.stringify(Response.data));
            console.log("api call");
            dispatch(getCompletedCoursesSuccess(Response.data));
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
        trainerId :payload.trainerId
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

export const registerCourseSuccess=()=>{
    console.log("inside registerCourseSuccess method");
    return {
        type : 'COURSE_REGISTERED'
    }
};

export const registerCourse = (courseId,studentId) =>{
    console.log("inside registerCourse method");
    return (dispatch)=> {
        return axios.put(COURSEURL+"/register/"+courseId+"/"+studentId)
        .then(Response => {
            console.log("api call");
            dispatch(registerCourseSuccess());
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