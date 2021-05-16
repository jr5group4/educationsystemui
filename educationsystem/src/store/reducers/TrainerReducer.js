const initialState = {
    trainers : [],
    addtrainer : undefined,
    gettrainer : [],
    gettrainercourse : [],
    deltrainer : undefined,
    edittrainer : undefined,
    registertrainer : undefined
}

export default function TrainerReducer(state=initialState,action){
    switch(action.type){
        case 'GET_ALL_TRAINERS_SUCCESS':
            return {
            ...state,
            trainers : action.trainers
        };
        case 'TRAINER_ADDED' :
            return {
                ...state,
                addtrainer : 'added'
        };
        case 'GET_TRAINER_BY_ID_SUCCESS' :
            return {
                ...state,
                gettrainer : action.gettrainer
        };
        case 'GET_TRAINER_BY_COURSE_SUCCESS' :
            return {
                ...state,
                gettrainercourse : action.gettrainercourse
        };
        case 'TRAINER_DELETED' :
            return {
                ...state,
                deltrainer : 'deleted'
            };
        case 'TRAINER_EDITED' :
            return {
                ...state,
                 edittrainer : 'edited'
            };
        case 'TRAINER_REGISTERED' :
            return {
                ...state,
                registertrainer : 'registered'
            };
        default:
            return state
    }
};