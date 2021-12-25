import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Carrossel from './components/Carrossel';
import './App.css';
import logo from './logo.svg';
import buraco from './buraco.jpg';


let images = [logo, buraco]

ReactDOM.render(
  <React.StrictMode>
     <Carrossel images={images} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
