import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as ProgressReportAction from '../store/actions/ProgressReportAction';
import {bindActionCreators} from 'redux';

class DeleteReport extends Component{
    componentDidMount(){
        const {ProgressReportAction, match} = this.props;
        ProgressReportAction.deleteReport(match.params.progressReportId);
    }
    render(){
        if(this.props.delreport !== undefined){
            this.props.history.push("/reports");
        }
        return(
            <div></div>
        );
    }
}

function mapStateToProps(state) {
    return {
        delreport : state.ProgressReportReducer.delreport
       
    };
}
function mapDispatchToProps(dispatch){
     return {
        ProgressReportAction : bindActionCreators(ProgressReportAction, dispatch)
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(DeleteReport);