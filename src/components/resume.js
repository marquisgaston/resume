import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router';
import history from '../history';

import NoMatch from './noMatch';
import Navbar from './navbar/navbar';
import Homepage from './homepage/homepage';
import Footer from './footer/footer';
import SearchResults from './search-results/searchResults';
import NoSearchTerm from './search-results/noSearchTerm';

class Resume extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="resume-wrapper" id="resume-wrapper">
                <Navbar/>
                <Router history={history}>
                    <Switch>
                        <Route path="/" exact component={Homepage}/>
                        <Route path="/search:slug" exact component={SearchResults}/>
                        <Route path="/search" exact component={NoSearchTerm}/>
                        <Route component={NoMatch}/>
                    </Switch>
                </Router>
                <Footer/>
            </div>
         );
    }
}
 
export default Resume;