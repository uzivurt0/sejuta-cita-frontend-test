import React,  { Component } from "react";
import './Footer.css';

class Footer extends Component{
  constructor(props){
    super(props);
  }
  
  render(){
    return(
      <div className="Footer">
        <div className="footerLeftSection">
          <div className="footerLogo">
            <img src="LogoLineToday.png"/>
          </div>
          <p>&copy; Line Today</p>
        </div>
        <div className="footerRightSection">
          <a href="https://www.instagram.com/linetoday/">Instagram</a>
          <a href="https://www.youtube.com/channel/UCpMSd60UCwlrTCvB4U42MLA">Youtube</a>
          <a href="https://twitter.com/linetoday">Twitter</a>
          <a href="https://www.facebook.com/linetoday">Facebook</a>
        </div>
      </div>
    )
  }
}

export default Footer;