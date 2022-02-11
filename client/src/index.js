import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppContext from './store/AppContext'

let [backEnd , setBackEnd] = useState('http://localhost:3100/')
let [currentWorkflow , setCurrentWorkflow] = useState({
  name : "",
  nodes : [],
  edges : []
})


let Store = {
  BACKEND : backEnd,
  SETBACKEND : setBackEnd,
  CURRENTWORKFLOW : currentWorkflow ,
  setCurrentWorkflow : setCurrentWorkflow
}

ReactDOM.render(
  <AppContext.Provider value={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AppContext.Provider>
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
