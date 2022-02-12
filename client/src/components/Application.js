import React, {useState, useEffect , useContext} from 'react'
import AppContext from '../store/AppContext'
import GetGraphs from '../components/GetGraphs'
import Graph from '../creategraph/Graph'
import SaveWorkflow from './SaveWorkflow'
import CreateNewWorkflow from  './CreateNewWorkflow'

function Application(props) {

    let myContext =  useContext(AppContext)

    return (
        <>
        <h1> Graph Application </h1>
        <div className="w-screen h-screen flex flex-row justify-center place-items-center bg-red-100"> 
          <Graph graphData = {myContext.CURRENTWORKFLOW} />
          
          <div className="flex flex-col place-items-start justify-start">
            <CreateNewWorkflow /> 
            <SaveWorkflow />
            <div>
              <GetGraphs />
              <div>
                current data {myContext.CURRENTWORKFLOW.name}
              </div>
            </div>
          </div>
        </div>
        </>
    )
}

export default Application