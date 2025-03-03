import React, { Component } from 'react';

export class NewsItem extends Component {
    render() {
        let {title ,description,imageUrl ,newsUrl,author,date,source} = this.props;
        return (
            <div className='container'>
            <div className='my-3'> 
                <div className="card"  style={{width: "18rem"}}>
                    <img src={!imageUrl?"https://i.insider.com/67b1efa46630eb10385ccaa7?width=1200&format=jpeg":imageUrl} className="card-img-top" alt="..." />
                    <div style={{display:'flex', justifyContent:'flex-end',position:'absolute', right:'0'}}>
                    <span className=" badge rounded-pill bg-danger" >{source}</span>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-body-secondary">By {!author?"UnKnown":author} on {new Date(date).toGMTString()}</small></p>
                        <a  href={newsUrl}    className="btn btn-sm btn-dark">Read more</a>

                    </div>
                </div>
            </div> </div>
        )
    }
}

export default NewsItem
