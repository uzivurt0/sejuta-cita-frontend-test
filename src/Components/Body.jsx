import React, { Component } from "react";
import './Body.css';


class Body extends Component{
  state = {
    category : []
  }

  async componentDidMount(){
    try{
      const res = await fetch('API.json');
      const data = await res.json();
      const category = data.result.categories[0].templates[1].sections[0].articles;
      this.setState({category : category});
      console.log(category);
    } catch(err){
      console.log(err);
    }
  }

  render(){
    return(
      <div>
        <div className="content-body">
          <div className="cardList">
          {
            this.state.category.splice(0,4).map((item)=>{
              return(
              <div className="card">
                <div className="card-thumbnail">
                  <img src="./Society.jpg"/>
                </div>
                <div className="card-content">
                  <a key={item.id} href={item.url.url} target="_blank">{item.title}</a>
                  <p>{item.publisher}</p>
                </div>
              </div>
              )
            })
          }
          </div>
        </div>
        <div className ="content-body">
          <div className="cardSquareList">
            {/* Start Of Square Container */}
            {
            this.state.category.map((item)=>{
            return(
              <a key={item.id} href={item.url.url} target="_blank" className="card-squareContainer">
                <div className="card-square">
                  <div className="card-squareContent">
                    <img src="./Society.jpg"/>
                    <h3 key={item.id}>{item.title}</h3>
                    <p>{item.publisher}</p>
                    <a href="#">Bookmark</a>
                  </div>
                </div>
              </a>
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