import React, { Component } from "react";
import "./App.css";
import Menu from "./components/Views/Routes/Menu";
import About from "./components/Views/Routes/About";
import Home from "./components/Views/Routes/Home";
import { Route, Switch,Link } from "react-router-dom";
import Error from "./components/Views/Routes/Error";
import './components/Views/Routes/Contactchild.css';
function App() {
  return (
 
      <div className="App">
        <Menu />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" render={() =><About name="AboutUS" />} />
          <Route path="/contact" component={Contact} />
        
        </Switch>
      </div>
   
  );
}

const Contact = (match,location,history) => {
  return (
    <div className="Homestyle">
      <h2>Welcome to ContactUs Page.</h2>
      <ul>
        <li>
          <Link to="/contact/email">Email</Link>
        </li>
        <li>
          <Link to="/contact/mobile-no">Mobile-no </Link>
        </li>
        <li>
          <Link to="/contact/fax-address">Fax-Address</Link>
        </li>
        <li>
          <Link to="/contact/land-line-no">Land-Line-no</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/contact/email" component={Email} />
        <Route path="/contact/mobile-no" component={Mobile} />
        <Route path="/contact/fax-address" component={Fax} />
        <Route path="/contact/land-line-no" component={LandLine} />
      </Switch>
    </div>
  );
};

const Email = () => {
  return (
    <div className="Contactchild">
      <br/>
      <h1 >Email Address is Pronteff@12234.com</h1>
      
    </div>
  );
}
const Mobile = () => {
  return (
    <div className="Contactchild">
      <h1>Mobile Number is 8923567483</h1>
    </div>
  );
};
const Fax = () => {
  return (
    <div className="Contactchild">
      <h1>Fax Address is Pronteff9878</h1>
    </div>
  );
};
const LandLine = () => {
  return (
    <div className="Contactchild">
      <h1>Landline Number is 404-2344556</h1>
    </div>
  );
};


export default App;
