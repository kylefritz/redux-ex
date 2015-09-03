require("babel/polyfill");

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import todoApp from './reducers';

let store = createStore(todoApp);

let rootElement = document.getElementById('root');
React.render(
  // The child must be wrapped in a function
  // to work around an issue in React 0.13.
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  rootElement
);

import {addTodo, truncateAutoTodos} from './actions';
let i = 0;
setInterval(() => {
  i += 1;
  if(i%10==0)
  {
    store.dispatch(truncateAutoTodos())
  }
  else
  {
    store.dispatch(addTodo(`Auto todo ${i}`))
  }
}, 1000)
