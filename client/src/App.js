
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Main from "./pages/Main";
import Profile from "./pages/Profile";
import State from "./pages/State";
import Group from "./pages/Group";
import Blogindex from "./pages/Blogindex";
import Blog from "./pages/Blog";




const App = () => (
<Router>
    <div>
     
      <Switch>
      <Route exact path="/blog/:id" component={Blog} />
      <Route exact path="/stateblog/:id" component={Blogindex} />
      <Route exact path="/profile/:id" component={Profile} />
      <Route exact path="/reps/:id" component={Group} />
      
      <Route exact path="/:id" component={State} />
        <Route exact path="/" component={Main} />

       
        
      </Switch>
    </div>
  </Router>
);

export default App;
