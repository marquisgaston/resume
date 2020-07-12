import React, { Component } from 'react';
import axios from 'axios';

class FeaturedTab extends Component {
    state = { 
        featuredItems: []
     }

    componentDidMount(){
        axios
            .get("https://api.dailysmarty.com/posts")
                .then(res => {
                    this.setState({
                        featuredItems: res.data.posts
                    })
                })
    }
    render() { 
        return ( 
            <div className="featured-tab">
                {this.state.featuredItems.map(item => {
                    return (
                        <a key={item.id} className="featured-item" href={item.url_for_post}>
                            <div className="featured-item__title">
                                {item.title}
                            </div>
                            <div className="featured-item__content">
                                {item.content.slice(0,299)}{item.content.length > 300 ? "..." : null}
                            </div>
                            <div className="featured-item__details">
                                <div className="featured-item__data">
                                    {item.created_at}
                                </div>
                                <div className="featured-item__topics">

                                </div>
                            </div>
                        </a>
                    )
                })}                {console.log("ft", this.state.featuredItems)}
            </div>
         );
    }
}
 
export default FeaturedTab;