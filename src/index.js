import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './page/App';
import RoutePage from './page/RoutePage'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RoutePage />, document.getElementById('root'));
registerServiceWorker();
