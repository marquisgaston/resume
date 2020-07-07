import React, { Component } from 'react';
import MaterialTabs from './materailTabs';

class HomeTabs extends Component {
    state = {  }
    render() { 
        return ( 
           <div className="homeTabs-wrapper"> 
               <MaterialTabs/>
           </div>
         );
    }
}
 
export default HomeTabs;