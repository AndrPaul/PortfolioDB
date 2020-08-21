import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './sass/App.scss';
import Dashboard from "./components/dashboard/Dashboard";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Navbar from "./components/navbar/Navbar";
import Register from "./components/register/Register";
import Create from "./components/create/Create";
import Portfolio from "./components/portfolio/Portfolio";

const App = () => {
  return (
    <Router>
    <div className="App">
     
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/create" component={Create} />
        </Switch>

      <Footer />
     
    </div>
    </Router>
  );
}

export default App;
