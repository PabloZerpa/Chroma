import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from "./components/pages/Home";
import Explore from "./components/pages/Explore";
import Blog from "./components/pages/Blog";
import Forums from "./components/pages/Forums";
import About from "./components/pages/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/explore" exact component={Explore}/>
          <Route path="/blog" exact component={Blog}/>
          <Route path="/forums" exact component={Forums}/>
          <Route path="/about" exact component={About}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
