import React, { Component } from 'react';

class FooterMain extends Component {
    state = {  }
    render() { 
        const list = [
            {
                title: "Skills",
                items: [
                    { title: "Python, Javascript, C#, " },
                    { title: "React, JSX, CSS, SCSS" },
                    { title: "Redux, APIs, SQL Databases" },
                    { title: "Version Control, Git, Github" },
                    { title: "Node, NPM, Yarn" },
                    { title: "Mongo DB, MySQL, Netlify, Heroku" },
                    { title: "Misc/Deeloping Skills: Auth0 setups, Unity Game Engine" },


                ]
            },

            {
                title: "Contact Me",
                items: [
                    {title: "marquisgaston23@gmail.com", url: "marquisgaston23@gmail.com"},
                    {title: "567-343-3654"},
                    
                    {icon: "fab fa-linkedin", iconUrl: "linkedin.com/in/marquisgaston"},
                    {icon: "fab fa-twitter-square", iconUrl: "twitter.com/marquis_gaston"}
                ]
            }
        ]

        const mapList = list.map(item => {
            return (
                <div class="footer-column">
                <div class="footer-column-title">
                    {item.title}
                </div>
                <div class="footer-column-items">
                   {item.items ? item.items.map( item => {
                        return (
                            <div>
                                {item.url ? <a href={`mailto:${item.url}`}>{item.title}</a> : item.title}
                                {item.icon ? <a href={`https://www.${item.iconUrl}`}><i class={`${item.icon}`}></i></a> : null}
                            </div>
                        )
                    }) : null }
                </div>
            </div>
            )
        })

        return ( 
            <div class="main-footer-wrapper" >
                {mapList}
            </div>
         );
    }
}
 
export default FooterMain;