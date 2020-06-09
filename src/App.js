import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/index'
import Product from './components/Product/index';
import Header from './components/Header/Header';
import './App.css';

function App() {
  const [formPlaceHolder,setFormPlaceHolder] = useState("Get in touch with our team!  We’d love to hear about your project.")

  const handlePlaceHolder = () => {
    setFormPlaceHolder("Hi, I’m interested in joining your beta and trying the bThere tele-operations solutions.  Our project is…")
  }

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} formPlaceHolder={formPlaceHolder} ></Home> } />
          <Route path="/products" render={(props) => <Product {...props} onClick={handlePlaceHolder} ></Product> }/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
