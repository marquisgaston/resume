import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

class QuickSearch extends Component {

    renderQuickLinks = () => {

        var counter = 0;
        return (
            this.props.resumeData.quickLinks.map(item => {
                counter++
                return (
                    <a key={`${counter}`} className="quick-link-wrapper" href={item.url}>
                        <div className="quick-link" >
                        <i className={item.icon}></i>
                        <h5>{item.title}</h5>
                        </div>
                    </a>
                )
            })
        )
    }

    renderQuickSearch = () => {
        const newList = [];
        const newList2 = [];
        const newList3 = [];

        this.props.resumeData.resumeItems.map(item =>{
            if (newList.includes(item)){
            } else 
            if (this.props.searchText.toLowerCase() === "all"){
                if (newList.includes(item)) {
                } else {
                    newList.push(item)
                }
            } else {
                item.keyWords.filter(keyWord => {
                    if (this.props.searchText.toLowerCase() === keyWord && item.title.toLowerCase().includes(this.props.searchText.toLowerCase())){
                        if (newList.includes(item) | newList.includes(item) | newList3.includes(item)){
                        } else {
                            newList.push(item)
                        }
                    } else {
                    }
                    return newList
                })

                if (item.title.toLowerCase().includes(this.props.searchText.toLowerCase())){
                    if (newList.includes(item)) {
                    } else {
                        newList.push(item)
                    }
                }

                item.keyWords.filter(keyWord => {
                    if (this.props.searchText.toLowerCase() === keyWord){
                        if (newList2.includes(item) | newList.includes(item) | newList3.includes(item)){
                        } else {
                            newList2.push(item)
                        }
                    } else {
                    }
                    
                    return newList
                })

                //  one.filter(listItem => {
                //     if (item.title.includes(listItem)){
                //         if (newList3.includes(item) | newList.includes(item) | newList2.includes(item)){
                //             return
                //         } else {
                //             newList3.push(item)
                //         }
                // }})

            }
            return newList
        })
        const listToRender = newList.concat(newList2, newList3);       
            return (
                <div className="quick-search">
                    {listToRender.map(item => {
                        return (
                            <div key={`${item.index+item.title}`} className="quick-search-item">
                                <a className="quick-search-item-link" href={item.url ? item.url : item.localUrl}>
                                <div className="quick-search-item-sub-title">
                                    {item.subTitle ? item.subTitle : item.title}
                                </div>
                                {item.subTitle ? <div className="quick-search-item-title">
                                    {item.subTitle ? item.title : null}
                                </div> : null}
                                {item.url ? 
                                    <div className="quick-search-item-url">
                                        {item.url.length > 40 ? `${item.url.slice(0,40)}...` : item.url}
                                    </div>
                                : null}                                
                            </a>
                        </div>
                    )
                })}
            </div>
        )
    }

    render() { 
        if (this.props.searchText.length > 0){
            return ( 
                <div className="quick-search-wrapper">
                    {this.renderQuickSearch()}
                </div>
            );
        } else {
            return (
                <div className="quick-links">
                    <a className="quick-link-wrapper" href="https://www.github.com/marquisgaston">
                        <div className="quick-link" >
                        <i className="fab fa-github"></i>
                        <h5>My Github</h5>
                        </div>
                    </a>
                    <a className="quick-link-wrapper" href="https://www.linkedin.com/in/marquisgaston">
                        <div className="quick-link" >
                        <i className="fab fa-linkedin"></i>
                        <h5>My LinkedIn</h5>
                        </div>
                    </a>
                    {this.renderQuickLinks()}
                </div>
            )
        }
    }
}
function mapStateToProps(state){
    return state
}
 
export default QuickSearch = connect(mapStateToProps,actions)(QuickSearch);