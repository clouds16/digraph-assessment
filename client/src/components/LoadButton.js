import React, { useContext} from 'react'
import AppContext from '../store/AppContext'


function LoadWorkflow( props ){
    //pass in object data props
    //access global state to set current workflow - 
    const myContext =  useContext(AppContext);
    const currentWorkflow = myContext.CURRENTWORKFLOW ;

    function LoadButtonPressed(){
        console.log("props data: ",  props.data)

        myContext.SETCURRENTWORKFLOW(props.data)

    }   

    return (
        <>
            <button className="m-2 p-2 border-black border-1 bg-green-200 hover:scale-125 " onClick={LoadButtonPressed} > Load </button>
        </>
    )
}

export default LoadWorkflow;