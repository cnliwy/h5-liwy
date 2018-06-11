import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router'
import logo from './logo.svg';
import './App.css';
import MainPage from 'page/MainPage';

export default class App extends Component {
    constructor(){
        super();
        this.state={
            redirect:false,
        }
    }
    handleOnClick = () => {
        // some action...
        // then redirect
        this.setState({redirect: true});
    };

    render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <p className="App-intro">nice to meet you!</p>
          <p className="App-intro">nice to meet you,too!</p>
          <button onClick={this.handleOnClick} type="button">前往主页</button>
          <Link to="/page/MainPage">下一页</Link>
      </div>
    );
  }
}

