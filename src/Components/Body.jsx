import React, { Component } from "react";
import './Body.css';


class Body extends Component{
  render(){
    return(
      <div className="content-body">
        <div className="card">
          <h3>Title Dummy</h3>
          <p>Desc Dummy</p>
        </div>
        <div className="card">
          <h3>Title Dummy</h3>
          <p>Desc Dummy</p>
        </div>
        <div className="card">
          <h3>Title Dummy</h3>
          <p>Desc Dummy</p>
        </div>
      </div>
    );
  }
}

export default Body;