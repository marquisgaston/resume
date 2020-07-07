import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

class SearchTab extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="search-tab">
                <div className="search-tab__front">
                    Search Tab Component
                </div>
                <div className="search-tab__back">
                    Back
                </div>
            </div>
         );
    }
}
function mapStateToProps (state){
    return state
}
 
export default SearchTab = connect(mapStateToProps, actions)(SearchTab);