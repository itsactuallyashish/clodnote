import React, { useState,useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=> {

  const [article, setarticle] = useState([])
const [loading, setloading] = useState(true)
const [page, setpage] = useState(1)
const [totalresults, settotalresults] = useState(0)

    // constructor() {
    //     super();
    //     console.log("this is a constructor from news component");
    //     state = {
    //         article: [],
    //         loading: true,
    //         page: 1,
    //         totalresults:0
    //     }
    // }

    useEffect( () => {
       
    updatenews();
setloading(false);
    }, [])
    
    // async componentDidMount() {
    //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=1787f0e685f84bd894b970500333e077&pageSize=${props.size}`;
    //     setState({ loading: true })
    //     let data = await fetch(url);
    //     let parsed = await data.json();
    //     console.log(parsed);
    //     setState({ article: parsed.articles, totalresults: parsed.totalresults, loading: false })
    // }

    // next = async () => {
    //     if (state.page +1> Math.ceil(state.totalresults / props.size)) { }
    //     else {
    //         let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=1787f0e685f84bd894b970500333e077&page=${state.page + 1}&pageSize=${props.size}`;
    //         setState({ loading: true })
    //         let data = await fetch(url);
    //         let parsed = await data.json();
    //         console.log(parsed);
    //         setState({ article: parsed.articles, page: state.page + 1, loading: false })
    //     }
    // }
    // prev = async () => {
    //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=1787f0e685f84bd894b970500333e077&page=${state.page - 1}&pageSize=${props.size}`;
    //     setState({ loading: true })
    //     let data = await fetch(url);
    //     let parsed = await data.json();
    //     setState({ loading: false })
    //     setState({ article: parsed.articles, page: state.page - 1 })

    // }
    const  updatenews= async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=1787f0e685f84bd894b970500333e077&page=${page}&pageSize=${props.size}`;
       
        let data = await fetch(url);
        let parsed = await data.json();
        console.log(parsed);
        setarticle(parsed.articles)
        settotalresults(parsed.totalresults)
          
    }
   const  fetchMoreData = async () => {
       let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=1787f0e685f84bd894b970500333e077&page=${page+1}&pageSize=${props.size}`;
       
       setpage(page+1);
       let data = await fetch(url);
       let parsed = await data.json();
       console.log(parsed);
       setarticle(article.concat(parsed.articles))
       settotalresults(parsed.totalresults)
        };
   
        return (<>
                <div className='container'>
            
               <h1 className='text-center'>Breaking News -Top Headlines</h1>
                {loading && <Spinner />}
               
                <InfiniteScroll
          dataLength={article.length}
          next={fetchMoreData}
          hasMore={article.length!==totalresults}
          loader={<Spinner/>}>
                <div className='row m-3'>
                    { article.map((element) => {
                        return (<div className='col-md-4' key={element.url}>
                        <div className='m-4 '><NewsItem url={element.urlToImage} Title={element.title} desc={element.description} author={element.author} date={element.publishedAt} nurl={element.url} source={element.source.name} /></div>
                        </div>)
                    })}
                    </div>
                </InfiniteScroll>
                </div>
           
           
        </>


        )
    }

News.defaultProps = {
    country: 'in',
    size: 5,
    category: 'general'
}
News.propTypes = {
    size: PropTypes.number,
    country: PropTypes.string
}
export default News