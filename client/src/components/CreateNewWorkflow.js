import React, {useState, useEffect} from 'react'

function LoadWorkflow( props ){

    function createNew(){
        console.log('create new workflow button pressed')
    }

    return (
        <>
            <button className="m-2 p-2 border-black border-1 bg-white" onClick={createNew} > Create New Workflow </button>
        </>
    )
}

export default LoadWorkflow;