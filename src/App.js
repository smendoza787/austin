import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Main from './components/Main';
import Home from './components/Main/Home';
import Album from './components/Main/Album';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <NavBar />
            <Main>
              <Switch>
                  <Route path="/home" component={Home} />
                  <Route path="/album/:albumId" component={Album} />
              </Switch>
            </Main>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
