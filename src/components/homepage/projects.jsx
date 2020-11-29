import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

class Projects extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="projects-wrapper">
                Projects Wrapper
            </div>
         );
    }
}
function mapStateToprops (state) {
    return state
}


 
export default Projects = connect(mapStateToprops, actions)(Projects);