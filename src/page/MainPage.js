import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class MainPage extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">这里是主页</h1>
                </header>

                <p className="App-intro">Hello World!</p>
            </div>
        );
    }
}
