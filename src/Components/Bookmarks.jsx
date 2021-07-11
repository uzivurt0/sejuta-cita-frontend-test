import React, { Component } from 'react';
import './Body.css'

class Bookmarks extends Component{
  constructor(props){
    super(props);
    this.state = {bookmarks:[]}
  }

  componentDidMount(){
    this.setState({bookmarks:JSON.parse(localStorage.getItem('bookmarks'))})
  }

  render(){
    return(
    <div className="container">
      <div className="contentBody">
        <div className="cardList">
          {this.state.bookmarks.map((item) => 
            {return(
              <div className="card">
                <div className="card-thumbnail">
                  <img src="./logolinetodayfavicon.jpg"/>
                </div>
                <div className="card-content">
                  <h3>{item.name}</h3>
                  <p>{item.source}</p>
                </div>
              </div>
              )
            })
          }
        </div>
      </div>
    </div>
    )
  }
}

export default Bookmarks