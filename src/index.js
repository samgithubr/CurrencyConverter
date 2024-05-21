import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Card from './components/card'
import Colo from './components/colo'
import reportWebVitals from './reportWebVitals';
import Api from './api';

const root = ReactDOM.createRoot(document.getElementById('root'));

let myObj=["sam"]

root.render(
  <React.StrictMode>
    {/* <App text={myObj} />
    <Colo/> */}
    {/* <App text={"BARDEN"} /> */}
    {/* <Card userName="Kaira" /> */}
    <Colo/>
  

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
