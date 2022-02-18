import React, {useState, useEffect, useContext} from 'react'
import AppContext from '../store/AppContext'
import defaultdata from '../creategraph/defaultdata'
import sample from '../creategraph/sample'

function CreaetNew( props ){

    let myContext = useContext(AppContext);
    


    function createNew(){
                
        let createName = prompt('Add workflow name: ');

        myContext.SETCURRENTWORKFLOW( {...defaultdata , name : createName}) 

    }

    return (
        <>
            <button className="m-2 p-2 border-black border-1 bg-white" onClick={createNew} > Create New Workflow </button>
        </>
    )
}

export default CreaetNew;