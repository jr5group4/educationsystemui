const initialState = {
    messages : [],
    addmessage : undefined,
    deletemessage : undefined,
    updatemessage : undefined

} 

export default function MessageReducer(state=initialState,action){
    switch(action.type){
        case 'GET_ALL_MESSAGES_SUCCESS':
            return {
            ...state,
            messages : action.messages
        };
        case 'MESSAGE_ADDED' :
            return {
                ...state,
                addmessage : 'added'
        };
        case 'MESSAGE_DELETED' :
            return {
                ...state,
                deletemessage : 'deleted'
            };
        case 'MESSAGE_UPDATED' :
            return {
                ...state,
                 updatemessage : 'updated'
            };
        default:
            return state
    }
};