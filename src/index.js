import { BrowserRouter as Router } from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import store from './app/store'
// import { Provider } from 'react-redux'

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

//usually react strict mode wont be used when page is live. when you fetch from an api, strictmode  gets the data 2x as a debugging tool
  <React.StrictMode>
  {/* ANY TIME you need to create routes, you need to wrap your app in router tags in the index.js file */}
    <Router>
      <App />
  </Router>
  </React.StrictMode>
  
);

