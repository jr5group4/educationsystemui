const initialState = {
    courses : [],
    addcourse : undefined,
    getcourse : undefined,
    delcourse : undefined,
    editcourse : undefined

}

export default function CourseReducer(state=initialState,action){
    switch(action.type){
        case 'GET_ALL_COURSES_SUCCESS':
            return {
            ...state,
            courses : action.courses
        };
        case 'COURSE_ADDED' :
            return {
                ...state,
                addcourse : 'added'
        };
        case 'GET_COURSE_BY_CODE_SUCCESS' :
            return {
                ...state,
                getcourse : action.getcourse
        };
        case 'COURSE_DELETED' :
            return {
                ...state,
                delcourse : 'deleted'
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