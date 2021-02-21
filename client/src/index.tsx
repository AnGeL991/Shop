import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

//import { BrowserRouter } from 'react-router-dom';
import App from './App';
import {createBrowserHistory} from 'history';
import configureStore from './configureStore';


function initApp(){
  // ...
  const history = createBrowserHistory();
  const initialState:any ={};
  const store = configureStore(history, initialState);

  // store.dispatch
  // ....
  ReactDOM.render(  
    <App store={store} history={history} />,
  document.getElementById('root')
);
}

initApp()

reportWebVitals();
