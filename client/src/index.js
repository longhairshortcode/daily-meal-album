import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//below code is like setting up a home (React root) for your app, asking React to be extra careful 
//and warn about possible issues (StrictMode), then telling React to start building your app by 
//rendering the main component (<App />) inside that home. This new way of rendering things 
//(React 18's concurrent rendering) might make your app faster by doing things more efficiently

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
