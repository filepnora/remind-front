import React, {Component} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

class App extends Component {

  render() {
    return (
        <Router>
          <div className="App">
            <Header/>
          </div>
          <div className="body">
            <Switch>
              <Route exact path={'/'} component={Home}/>
            </Switch>
          </div>
          <Footer/>
        </Router>
    );
  }
}

export default App;
