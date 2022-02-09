import logo from './logo.svg';
import './App.css';

import Graph from './graph/Graph'
import GetGraphs from './components/GetGraphs'

function App() {
  return (
    <div className="App">
    <h1> Graph Application </h1>
    <div className="w-screen h-screen flex flex-row justify-center place-items-center bg-red-100"> 
      <div className="flex-8 h-full w-full bg-blue-400 ">
        
      </div>

      <div className="flex-2 h-full w-full bg-indigo-400">
        <button className="border-2 bg-white m-3 p-2"> Add a section</button>
        <GetGraphs />
      </div>
    </div>
   


  </div>
  );
}

export default App;

// <Graph style={{ height: "150px" }} />