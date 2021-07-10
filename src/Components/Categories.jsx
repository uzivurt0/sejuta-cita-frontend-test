import React, { Component } from 'react';
import './Categories.css';
import Body from './Body';

class Categories extends Component{
  state = {
    category : []
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
            return <a key={item.id}>{item.name}</a>
          })
        }
      </div>
    )
  }
}

export default Categories;