
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Main from "./pages/Main";
import Profile from "./pages/Profile";
import State from "./pages/State";
import Group from "./pages/Group";
import Blogindex from "./pages/Blogindex";
import Blog from "./pages/Blog";
import Submit from "./pages/Submit";
import Sortedblogindex from "./pages/Sortedblogindex";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Bill from "./pages/Bill";



const App = () => (
<Router>
    <div>
     
      <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/blog/:id" component={Blog} />
      <Route exact path="/bill/:id" component={Bill} />
      <Route exact path="/stateblog/:id" component={Blogindex} />
      <Route exact path="/stateblog/sorted/:id" component={Sortedblogindex} />
      <Route exact path="/profile/:id" component={Profile} />
      <Route exact path="/reps/:id" component={Group} />
      <Route exact path="/submit/:id" component={Submit} />
      <Route exact path="/:id" component={State} />
      
        <Route exact path="/" component={Main} />
       
        

       
        
      </Switch>
    </div>
  </Router>
);

export default App;
