import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import store from "./redux/store"
import { BrowserRouter } from "react-router-dom";
import client from "./graphQl/server"
import { ApolloProvider } from '@apollo/client';
import history from './redux/history';
import { Router } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter >
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </ Provider>
    </ApolloProvider>
  </BrowserRouter >,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
