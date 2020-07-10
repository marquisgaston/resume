import React, { Component } from 'react';
import { FormControl, Button } from 'react-bootstrap';

import { connect } from 'react-redux';
import * as actions from '../../actions';
import axios from 'axios';
import history from '../../history';
import QuickSearch from './quickSearch';

class SearchBar extends Component {
    constructor(){
        super()

    this.handleChange = this.handleChange.bind(this);
    this.state = {
        searchText: ""
        }
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
                            this.props.pullExtraItems(res);
                        })
                var one = this.state.searchText.split(" ");
                var two = one.join("+")
                history.push(`/search=${two}`)
            }
        } else {
            return
        }
    }

    render() { 
        return ( 
            <div className="search-box-wrapper">
                <form className="search-box" onSubmit={this.handleClick}>
                    <FormControl name="searchText" value={this.state.searchText} onChange={this.handleChange} type="text" placeholder="Search" style={{marginRight: "1em"}}/>
                    <Button className="search-button" variant="outline-success" type="submit" style={{borderColor: "white", color: "white", backgroundColor: `#3f51b5`}}>Search</Button>
                </form>
                <QuickSearch searchText={this.state.searchText}/>             
            </div>
         );
    }
}
function mapStateToProps (state) {
    return state
}
 
export default SearchBar = connect(mapStateToProps, actions)(SearchBar);