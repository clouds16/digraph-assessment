import logo from './logo.svg';
import './App.css';

//import Graph from './graph/Graph'

import AppContext from './store/AppContext'
import {useState , useEffect, useContext} from 'react'
import Application from './components/Application'
import {CUSTOM_EMPTY_TYPE, SPECIAL_TYPE } from './creategraph/config2'

function App() {

  //let [backEnd , setBackEnd] = useState('http://localhost:3100/')
  let [currentWorkflow , setCurrentWorkflow] = useState({
    name : "",
    nodes : [
      {
        id: "a1",
        title: "Starting Node",
        type: SPECIAL_TYPE,
        x: 250,
        y: 350
      }
    ],
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