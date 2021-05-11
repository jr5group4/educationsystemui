const initialState = {
    reports : [],
    addreport : undefined,
    delreport : undefined,
    editreport : undefined
}

export default function PaymentReducer(state=initialState,action){
    switch(action.type){
        case 'GET_ALL_REPORTS_SUCCESS':
            return {
            ...state,
            reports : action.reports
        };
        case 'REPORT_ADDED' :
            return {
                ...state,
                addreport : 'added'
        };
        case 'REPORT_DELETED' :
            return {
                ...state,
                delreport : 'deleted'
        };
        case 'REPORT_EDITED' :
            return {
                ...state,
                 editreport : 'edited'
        };
        default:
            return state
    }
};