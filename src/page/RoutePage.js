//router
import React, {Component} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'
import MainPage from './MainPage'
import AppPage from './App'
import style from './css/RouteStyle.css'
export default class RoutePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <div>
                    {/*{*/}
                        {/*this.props.isLoading ?*/}
                            {/*<div className={style.loadingContainer}>*/}
                                {/*<img className={style.imgIcon} src='https://www.dpfile.com/app/app-m-module/static/6261145dd7c0f26bc0a26831e5cb358a.gif'/>*/}
                            {/*</div>*/}
                            {/*:null*/}
                    {/*}*/}
                    <Switch>
                        <Switch>
                            <Route exact path='/' component={AppPage}/>
                            <Route path='/main/:words' component={MainPage}/>
                        </Switch>
                    </Switch>

                </div>
            </Router>
        )
    }

}
