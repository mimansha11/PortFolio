import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App'
import './index.css'
//ReactDOM.render(<App/>,document.querySelector("#root"))
/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/

const root = createRoot(document.getElementById('root'));
root.render(<App />);
