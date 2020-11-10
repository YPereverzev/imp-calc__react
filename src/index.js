import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { BrowserRouter} from 'react-router-dom'
// import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import store from './redux/store';
import { Provider } from 'react-redux';

window.store = store;

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
, document.getElementById('root'));