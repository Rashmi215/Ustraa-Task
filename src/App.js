import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import ProductList from './components/ProductList';
import Default from './components/Default';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
       <BrowserRouter>
        <div className="main-app">
         <Navbar />
         <Categories />
           <Switch>
             <Route exact path='/' component={Default} />
             <Route exact path='/:id' component={(props) =><ProductList {...props} key={props.match.params.id}/>} />
           </Switch>
         </div>
       </BrowserRouter>

    );
  }
}

export default App;
