import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

class NoSearchTerm extends Component {
    state = {  }

    componentDidMount(){
        this.props.setCurrentPage("no-search-term-entered")
    }

    render() { 
        return ( 
            <div className="no-search-term-entered page" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "81vh"}}>
                No Search Term Was Entered
            </div>
         );
    }
}
function mapStateToProps (state){
    return state
}
 
export default NoSearchTerm = connect(mapStateToProps,actions)(NoSearchTerm);