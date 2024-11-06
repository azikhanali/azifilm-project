import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import Router from './components/router';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { GlobalStyle } from './style/globalStyle';
import LayOut from './components/layOut';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Fragment>
    <GlobalStyle/>
    <Router/>
  </Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
