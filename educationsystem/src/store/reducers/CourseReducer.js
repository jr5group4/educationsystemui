const initialState = {
    courses : [],
    upcommingcourses : [],
    addcourse : undefined,
    getcourse : [],
    delcourse : undefined,
    registercourse : undefined,
    ongoingcourses : [],
    registeredcourses : [],
    editcourse : undefined

}

export default function CourseReducer(state=initialState,action){
    switch(action.type){
        case 'GET_ALL_COURSES_SUCCESS':
            return {
            ...state,
            courses : action.courses
        };
        case 'GET_ALL_UPCOMMING_COURSES_SUCCESS':
            return {
            ...state,
            upcommingcourses : action.upcommingcourses
        };
        case 'GET_ALL_REGISTERED_COURSES_SUCCESS':
            return {
            ...state,
            registeredcourses : action.registeredcourses
        };
        case 'GET_ALL_ONGOING_COURSES_SUCCESS':
            return {
            ...state,
            ongoingcourses : action.ongoingcourses
        };
        case 'COURSE_ADDED' :
            return {
                ...state,
                addcourse : 'added'
        };
        case 'GET_COURSE_BY_ID_SUCCESS' :
            return {
                ...state,
                getcourse : action.getcourse
        };
        case 'COURSE_DELETED' :
            return {
                ...state,
                delcourse : 'deleted'
            };
        case 'COURSE_REGISTERED' :
            return {
                ...state,
                registercourse : 'registered'
            };
        
        case 'COURSE_EDITED' :
            return {
                ...state,
                 editcourse : 'edited'
            };
        default:
            return state
    }
};