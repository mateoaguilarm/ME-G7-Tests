import React from "react";
import firebaseApp from './firebase';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Footer from './components/footer/Footer';
import NavbarMain from "./components/NavbarMain";
import Home from './views/Home'
import Services from './views/Services'

console.log(firebaseApp, 'log from App.js');

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarMain />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/services' component={Services}/>
        </Switch>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
