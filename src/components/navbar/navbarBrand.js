import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

import { connect } from 'react-redux';
import * as actions from '../../actions';

class NavbarBrand extends Component {
    state = {  }

    renderName = () => {
        if (this.props.main.currentPage === "homepage" || "profile") {
             return (
                <Navbar.Brand id="navbar-brand-homepage">{this.props.resumeData.yourName}</Navbar.Brand> 
             )
        } else {
            return (
                <Navbar.Brand id="navbar-brand">{this.props.resumeData.yourName}</Navbar.Brand>                 
             )
        }
   }

    render() { 
        return ( 
            this.renderName()
         );
    }
}
function mapStateToProps (state){
    return state
}
 
export default NavbarBrand = connect(mapStateToProps, actions)(NavbarBrand);