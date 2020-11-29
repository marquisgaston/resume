import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

class Profile extends Component {
    state = {  }

    componentDidMount(){
        this.props.setCurrentPage("profile");
    }

    render() { 
        return ( 
            <div class="profile-wrapper page">
                <div class="profile">
                    <div className="profile-img">
                        <img src="https://source.unsplash.com/random/500x800/?christmas" alt="profile-pic"/>
                    </div>
                    <div>
                        <h2>
                            Marquis J Gaston
                        </h2>
                        <h3 style={{color:"darkgray"}}>
                            Full Stack Developer
                        </h3>
                        <p style={{marginTop:"2em", padding:"0 2em", fontSize: "auto"}}>
                            Skilled with Back/Front End, in React, Python, SQL Databases and others, <br/>
                            Interested in building the next wave in developing technology, looking to become a very adaptable and focused member of a team of diversified minds in an engaging environment. Looking to also see where I can apply or challenge my coding or E.M.T. and medical skills as I maintain a focus on being a multifaceted coder first but keeping all my skills sharp and ever-evolving. 
                        </p>
                        <div>
                            Upcoming Projects: <br/>
                            <div>
                                Bug Tracker
                            </div>
                            <div>
                                Python Gui App
                            </div>
                            <div>
                                C# Project
                            </div>
                        </div>
                    </div>
                </div>   
            </div>
         );
    }
}
function mapStateToProps(state){
    return state
}

export default Profile = connect(mapStateToProps, actions)(Profile);