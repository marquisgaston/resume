import React, { Component } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import history from '../../history';

import { connect } from 'react-redux';
import * as actions from '../../actions';

class MainNav extends Component {
    state = {  }

    renderMainNav = () => {
        if(this.props.main.currentPage !== "homepage") {
             return (
                  <Nav className="mr-auto">
                       <Nav.Link onClick={() => {history.push('/')}}>Home</Nav.Link>
                       <Nav.Link href="#link">Profile</Nav.Link>
                       <NavDropdown title="Contact" id="basic-nav-dropdown">
                            <NavDropdown.Item ><i className="fas fa-envelope"></i> MarquisGaston23@gmail.com</NavDropdown.Item>
                            <NavDropdown.Item ><i className="fas fa-phone-square-alt"></i> 567-343-3654</NavDropdown.Item>
                            <NavDropdown.Item href="https://www.linkedin.com/in/marquisgaston"><i class="fab fa-linkedin"></i> Linkedin</NavDropdown.Item>
                       <NavDropdown.Divider />
                       {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                       </NavDropdown>
                  </Nav>
             )
        } else 
        {
             return (
                  <Nav className="mr-auto">
                       {/* <Nav.Link href="#home">Home</Nav.Link> */}
                       <Nav.Link href="#link">Profile</Nav.Link>
                       <NavDropdown title="Contact" id="basic-nav-dropdown">
                            <NavDropdown.Item ><i className="fas fa-envelope"></i> MarquisGaston23@gmail.com</NavDropdown.Item>
                            <NavDropdown.Item ><i className="fas fa-phone-square-alt"></i> 5673433654</NavDropdown.Item>
                            <NavDropdown.Item href="https://www.linkedin.com/in/marquisgaston"><i className="fab fa-linkedin"></i> Linkedin</NavDropdown.Item>
                       <NavDropdown.Divider />
                       {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                       </NavDropdown>
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