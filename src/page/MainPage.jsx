import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import { Button,NavBar, Icon ,TabBar} from 'antd-mobile';
export default class MainPage extends Component {
    render() {
        return (
            <div style={{  backgroundColor: 'white',width:'100%',height:'100%',paddingTop:45}}>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">这里是我的页面</h1>
                </header>

                <p className="App-intro">Hello World!</p>
                <div style={{width:'100%',height:1000,backgroundColor: 'green'}}></div>
                <p className="App-intro">end</p>
            </div>
        );
    }
}

// const MainPage=()=>{
//     return( <div style={{  backgroundColor: 'white',width:'100%',height:'100%',paddingTop:45}}>
//                 <header className="App-header">
//                     <img src={logo} className="App-logo" alt="logo" />
//                     <h1 className="App-title">这里是我的页面</h1>
//                 </header>
//
//                 <p className="App-intro">Hello World!</p>
//                 <p className="App-intro">end</p>
//     </div>
//     );
// };
// export default MainPage;
