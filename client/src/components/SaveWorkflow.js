import React, {useState, useEffect, useContext} from 'react'
import AppContext from '../store/AppContext'
import Axios from  'axios'

function SaveWorkflow({data} ){

    let myContext = useContext(AppContext);
    
    function saveState(){

        let name = prompt("Give this workflow a name : ")
        data["name"] = name ;
    }

    function createNew(){
        saveState()
        try{
            Axios.post('http://localhost:3100/create', data)
        } catch (e){
            alert("Could not save data")
        }
    }

    return (
        <>
            <button className="m-2 p-2 border-black border-1 bg-white hover:bg-green-300" onClick={createNew} > Save Workflow </button>
        </>
    )
}

export default SaveWorkflow;