const initialState = {
    payments : [],
    addpayment : undefined,
    getpayment : undefined,
    delpayment : undefined,
    editpayment : undefined

}

export default function PaymentReducer(state=initialState,action){
    switch(action.type){
        case 'GET_ALL_PAYMENTS_SUCCESS':
            return {
            ...state,
            payments : action.payments
        };
        case 'PAYMENT_ADDED' :
            return {
                ...state,
                addpayment : 'added'
        };
        case 'GET_PAYMENT_BY_CODE_SUCCESS' :
            return {
                ...state,
                getapayment : action.getpayment
        };
        case 'PAYMENT_DELETED' :
            return {
                ...state,
                delpayment : 'deleted'
            };
        case 'PAYEMENT_EDITED' :
            return {
                ...state,
                 editpayment : 'edited'
            };
        default:
            return state
    }
};