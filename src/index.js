import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
    //Strict Mode -- zus�tzliche �berpr�fung vor dem hosten um fehler abzufangen
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
