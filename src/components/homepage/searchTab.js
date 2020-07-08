import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

import { connect } from 'react-redux';
import * as actions from '../../actions';

class SearchTab extends Component {
    state = {  }
render() { 
    const list = ["Github", "Linkedin", "Bottega", "Netlify", "React", "NodeJS", "Python", "Javascript"]
    var counter = 0;

        return ( 
            <div className="search-tab-wrapper">
                <div className="search-tab">
                    <div className="search-tab__title">
                        Hi, I'm {this.props.resumeData.yourFirstName}, <br/> Type a keyword to see what I can do for you!
                    </div>
                    <Carousel className="skill-carousel" style={{margin: ".5em 0"}}>
                        {list.map(item => {
                            counter++
                            return (
                                <Carousel.Item key={`${counter}`} style={{fontSize: "1.4em"}}>
                                    {item}
                                </Carousel.Item>
                            )
                        })}
                    </Carousel>
                </div>
            </div>
         );
    }
}
function mapStateToProps (state){
    return state
}
 
export default SearchTab = connect(mapStateToProps, actions)(SearchTab);