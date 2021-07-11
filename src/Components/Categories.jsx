import React, { Component } from 'react';
import './Categories.css';
import {Link} from 'react-router-dom';

class Categories extends Component{

  constructor(props){
    super(props);
    this.state={ category:[], };
  }

  async componentDidMount(){
    try{
      const res = await fetch('API.json');
      const data = await res.json();
      const category = data.result.categoryList;
      this.setState({category : category});
      console.log(category);
    } catch(err){
      console.log(err);
    }
  }
  
  render(){
      
    return(
      <div className="Categories">
        {
          this.state.category.map((item)=>{
            return <Link to={`/${item.name}`} className ="nav-item" key={item.id}>{item.name}</Link>
          })
        }
      </div>
    )
  }
}

export default Categories;