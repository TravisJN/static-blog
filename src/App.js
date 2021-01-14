import React from 'react';
import {
  // BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Root, Routes, addPrefetchExcludes } from 'react-static';
import './App.css';
import Navbar from './components/Navbar';
import Works from './components/Works';
import About from './components/About';
import Apps from './components/Apps';
import Sites from './components/Sites';
import Resume from './components/Resume';

addPrefetchExcludes([
  'works',
  'apps',
  'sites',
  'resume',
  'about',
]);

function App() {
  return (
    <Root>
      <div className="App">
        <div className="header-container">
          <div className="site-title-text">Travis Neufeld</div>
          <Navbar />
        </div>

        <div className="main-container">
          <Switch>
            <Route exact path="/">
              <Redirect to={{ pathname: '/about' }} />
            </Route>
            <Route path="/works">
              <Works />
            </Route>
            <Route path="/apps">
              <Apps />
            </Route>
            <Route path="/sites">
              <Sites />
            </Route>
            <Route path="/resume">
              <Resume />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route render={() => <Routes />} />
          </Switch>
        </div>
      </div>
    </Root>
  );
}

export default App;
