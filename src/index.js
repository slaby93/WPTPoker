import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/index';
import registerServiceWorker from './registerServiceWorker';
import './cssreset.css'
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
