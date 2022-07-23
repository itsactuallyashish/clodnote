// import { getByTitle } from '@testing-library/react'
import React from 'react'

 const NewsItem  =(props)=>{
    
  
    let {Title,url,desc,author,date,nurl,source}=props;
    return (
        <div className="card" style={{width: '18rem'}}>
         
        <img src={url} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className={"card-title"}>{Title} <span className="position-absolute  top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {source}
    <span class="visually-hidden">unread messages</span>
  </span></h5>
       
          <p className="card-text">{desc}</p>
          <p className="card-text"><small class="text-muted">by {author?author:"unknown"} on {new Date(date).toGMTString()}</small></p>
          <a href={nurl} className="btn btn-primary">Read More </a>
        </div>
      </div>
    )
  }

export default NewsItem;