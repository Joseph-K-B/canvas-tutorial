import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Canvas from './canvas.js';
import Header from './header.js';

class App extends Component {
  state = {};
  render() {
    return (
       <>
         <Canvas/>
         
       </>
    );
  }
}
export default App;
