const initialState = {
    reports : [],
    getreport : [],
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
        case 'GET_REPORT_BY_CODE_SUCCESS':
            return {
            ...state,
            getreport : action.getreport
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