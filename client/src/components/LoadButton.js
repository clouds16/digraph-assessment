import React, {useState, useEffect} from 'react'

function LoadWorkflow( props ){

    //pass in object data props
    //access global state to set current workflow - 

    function LoadButtonPressed(){
        console.log("Load button pressed")
    }

    return (
        <>
            <button className="m-2 p-2 border-black border-1 bg-green-200" onClick={LoadButtonPressed} > Load </button>
        </>
    )
}

export default LoadWorkflow;