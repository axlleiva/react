import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyCeik_4h5CuqHGACbNFIX8rsrmgIY3ohww",
  authDomain: "e-commerce-e0dcf.firebaseapp.com",
  projectId: "e-commerce-e0dcf",
  storageBucket: "e-commerce-e0dcf.appspot.com",
  messagingSenderId: "782801519999",
  appId: "1:782801519999:web:79f341659e16fff27d864a",
  measurementId: "G-CQKQRVFDPC"
};
initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
