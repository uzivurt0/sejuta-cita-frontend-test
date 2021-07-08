import React, { Component } from 'react';
import './Categories.css';

class Categories extends Component{
  state = {
    category : []
  }

  async componentDidMount(){
    try{
      const res = await fetch('API.json');
      const data = await res.json();
      const category = data.result.categories;
      this.setState({category : category.splice(0,3)});
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
        
        <a><button className="More-Categories">More</button></a>
      </div>
    )
  }
}

export default Categories;