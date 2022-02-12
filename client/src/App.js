import logo from './logo.svg';
import './App.css';

//import Graph from './graph/Graph'

import AppContext from './store/AppContext'
import {useState , useEffect, useContext} from 'react'
import Application from './components/Application'

function App() {

  //let [backEnd , setBackEnd] = useState('http://localhost:3100/')
  let [currentWorkflow , setCurrentWorkflow] = useState({
    name : "",
    nodes : [],
    edges : []
    })

  let Store = {
    CURRENTWORKFLOW : currentWorkflow ,
    SETCURRENTWORKFLOW : setCurrentWorkflow
  }


  return (
    <AppContext.Provider value={Store}>    
        <Application />
    </AppContext.Provider>

  );
}

export default App;

// <Graph style={{ height: "150px" }} />