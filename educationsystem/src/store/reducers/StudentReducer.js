const initialState = {
    students : [],
    addstudent : undefined,
    getstudent : [],
    deletestudent : undefined,
    updatestudent : undefined

}

export default function StudentReducer(state=initialState,action){
    switch(action.type){
        case 'GET_ALL_STUDENT_SUCCESS':
            return {
            ...state,
            students : action.students
        };
        case 'STUDENT_ADDED' :
            return {
                ...state,
                addstudent : 'added'
        };
        case 'GET_STUDENT_BY_ID_SUCCESS' :
            return {
                ...state,
                getstudent : action.getstudent
        };
        case 'STUDENT_DELETED' :
            return {
                ...state,
                deletestudent : 'deleted'
            };
        case 'STUDENT_UPDATED' :
            return {
                ...state,
                 updatestudent : 'updated'
            };
        default:
            return state
    }
};