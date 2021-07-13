import App from "./components/App/App";
import ReactDom from 'react-dom'
import React from "react";
import "./index.css";


const root = document.querySelector('#root');
ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
     root);