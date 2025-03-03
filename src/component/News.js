import PropTypes from 'prop-types';
import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import NewsItem from './NewsItem';
import Spinner from './spinner';

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 5

  };
  static propTypes = {
    country: PropTypes.string,
  }

  constructor() {
    super();

    this.state = {
      articles: [],
      loading: false,
      page: 1,
      length: 1,

    }



  }
  async UpdateNews() {
    this.props.setProgress(0);
    let url =` https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    this.props.setProgress(30);
    let data = await fetch(url)
    this.props.setProgress(70);
    let parsedData = await data.json();

    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })
 
  }
  //async are use to the data
  async componentDidMount() {
    console.log("cdm");
    // let url = https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=107632b20b124b7c81523cabd47635ee&pageSize=${this.props.pageSize};
    // this.setState({loading: true});
    // let data = await fetch(url)
    // let parsedData = await data.json();
    // console.log(parsedData);
    // this.setState({ articles: parsedData.articles ,
    //   totalResults:parsedData.totalResults,
    //   loading:false
    // })
    this.UpdateNews();
    this.props.setProgress(100);
  }

  handleNextClick = async () => {
    // console.log("Next");
    // if(this.state.page+1 >Math.ceil(this.state.totalResults/this.props.pageSize)){

    // }
    // else{
    // let url = https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=107632b20b124b7c81523cabd47635ee&page=${ this.state.page + 1}&pageSize=${this.props.pageSize};
    // this.setState({loading:true})
    // let data = await fetch(url)
    // let parsedData = await data.json();
    // console.log(parsedData);

    // this.setState({
    //   page: this.state.page + 1,
    //   articles: parsedData.articles ,
    //   loading:false

    // })
    // }
    this.setState({ page: this.state.page + 1 })
    this.UpdateNews()

  }
  handlePreviousClick = async () => {

    //   let url = https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=107632b20b124b7c81523cabd47635ee&page=${ this.state.page - 1}&pageSize=${this.props.pageSize};
    // this.setState({loading:true})
    //   let data = await fetch(url)
    // let parsedData = await data.json();
    // console.log(parsedData);

    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedData.articles ,
    //   loading:false
    // })
    this.setState({ page: this.state.page - 1 })
    this.UpdateNews()

  };
  fetchMoreData = async () => {
    this.props.setProgress(0);
    this.setState({ page: this.state.page + 1 })
    let url =` https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    this.props.setProgress(20);
    let data = await fetch(url)
    let parsedData = await data.json();
    this.props.setProgress(50);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false
  
    }
   )
   this.props.setProgress(100);
  };

  render() {
    return (
      <div className='container my-3 '>
        <heading>
          <h2 className='text-center' style={{ margin: "30px" }} >NewsPlace - Top Headline of  {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)}</h2></heading>
        {/* {this.state.loading &&  <Spinner/>} */}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          
          loader={<Spinner />}

        >
          

          <div className='row' >
            {this.state.articles.map((element) => {
              return <div className='col-md-4' key={element.url}>
                <NewsItem title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
              </div> 
            })
         
            }
          </div>
          
        </InfiniteScroll>
      </div>



    )
  }
}
export default News        