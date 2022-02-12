import React, {useState, useEffect, useContext} from 'react'
import AppContext from '../store/AppContext'
import Axios from  'axios'

function SaveWorkflow( props ){

    let myContext = useContext(AppContext);

    function createNew(){

        
        let createName = prompt('Add workflow name: ');

        myContext.SETCURRENTWORKFLOW( prevState => ({
            ...prevState , name : createName
        })) 
        


        try{
            
            Axios.post('http://localhost:3100/create', myContext)
            console.log(myContext.CURRENTWORKFLOW)
            console.log("Success")

        } catch (e){
            alert("Could not save data")
        }
    }

    return (
        <>
            <button className="m-2 p-2 border-black border-1 bg-white" onClick={createNew} > Save Workflow </button>
        </>
    )
}

export default SaveWorkflow;