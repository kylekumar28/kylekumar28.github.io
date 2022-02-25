import React from 'react';
import ReactDOM from 'react-dom';
// import { Route, BrowserRouter, Routes, HashRouter } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  HashRouter,
  BrowserRouter,
} from 'react-router-dom';
import App from './App';
import Map from './Map';

ReactDOM.render(
  <React.StrictMode>
    {/* <HashRouter>
      <Routes>
        <Route path='/' exact element={<App />} />
        <Route path='/map' exact element={<Map />} />
      </Routes>
    </HashRouter> */}
    {/* <App /> */}
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/map' element={<Map />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
