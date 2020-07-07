import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import HomeTabs from './homeTabs';

class Homepage extends Component {
    state = {  }

    componentDidMount(){
        this.props.setCurrentPage("homepage");
    }

    render() { 
        return ( 
            <div className="homepage page">
                <HomeTabs/>
            </div>
         );
    }
}
function mapStateToProps(state){
    return state
}
 
export default Homepage = connect(mapStateToProps, actions)(Homepage);