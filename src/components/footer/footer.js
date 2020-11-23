import React, { Component } from 'react';
import ToledoMap from './toledoMap';
import FooterMain from './footerMain';

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="footer" style={{paddingTop: "2em"}}>
                <div style={{padding: ".7em 0", backgroundColor: "black", display: "flex", justifyContent: "center", borderTop: "5px solid #3f51b5"}}>
                    I am based out of Northwest Ohio
                </div>
                <div>
                    <ToledoMap/>
                    <FooterMain/>
                </div>
            </div>
         );
    }
}
 
export default Footer;