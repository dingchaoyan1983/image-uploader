import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import apiMiddleware from './redux/middlewares/api';
import layoutReducer from './redux/reducers/layout';
import Canvas from './container/Canvas';
import 'css/scss/index.scss';

const store = createStore(layoutReducer, applyMiddleware(apiMiddleware));

ReactDOM.render(
    <Provider store={store}>
        <Canvas />
    </Provider>, document.getElementById('react-root'))
