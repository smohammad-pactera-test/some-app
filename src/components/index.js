import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import App from "./Container";
import { dispatchAction} from "../actions";

function mapStateToProps(state, ownProps) {
    return {
        ...state,
        ...ownProps
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            dispatchAction
        }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
