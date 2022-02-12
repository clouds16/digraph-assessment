import React, {useState, useEffect, useContext} from 'react'
import AppContext from '../store/AppContext'


function CreaetNew( props ){

    let myContext = useContext(AppContext);
    let [newWorkflow , setNewWorkflow] = useState({
        name: "",
        nodes : [],
        edges : []
    })

    function createNew(){
                
        let createName = prompt('Add workflow name: ');

        myContext.SETCURRENTWORKFLOW( prevState => ({
            ...prevState , name : createName
        })) 

    }

    return (
        <>
            <button className="m-2 p-2 border-black border-1 bg-white" onClick={createNew} > Create New Workflow </button>
        </>
    )
}

export default CreaetNew;