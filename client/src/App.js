import logo from './logo.svg';
import './App.css';

//import Graph from './graph/Graph'
import GetGraphs from './components/GetGraphs'
import Graph from './creategraph/Graph'
import AppContext from './store/AppContext'

function App() {
  
  const myContext =  useContext(AppContext);


  return (
    <div className="App">
    <h1> Graph Application </h1>
    <div className="w-screen h-screen flex flex-row justify-center place-items-center bg-red-100"> 
      <Graph graphData = {myContext.CURRENTWORKFLOW} />
      
      <div className="flex flex-col place-items-start justify-start">
        <button className="m-2 p-2 border-black bg-white"> Add new Workflow </button>
        <div>
          <GetGraphs />
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;

// <Graph style={{ height: "150px" }} />