import './App.css';
import { Component } from 'react';
import Header from './Components/Header';
import Body from'./Components/Body';
import Footer from './Components/Footer';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
        <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={Body}/>
            <Route path="/:category" exact component={Body}/>
          </Switch>
          <Footer />
        </BrowserRouter>
        </div>
    );
  }
}

export default App;
