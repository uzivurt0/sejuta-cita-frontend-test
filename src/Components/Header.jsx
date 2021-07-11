import React, {Component} from 'react';
import Categories from './Categories';
import './Header.css';
import { Link } from 'react-router-dom';


class Header extends Component{
  listener = null;

  constructor (props){
    super(props);
    this.state={scrolled:false };
  }

  componentDidMount(){
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount(){
    window.removeEventListener('scroll');
  }
  handleScroll=()=>{
    if(window.pageYOffset > 44) {
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
        <div className="upperSectionNavbar"> 
          <img src="/LogoLineToday.png" alt="Logo" />
          <Link to ="/bookmarks">Bookmark</Link>
        </div>
        <div className="Nav">
         <Categories />
        </div>
      </div>
    );
  }
}

export default Header;