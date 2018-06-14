import React, {Component} from 'react';
// 引入React-Router模块
import {BrowserRouter as Router, IndexLink, IndexRoute, Link} from 'react-router-dom'
import {Button, Icon, NavBar, TabBar} from 'antd-mobile';
import './App.css';
import MainPage from './MainPage'
import 'antd-mobile/dist/antd-mobile.css';


const Home = () => (
    <div style={{ backgroundColor: 'white',width:'100%',height:'100%',marginTop:45}}>
        {/*<NavBar*/}
            {/*mode="dark"*/}
            {/*leftContent="<"*/}
            {/*rightContent={[*/}
                {/*<Icon key="0" type="search" style={{ marginRight: '16px' }} />,*/}
                {/*<Icon key="1" type="ellipsis" />,*/}
            {/*]}>*/}
            {/*主页*/}
        {/*</NavBar>*/}
        <h2>Home 1234</h2>
        <Link to="/about">About</Link>
        <br/>
        <Link to="/main">main</Link>
    </div>
);

const About = () => (
    <div style={{ backgroundColor: 'white',width:'100%',height:'100%',marginTop:45}}>
        {/*<NavBar*/}
            {/*mode="dark"*/}
            {/*leftContent="<"*/}
            {/*rightContent={[*/}
                {/*<Icon key="0" type="search" style={{ marginRight: '16px' }} />,*/}
                {/*<Icon key="1" type="ellipsis" />,*/}
            {/*]}>*/}
            {/*关于页面*/}
        {/*</NavBar>*/}
        <div style={{ backgroundColor: 'red', width:'100%', textAlign: 'center' ,position:'fixed'}}>
            <h2>About</h2>
            <Button type="primary">关于我们</Button>
            <Link to="/">Home</Link>
            <div style={{width:'100%',height:1000}}></div>
            <h2>end</h2>
        </div>
    </div>
);

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'redTab',
            hidden: false,
            fullScreen: true,
        };
    }

    renderContent(pageText) {
        return (
            <div style={{ backgroundColor: 'red',width:'100%',height:'100%',marginTop:45}}>
                <h2>start</h2>
                {/*<NavBar*/}
                    {/*mode="dark"*/}
                    {/*leftContent="<"*/}
                    {/*rightContent={[*/}
                        {/*<Icon key="0" type="search" style={{ marginRight: '16px' }} />,*/}
                        {/*<Icon key="1" type="ellipsis" />,*/}
                    {/*]}>*/}
                    {/*NavBar页面*/}
                {/*</NavBar>*/}
                <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
                <a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
                   onClick={(e) => {
                       e.preventDefault();
                       this.setState({
                           hidden: !this.state.hidden,
                       });
                   }}
                >
                    Click to show/hide tab-bar
                </a>
                <a style={{ display: 'block', marginBottom: 500, color: '#108ee9' }}
                   onClick={(e) => {
                       e.preventDefault();
                       this.setState({
                           fullScreen: !this.state.fullScreen,
                       });
                   }}
                >
                    Click to switch fullscreen
                </a>
                {/*<div style={{width:'100%',height:1000}}></div>*/}
                <h2>end</h2>
            </div>
        );
    }


    render() {

    return (
        <Router>
          <div style={{backgroundColor: 'white',width:'100%', height: '100%', textAlign: 'center',position:'absolute'}}>
              <div style={{position:'absolute',width:'100%',height:45,zIndex:999}}>
                  <NavBar
                      mode="dark"
                      leftContent="<"
                      rightContent={[
                          <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                          <Icon key="1" type="ellipsis" />,
                      ]}>
                      标题
                  </NavBar>
              </div>

            {/*<header className="App-header">*/}
                {/*<ul>*/}
                    {/*<li><Link to="/">Home</Link></li>*/}
                    {/*<li><Link to="/about">About</Link></li>*/}
                    {/*<li><Link to="/main">MainPage</Link></li>*/}
                {/*</ul>*/}
            {/*</header>*/}

              {/*<Route exact path="/" component={Home}/>*/}
              {/*<Route exact path="/main" component={MainPage}/>*/}
              {/*<Route path="/about" component={About}/>*/}
              {/*<About/>*/}

             {/*<div style={{marginBottom:0,marginTop:0,width:'100%'}}>*/}
                 <TabBar
                     unselectedTintColor="#949494"
                     tintColor="#33A3F4"
                     barTintColor="white"
                     hidden={this.state.hidden}
                 >
                     <TabBar.Item
                         title="Life"
                         key="Life"
                         icon={<div style={{
                             width: '22px',
                             height: '22px',
                             background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
                         />
                         }
                         selectedIcon={<div style={{
                             width: '22px',
                             height: '22px',
                             background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
                         />
                         }
                         selected={this.state.selectedTab === 'blueTab'}
                         badge={1}
                         onPress={() => {
                             this.setState({
                                 selectedTab: 'blueTab',
                             });
                         }}
                         data-seed="logId"
                     >
                         {this.renderContent('Life')}
                         {/*<Route exact path="/" component={Home}/>*/}
                         {/*<Home/>*/}
                     </TabBar.Item>
                     <TabBar.Item
                         icon={
                             <div style={{
                                 width: '22px',
                                 height: '22px',
                                 background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
                             />
                         }
                         selectedIcon={
                             <div style={{
                                 width: '22px',
                                 height: '22px',
                                 background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
                             />
                         }
                         title="Koubei"
                         key="Koubei"
                         badge={'new'}
                         selected={this.state.selectedTab === 'redTab'}
                         onPress={() => {
                             this.setState({
                                 selectedTab: 'redTab',
                             });
                         }}
                         data-seed="logId1"
                     >
                         {this.renderContent('Koubei')}
                         {/*<MainPage/>*/}
                     </TabBar.Item>
                     <TabBar.Item
                         icon={
                             <div style={{
                                 width: '22px',
                                 height: '22px',
                                 background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
                             />
                         }
                         selectedIcon={
                             <div style={{
                                 width: '22px',
                                 height: '22px',
                                 background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
                             />
                         }
                         title="Friend"
                         key="Friend"
                         dot
                         selected={this.state.selectedTab === 'greenTab'}
                         onPress={() => {
                             this.setState({
                                 selectedTab: 'greenTab',
                             });

                         }}
                     >
                         {this.renderContent('Friend')}
                         {/*<Route path="/about" component={About}/>*/}
                         {/*<About/>*/}
                     </TabBar.Item>
                     <TabBar.Item
                         icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                         selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                         title="My"
                         key="my"
                         selected={this.state.selectedTab === 'yellowTab'}
                         onPress={() => {
                             this.setState({
                                 selectedTab: 'yellowTab',
                             });
                         }}
                     >
                         {/*{this.renderContent('My')}*/}
                         <MainPage/>
                     </TabBar.Item>
                 </TabBar>
             {/*</div>*/}
          </div>
        </Router>
    );
  }
}



