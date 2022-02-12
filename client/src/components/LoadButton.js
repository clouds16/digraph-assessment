import React, { useContext} from 'react'
import AppContext from '../store/AppContext'


function LoadWorkflow( props ){
    //pass in object data props
    //access global state to set current workflow - 
    const myContext =  useContext(AppContext);
    const currentWorkflow = myContext.CURRENTWORKFLOW ;

    function LoadButtonPressed(){
        console.log("props data: ",  props.data)
        console.log("current workflow loaded: ", currentWorkflow)
        myContext.SETCURRENTWORKFLOW(props.data)
        console.log("new context data is now:", currentWorkflow)
    }   

    return (
        <>
            <button className="m-2 p-2 border-black border-1 bg-green-200" onClick={LoadButtonPressed} > Load </button>
        </>
    )
}

export default LoadWorkflow;