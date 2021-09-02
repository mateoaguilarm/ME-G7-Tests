import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Footer from './components/footer/Footer';
import NavbarMain from "./components/NavbarMain";
import Home from './views/Home'
import Services from './views/Services'

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
