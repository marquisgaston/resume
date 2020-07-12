import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';
import SearchPagination from './searchPagination';
import axios from 'axios';
import ResultItem from './resultItem';

class SearchResultsPage extends Component {
    state = { 
        pageStart: 0,
        itemsPerPage: 10
    }

    componentWillMount(){
        this.props.setSearchTerm("all");
        axios
            .get(`https://jsonplaceholder.typicode.com/posts`)
                .then(res => {
                    this.props.pullExtraItems(res.data);
                })
    }

    pageUp = () => {
        this.setState({
            pageStart: this.state.pageStart + this.state.itemsPerPage
        })
    }

    pageDown = () => {
        this.setState({
            pageStart: this.state.pageStart - this.state.itemsPerPage
        })
    }

    searchPageLink = (linkNumber) => {
        this.setState({
            pageStart: (linkNumber -1) * this.state.itemsPerPage
        })
    }

    componentDidMount() {
        this.props.setCurrentPage("search-results-page");
                                                                                                                                                                                                                  
    }

    render() { 
        const fullResults = [];
        
        const addToFullResults = (listToAddToResults) => {
            listToAddToResults.map(item => {
                if(!fullResults.includes(item)){
                    fullResults.push(item);
                }
                return listToAddToResults
            })
        }

                // SORT THROUGH RESUME ITEMS

                if (this.props.main.searchTerm === null){
                    fullResults.push("no search term was entered");
                } else 
                if (this.props.main.searchTerm.toLowerCase() === "all"){
                    this.props.resumeData.resumeItems.map(item => {
                        fullResults.push(item);
                        return item                
                    })
                    if(this.props.search.extraItems){
                        addToFullResults(this.props.search.extraItems)
                    }
                } else {
                    const list1 = this.props.resumeData.resumeItems.filter(item => 
                        item.title.toLowerCase() === this.props.main.searchTerm.toLowerCase() 
                    )
                    const list2 = this.props.resumeData.resumeItems.filter(item => 
                        item.title.toLowerCase().includes(this.props.main.searchTerm.toLowerCase()) === true
                    )
                    const list3 = [];
                    this.props.resumeData.resumeItems.map(item => {
                        item.keyWords.map(keyword => {
                            if(keyword === this.props.main.searchTerm.toLowerCase()){
                                list3.push(item)
                            }
                            return keyword
                        })
                        return item
                    })
        
                    addToFullResults(list1);
                    addToFullResults(list2);
                    addToFullResults(list3);
                    if (this.props.search.extraItems && fullResults.length > 0){
                        addToFullResults(this.props.search.extraItems);
                    }
                }
        
            // END RESUME SORT

        const pageLimit = Math.floor(fullResults.length / this.state.itemsPerPage);
        const currentResultsPage = Math.floor(this.state.pageStart/this.state.itemsPerPage);
        const currentPaginationNumber = Math.floor(currentResultsPage / 10);
        const listToRender = fullResults.slice(this.state.pageStart, this.state.pageStart + this.state.itemsPerPage);

        const renderResults = () => {
            if(listToRender.length <= 0){
                return "your search returned no results"
            } else {
                return (
                    <ResultItem list={listToRender}/>
                )
            }
        }
        
        console.log("res", this.props.main.extraItems)

        return ( 
            <div className="search-results-page-wrapper page">
                 <div className="search-results-page">
                    search term: {this.props.main.searchTerm}
                </div>
                <div className="page-buttons">
                    {currentResultsPage < (pageLimit ) ? <button className="page-button" onClick={this.pageUp}>NEXT</button> : null}
                        <SearchPagination list={fullResults} currentResultsPage={currentResultsPage} itemsPerPage={this.state.itemsPerPage} currentPaginationNumber={currentPaginationNumber} searchPageLink={this.searchPageLink}/>
                    {currentResultsPage > 0 ? <button className="page-button" onClick={this.pageDown}>PREV</button> : null}
                </div>
                <div>
                    {/* pS: {this.state.pageStart} | iPP: {this.state.itemsPerPage} | cRS: {currentResultsPage} | cP: {currentPaginationNumber} */}
                </div>
                <div className="results-wrapper">
                    {renderResults(listToRender)}
                </div>
            </div>
         );
    }
}
function mapStateToProps (state){
    return state
}
 
export default SearchResultsPage = connect(mapStateToProps, actions)(SearchResultsPage);