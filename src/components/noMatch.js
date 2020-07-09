import React, { Component } from 'react';

class NoMatch extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="no-match page" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh"}}>
                This page doesn't exist
            </div>
         );
    }
}
 
export default NoMatch;