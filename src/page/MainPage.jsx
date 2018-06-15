import React, { Component } from 'react';
import logo from '../logo.svg';
import './css/App.css';
import { Button,NavBar, Icon } from 'antd-mobile';
export default class MainPage extends Component {

    constructor(props){
        super(props);

    }
    render() {
        return (
            <div style={{  backgroundColor: 'white',width:'100%',height:'100%', textAlign: 'center',position:'absolute'}}>

                <div style={{position:'fixed',width:'100%',height:45,zIndex:1000,marginTop:0}}>
                    <NavBar
                        mode="dark"
                        leftContent="返回"
                        onLeftClick={()=>{this.props.history.goBack()}}
                        rightContent={[
                            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                            <Icon key="1" type="ellipsis" />,
                        ]}>
                        设置
                    </NavBar>
                </div>
                {/*内容*/}
                <div style={{width:'100%',height:'100%',marginBottom:0,marginTop:45}}>
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">这里是这只页面</h1>
                    </header>

                    <p className="App-intro">Hello World!{this.props.match.params.words}</p>
                    <div style={{width:'100%',height:1000,backgroundColor: 'green'}}></div>
                    <p className="App-intro">end</p>
                </div>

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
