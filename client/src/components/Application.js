import React, {useState, useEffect , useContext} from 'react'
import AppContext from '../store/AppContext'
import GetGraphs from '../components/GetGraphs'
import Graph from '../creategraph/Graph'
import FGraph from '../creategraph/fGraph'


import SaveWorkflow from './SaveWorkflow'
import CreateNewWorkflow from  './CreateNewWorkflow'

function Application(props) {

    let myContext =  useContext(AppContext)
    let currentWorkflow = myContext.CURRENTWORKFLOW;

    return (
        <>

        <div className="w-screen h-screen flex flex-col justify-center place-items-center bg-red-100"> 
          <CreateNewWorkflow className=" my-40"/> 
          
          <div className="w-full h-full flex flex-row justify-center place-items-center bg-red-100 ">
            <FGraph graphData = {myContext.CURRENTWORKFLOW} nodes={currentWorkflow.nodes} edges={currentWorkflow.edges} name={currentWorkflow.name} />
            <GetGraphs className="h-full w-full flex flex-col place-items-start justify-start overflow-scroll" />
          </div>

        </div>

        <button className="border-2 border-black p-2 " onClick={()=> console.log(currentWorkflow)}> Check global state </button>
        <div>
                <p> Curernt Workflow : { myContext.CURRENTWORKFLOW.name? myContext.CURRENTWORKFLOW.name : "No current Workflow" } </p>
                <p> nodes: {myContext.CURRENTWORKFLOW.nodes.map((item)=> {return (<p> name: {item.title} , id: {item.id}  </p>)} )}</p>
        </div>
        
        </>
    )
}

export default Application