import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

import { connect } from 'react-redux';
import * as actions from '../../actions';

class NavSearch extends Component {
    state = { 
        searchText: ""
     }

    renderSearchBar = () => {
        if(this.props.main.currentPage !== "homepage") {
            return (
                <Form inline >
                    <FormControl name="searchText" value={this.state.searchText} onChange={this.handleChange} type="text" placeholder={this.props.main.searchTerm ? this.props.main.searchTerm : "Search"} className="mr-sm-2" />
                    <Button variant="outline-success navbar-search" onClick={this.handleClick} style={{color: "white", borderColor: "white"}}>Search</Button>
                </Form>
             )
        } else 
        {
            return null
        }
   }

    render() { 
        return ( 
            this.renderSearchBar()
         );
    }
}
function mapStateToProps (state){
    return state
}
 
export default NavSearch = connect(mapStateToProps, actions)(NavSearch);