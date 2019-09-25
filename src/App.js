import React, {Component} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import LoginPage from "./components/Login/LoginPage";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NewBookMediaPage from "./components/AddNewPage/NewBookMediaPage";
import NewNotePage from "./components/AddNewPage/NewNotePage";
import ListPage from "./components/ListPage/ListPage";
import NoteListPage from "./components/ListPage/NoteListPage";

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
                        <Route exact path={'/login'} component={LoginPage}/>
                        <Route exact path={'/new-book'} component={NewBookMediaPage}/>
                        <Route exact path={'/new-media'} component={NewBookMediaPage}/>
                        {/*<Route path={"/new-book"} render={(props) => <NewBookMediaPage {...props} mediaType={book}/>}/>
                        <Route path={"/new-media"} render={(props) => <NewBookMediaPage {...props} mediaType={media}/>}/>*/}
                        <Route exact path={"/new-note"} component={NewNotePage}/>
                        <Route exact path={'/books'} component={ListPage}/>
                        <Route exact path={'/notes'} component={NoteListPage}/>
                    </Switch>
                </div>
                <Footer/>
            </Router>
        );
    }
}

export default App;
