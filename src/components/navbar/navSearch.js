import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import history from '../../history';

import { connect } from 'react-redux';
import * as actions from '../../actions';
import axios from 'axios';

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
    handleClick = (event) => {
        event.preventDefault();
        if (this.state.searchText && this.state.searchText.length > 0){
            if (this.state.searchText.toLowerCase() === "resume") {
                window.open('https://docs.google.com/document/d/1mWRqgDd30Er4ZvEvIrX7WlwzHiVGRfxAjRn5PNY99FY/edit');
            } else {
                this.props.setSearchTerm(this.state.searchText);
                axios
                    .get(`https://jsonplaceholder.typicode.com/posts`)
                        .then(res => {
                            this.props.pullExtraItems(res.data);
                        })
                var one = this.state.searchText.split(" ");
                var two = one.join("+")
                history.push(`/search=${two}`)
            }
        } else {
            return
        }
    }

    renderSearchBar = () => {
        if(this.props.main.currentPage !== "homepage") {
            return (
                <Form inline onSubmit={this.handleClick} >
                    <FormControl name="searchText" value={this.state.searchText} onChange={this.handleChange} type="text" placeholder={this.props.main.searchTerm ? this.props.main.searchTerm : "Search"} className="mr-sm-2" />
                    <Button className="search-button" variant="outline-success navbar-search" type="submit" style={{color: "white", borderColor: "white"}}>Search</Button>
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