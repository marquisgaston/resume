import React, { Component } from 'react';

class ToledoMap extends Component {
    state = {  }
    render() { 
        return ( 
            <iframe title="toledo-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95390.63741784892!2d-83.6442956712943!3d41.65666199959532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b872dfc1e4e79%3A0x7c3cc89f453ac345!2sToledo%2C%20OH!5e0!3m2!1sen!2sus!4v1594105975642!5m2!1sen!2sus" width="98%" height="450" frameBorder="0" allowFullScreen="yes" aria-hidden="false" tabIndex="0"></iframe>
         );
    }
}
 
export default ToledoMap;