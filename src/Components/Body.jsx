import React, { Component } from "react";
import './Body.css';
import mapping from "../Util/mapping";

class Body extends Component{

  constructor(props){
    super(props);
    this.state={ category:[], };
  }

  addToBookmark(newData){
    const currentData = JSON.parse(localStorage.getItem('bookmarks') || localStorage.setItem('bookmarks', JSON.stringify([])));
    currentData.push(newData);
    localStorage.setItem('bookmarks', JSON.stringify(currentData));
  }

  async componentDidMount(){
    console.log(this.props);
    try{
      const categoryType = mapping(this.props.match.params.category) || 0;
      const res = await fetch('API.json');
      const data = await res.json();
      const category = data.result.categories[categoryType].templates[1].sections[0].articles;
      this.setState({category : category});
      console.log(category);
      console.log(data);
    } catch(err){
      console.log(err);
    }
  }

  async componentDidUpdate(){
    try{
      const categoryType = mapping(this.props.match.params.category) || 0;
      const res = await fetch('API.json');
      const data = await res.json();
      const category = data.result.categories[categoryType].templates[1].sections[0].articles;
      this.setState({category : category});
      console.log(category);
      console.log(data);
    } catch(err){
      console.log(err);
    }
  }

  render(){
    console.log(this.props);
    return(
      <div className="container">
        <div className="contentBody">
          <div className="cardList">
          {
            this.state.category.splice(0,4).map((item)=>{
              return(
              <div className="card">
                <div className="cardThumbnail">
                  <img src="./logolinetodayfavicon.jpg"/>
                </div>
                <div className="cardContent">
                  <a key={item.id} href={item.url.url} target="_blank">{item.title}</a>
                  <p>{item.publisher}</p>
                  <button class="bookmarkBtn" onClick={()=>this.addToBookmark({name:item.title, source:item.publisher})}>Bookmark</button>
                </div>
              </div>
              )
            })
          }
          </div>
        </div>
        <div className ="contentBody">
          <div className="cardSquareList">
            {/* Start Of Square Container */}
            {
            this.state.category.map((item)=>{
            return(
              <div className="cardSquareContainer">
                <div className="cardSquare">
                  <div className="cardSquareContent">
                    <img src="./Society.jpg"/>
                    <a class="title" key={item.id} href={item.url.url} target="_blank" key={item.id}>{item.title}</a>
                    <p>{item.publisher}</p>
                    <button class="bookmarkBtn" onClick={()=>this.addToBookmark({name:item.title, source:item.publisher})}>Bookmark</button>
                  </div>
                </div>
              </div>
            )
            })
           }
            {/* End Of Square Container */}
          </div>
        </div>
      </div>

    );
  }
}

export default Body;