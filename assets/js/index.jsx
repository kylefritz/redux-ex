require("babel/polyfill");

import React from 'react';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import { selectReddit, fetchPostsIfNeeded } from './actions';
import rootReducer from './reducers';

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware, // lets us dispatch() functions
  loggerMiddleware // neat middleware that logs actions
)(createStore);


let store = createStoreWithMiddleware(rootReducer);

store.dispatch(selectReddit('reactjs'));
store.dispatch(fetchPostsIfNeeded('reactjs')).then(() =>{
  console.log("ALL FETCHED!!", store.getState());
});

//
// silly auto-TODO timer
//
// import {addTodo, truncateAutoTodos} from './actions';
// let i = 0;
// setInterval(() => {
//   i += 1;
//   if(i%10==0)
//   {
//     store.dispatch(truncateAutoTodos())
//   }
//   else
//   {
//     store.dispatch(addTodo(`Auto todo ${i}`))
//   }
// }, 1000)


let rootElement = document.getElementById('root');
React.render(
  // The child must be wrapped in a function
  // to work around an issue in React 0.13.
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  rootElement
);

