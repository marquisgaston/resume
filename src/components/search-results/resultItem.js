import React, { Component } from 'react';

class ResultItem extends Component {
    state = {  }

    renderItems = (listToRender) => {
        return (
            listToRender.map(item => {
                return (
                    <a key = {item.index} className="result" href={item.url ? item.url : item.localUrl}>
                        <div className="result__image-wrapper">
                            {item.imageUrl ? <img className="result__image" src={item.imageUrl} alt={item.imageUrl}/> : <img className="result__image" src={`https://picsum.photos/1280/720?random=${Math.floor(Math.random()*1000)}`} alt={item.imageUrl}/>}
                        </div>
                        <div>
                            {item.title ? <div className="result__title">{item.title}</div> : null}
                            {item.icon ? <i class={item.icon} className="result__title"></i> : null}
                        </div>
                        {item.subTitle ? <div className="result__subTitle">{item.subTitle}</div> : null}
                    </a>
                )
            })
        )
    }
    render() { 
        return ( 
            this.renderItems(this.props.list)
         );
    }
}
 
export default ResultItem;