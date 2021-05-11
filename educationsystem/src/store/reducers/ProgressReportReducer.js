const initialState = {
    reports : [],
    previousreports : [],
    currentreports : [],
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
        case 'GET_PREVIOUS_REPORTS_SUCCESS':
            return {
            ...state,
            previousreports : action.previousreports
        };
        case 'GET_CURRENT_REPORTS_SUCCESS':
            return {
            ...state,
            currentreports : action.currentreports
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