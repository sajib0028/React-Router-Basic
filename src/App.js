import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import ErrorPage from './ErrorPage';
import Menu from './Menu';

function App() {
  return (
    <div className="App">
<Menu/>
<Switch>
  <Route exact path='/' component={() =>
    <About name="About"/>
  }/>
  <Route path='/service' render={() =>
    <Service name="Service"/>
  }/>
  <Route path='/contact' component={Contact} />
  <Route component={ErrorPage}/>
</Switch>

      
    </div>
  );
}

export default App;
