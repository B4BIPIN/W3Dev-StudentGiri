import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './Store/GiriStore';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
ReactDOM.render(<BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
 