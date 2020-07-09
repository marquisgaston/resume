import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions';

class NoMatch extends Component {
    state = {  }

    componentDidMount(){
        this.props.setCurrentPage("no-match")
    }

    render() { 
        return ( 
            <div className="no-match page" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "81vh"}}>
                This page doesn't exist
            </div>
         );
    }
}
function mapStateToProps (state){
    return state
}
 
export default NoMatch = connect(mapStateToProps,actions)(NoMatch);