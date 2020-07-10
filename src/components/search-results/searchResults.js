import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

class SearchResultsPage extends Component {
    state = {  }

    componentDidMount() {
        if (this.props.main.searchTerm === null){
            this.props.setSearchTerm(this.props.match.params.slug.replace("=", "").replace("+", " "))
            console.log("slug",this.props.match.params.slug.replace("=", "").replace("+"," "),"searchTerm",this.props.main.searchTerm)
        }
    }

    render() { 
        return ( 
            <div className="search-results-page-wrapper page">
                {this.props.main.searchTerm}
            </div>
         );
    }
}
function mapStateToProps (state){
    return state
}
 
export default SearchResultsPage = connect(mapStateToProps, actions)(SearchResultsPage);