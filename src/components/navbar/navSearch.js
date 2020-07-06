import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import history from '../../history';

import { connect } from 'react-redux';
import * as actions from '../../actions';

class NavSearch extends Component {
    constructor(){
        super()

    this.state = { 
        searchText: ""
     }
    
    this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
        this.setState ({
            [event.target.name]: event.target.value
        });
    }

    handleClick = () => {
        if (this.state.searchText !== null && this.state.searchText.length > 0){
            this.props.setSearchTerm(this.state.searchText);
            history.push('/search')
        } else {
            return
        }
    }

    renderSearchBar = () => {
        if(this.props.main.currentPage !== "homepage") {
            return (
                <Form inline >
                    <FormControl name="searchText" value={this.state.searchText} onChange={this.handleChange} type="text" placeholder={this.props.main.searchTerm ? this.props.main.searchTerm : "Search"} className="mr-sm-2" />
                    <Button className="search-button" variant="outline-success navbar-search" onClick={this.handleClick} style={{color: "white", borderColor: "white"}}>Search</Button>
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