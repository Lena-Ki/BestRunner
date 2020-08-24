import React from 'react';
import { render } from 'react-dom';
import { compose, createStore } from 'redux'
import { rootReducer } from './redux/rootReducer';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

const store = createStore(rootReducer, compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

render(<App store={store} />, document.getElementById('root'))

serviceWorker.unregister();
