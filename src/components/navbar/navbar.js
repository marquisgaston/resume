import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import NavbarBrand from './navbarBrand';
import MainNav from './mainNav';
import NavSearch from './navSearch';

class NavbarComponent extends Component {

    render() { 
        return ( 
            <div id="main-navbar-wrapper">
                <Navbar id="main-navbar"  variant="dark" fixed="top" expand="lg" width="100vw">  
                        <NavbarBrand/>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                         <MainNav/>
                         <NavSearch/>
                    </Navbar.Collapse>
                </Navbar>
            </div>
         );
    }
}
function mapStateToProps (state){
    return state
}
 
export default NavbarComponent = connect(mapStateToProps, actions)(NavbarComponent);