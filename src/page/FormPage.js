import React, { Component } from 'react';
import './css/FormPage.css'
import { Button,NavBar, Icon,Flex, WhiteSpace, InputItem, Toast,DatePicker,List } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import { createForm } from 'rc-form';

const PlaceHolder = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder`} {...restProps}>Block</div>
);
const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
const utcOffset = new Date(now.getTime() - (now.getTimezoneOffset() * 60000));

export default class FormPage extends Component {

    constructor(props){
        super(props);
        let match = this.props.match;
        let words = '';
        if (match != null && match.params != null) {
            let params = match.params;
            words = params.words;
        }
        this.state={
            words:words,
            dpValue: now,
            date:now,
            idt: utcOffset.toISOString().slice(0, 10),
        }

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
                        表单
                    </NavBar>
                </div>
                {/*内容*/}
                <div style={{width:'100%',height:'100%',marginBottom:0,marginTop:45}}>
                    <div className="flex-container">
                        <div className="sub-title">Basic</div>
                        <Flex>
                            <Flex.Item><PlaceHolder /></Flex.Item>
                            <Flex.Item><PlaceHolder /></Flex.Item>
                        </Flex>
                        <WhiteSpace size="lg" />
                        <Flex>
                            <Flex.Item><PlaceHolder /></Flex.Item>
                            <Flex.Item><PlaceHolder /></Flex.Item>
                            <Flex.Item><PlaceHolder /></Flex.Item>
                        </Flex>
                        <WhiteSpace size="lg" />
                    </div>

                    <div className="sub-title">Wrap</div>
                    <Flex wrap="wrap">
                        <PlaceHolder className="inline" />
                        <PlaceHolder className="inline" />
                        <PlaceHolder className="inline" />
                    </Flex>
                    <WhiteSpace size="lg" />

                    <div className="sub-title">Align</div>
                    <Flex justify="center">
                        <PlaceHolder className="inline" />
                        <PlaceHolder className="inline" />
                        <PlaceHolder className="inline" />
                    </Flex>
                    <WhiteSpace />
                    <Flex justify="end">
                        <PlaceHolder className="inline" />
                        <PlaceHolder className="inline" />
                        <PlaceHolder className="inline" />
                    </Flex>
                    <WhiteSpace />

                    <InputItem
                        type='phone'
                        placeholder="input your phone"
                        onErrorClick={this.onErrorClick}
                        onChange={this.onChange}
                        value={this.state.value}
                    >账号</InputItem>
                    <InputItem
                        placeholder="输入密码"
                        onErrorClick={this.onErrorClick}
                        onChange={this.onChange}
                        value={this.state.value}
                    >密码</InputItem>
                </div>

                <DatePicker
                    mode="date"
                    title="Select Date"
                    extra="Optional"
                    value={this.state.date}
                    onChange={date => this.setState({ date })}
                >
                    <List.Item arrow="horizontal">Date</List.Item>

                </DatePicker>

                <Flex justify="between">
                    <PlaceHolder className="inline" />
                    <PlaceHolder className="inline" />
                    <PlaceHolder className="inline" />
                </Flex>

            </div>
        );
    }
}


