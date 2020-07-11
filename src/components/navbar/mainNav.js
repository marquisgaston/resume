import React, { Component } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import history from '../../history';

import { connect } from 'react-redux';
import * as actions from '../../actions';
import LoginButton from '../login/login';

class MainNav extends Component {
     state = {  }

     phoneNumberDash = (phoneNumber) => {
          return (
               `${phoneNumber.charAt(0)}${phoneNumber.charAt(1)}${phoneNumber.charAt(2)}-${phoneNumber.charAt(3)}${phoneNumber.charAt(4)}${phoneNumber.charAt(5)}-${phoneNumber.charAt(6)}${phoneNumber.charAt(7)}${phoneNumber.charAt(8)}${phoneNumber.charAt(9)}`
          )
     }

     renderMainNav = () => {
        if(this.props.main.currentPage !== "homepage") {
             return (
                  <Nav className="mr-auto">
                       <Nav.Link onClick={() => {history.push('/')}}>Home</Nav.Link>
                       <Nav.Link href="#link">Profile</Nav.Link>
                       <NavDropdown title="Contact" id="basic-nav-dropdown">
                            <NavDropdown.Item ><i className="fas fa-envelope"></i>{this.props.resumeData.yourEmail} </NavDropdown.Item>
                            <NavDropdown.Item ><i className="fas fa-phone-square-alt"></i>{this.phoneNumberDash(this.props.resumeData.yourPhone)}</NavDropdown.Item>
                            <NavDropdown.Item href={this.props.resumeData.yourMainSite.link}><i className="fab fa-linkedin"></i> {this.props.resumeData.yourMainSite.name}</NavDropdown.Item>
                       <NavDropdown.Divider />
                       {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                       </NavDropdown>
                       {/* <LoginButton/> */}
                  </Nav>
             )
        } else 
        {
             return (
                  <Nav className="mr-auto" id="navbar-nav">
                       {/* <Nav.Link href="#home">Home</Nav.Link> */}
                       <Nav.Link href="#link">Profile</Nav.Link>
                       <NavDropdown title="Contact" id="basic-nav-dropdown">
                            <NavDropdown.Item ><i className="fas fa-envelope"></i> {this.props.resumeData.yourEmail} </NavDropdown.Item>
                            <NavDropdown.Item ><i className="fas fa-phone-square-alt"></i> {this.phoneNumberDash(this.props.resumeData.yourPhone)}</NavDropdown.Item>
                            <NavDropdown.Item href={this.props.resumeData.yourMainSite.link}><i className="fab fa-linkedin"></i> {this.props.resumeData.yourMainSite.name}</NavDropdown.Item>
                       <NavDropdown.Divider />
                       {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                       </NavDropdown>
                       {/* <LoginButton/> */}
                  </Nav>
             )
        }
   }

    render() { 
        return ( 
            this.renderMainNav()
         );
    }
}
function mapStateToProps (state){
    return state
}
 
export default MainNav = connect(mapStateToProps, actions)(MainNav);