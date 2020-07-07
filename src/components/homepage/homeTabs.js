import React, { Component } from 'react';
import MaterialTabs from './materailTabs';

class HomeTabs extends Component {
    state = {  }
    render() { 
        return ( 
           <div className="hometabs-wrapper"> 
               <MaterialTabs/>
           </div>
         );
    }
}
 
export default HomeTabs;