import React,  { Component } from "react";
import './Footer.css';

class Footer extends Component{
  constructor(props){
    super(props);
  }
  
  render(){
    return(
      <div className="Footer">
        <p>&copy; Line Today</p>
      </div>
    )
  }
}

export default Footer;