const initialState = {
    trainers : [],
    addtrainer : undefined,
    gettrainer : [],
    deltrainer : undefined,
    edittrainer : undefined

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
        default:
            return state
    }
};