import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router';
import history from '../history';

import NoMatch from './noMatch';
import Navbar from './navbar/navbar';
import Homepage from './homepage/homepage';

class Resume extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="resume-wrapper" id="resume-wrapper">
                <Navbar/>
                <Router history={history}>
                    <Switch>
                        <Route path="/" component={Homepage}/>
                        <Route component={NoMatch}/>
                    </Switch>
                </Router>
            </div>
         );
    }
}
 
export default Resume;