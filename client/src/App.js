
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Main from "./pages/Main";
import Profile from "./pages/Profile";
import State from "./pages/State";
import Senators from "./pages/Senators";
import Reps from "./pages/Reps";
import Blogindex from "./pages/Blogindex";
import Blog from "./pages/Blog";
import Submit from "./pages/Submit";
import Sortedblogindex from "./pages/Sortedblogindex";

import Bill from "./pages/Bill";



const App = () => (
<Router>
    <div>
     
      <Switch>
    
      <Route exact path="/blog/:id" component={Blog} />
      <Route exact path="/bill/:id" component={Bill} />
      <Route exact path="/stateblog/:id" component={Blogindex} />
      <Route exact path="/stateblog/sorted/:id" component={Sortedblogindex} />
      <Route exact path="/profile/:id" component={Profile} />
      <Route exact path="/senators/:id" component={Senators} />
      <Route exact path="/reps/:id" component={Reps} />
      <Route exact path="/submit/:id" component={Submit} />
      <Route exact path="/:id" component={State} />
      
        <Route exact path="/" component={Main} />
       
        

       
        
      </Switch>
    </div>
  </Router>
);

export default App;
