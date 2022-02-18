import React, {useState, useEffect, useContext} from 'react'
import AppContext from '../store/AppContext'
import defaultdata from '../creategraph/defaultdata'
import sample from '../creategraph/sample'


function CreaetNew( props ){



    const myContext =  useContext(AppContext);
    const currentWorkflow = myContext.CURRENTWORKFLOW ;
    let nodes = myContext.NODES;
    let setNodes = myContext.SETNODES;
    let edges = myContext.EDGES ;
    let setEdges = myContext.SETEDGES;
    
    


    function createNew(){
        myContext.SETCURRENTWORKFLOW(defaultdata) 
        setNodes(defaultdata.nodes);
        setEdges(defaultdata.edges);

    }

    return (
        <>
            <button className="m-2 p-2 border-black border-1 bg-white" onClick={createNew} > Create New Workflow </button>
        </>
    )
}

export default CreaetNew;