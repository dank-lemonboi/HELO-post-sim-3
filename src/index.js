import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import './reset.css';
import App from './App';
import unregister from './registerServiceWorker';
import { Provider } from 'react-redux'

import Store from './store'

ReactDOM.render(
    <Provider store={Store}>
        <App />
    </Provider>
    , document.getElementById('root'));
unregister();
