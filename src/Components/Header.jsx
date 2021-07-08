import React, {Component} from 'react';
import Categories from './Categories';
import './Header.css';


class Header extends Component{
  listener = null;
  state={
    scrolled:false
  }
  componentDidMount(){
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount(){
    window.removeEventListener('scroll');
  }
  handleScroll=()=>{
    if(window.pageYOffset > 10) {
      if(!this.state.scrolled){
        this.setState({ scrolled : true });
      }
    }else{
      if(this.state.scrolled){
        this.setState({ scrolled:false});
      }
    }
  }
  

  render(){
    return(
      <div className={`Header ${this.state.scrolled && 'scrolled'}`}>
        <div className="Logo"> 
          <img src="/LogoLineToday.png" alt="Logo" />
        </div>
        <div className="Nav">
          <Categories />
        </div>
      </div>
    );
  }
}

export default Header;