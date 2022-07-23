
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
   c=5;
  render() {
    return (
      <div ><Navbar/>
     

      <Routes>
        <Route exact    path="/general" element={<News key="general " size={this.c} country="in" category="general"/>} />
        <Route exact   path="/business" element={<News  key="busines" size={this.c} country="in" category="business"/>} />
        <Route exact  path="/entertainment" element={<News  key="entertament" size={this.c} country="in" category="entertainment"/>} />
        <Route exact   path="/health" element={<News key="health" size={this.c} country="in" category="health"/>} />
        <Route exact  path="/sports" element={<News  key="sports" size={this.c} country="in" category="sports"/>} />
        <Route exact   path="/technology" element={<News  key="technology" size={this.c} country="in" category="technology"/>} />
        <Route exact  path="/science" element={<News  key="science" size={this.c} country="in" category="science"/>} />
</Routes>
      </div>
    )
  }
}

