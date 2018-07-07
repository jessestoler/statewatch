import React, { Component } from 'react';
import Sidebar from "./components/Sidebar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Colorado</h1>
        </header>
        <Sidebar />
      </div>
    );
  }
}

export default App;
