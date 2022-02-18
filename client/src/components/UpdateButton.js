import React, {useEffect, useState, useContext} from 'react'
import Axios from 'axios'
import AppContext from '../store/AppContext'

function UpdateButton( { data} ){
    const myContext =  useContext(AppContext);

    function onButtonPress(){
        try {
            alert("About to update existing data")
            Axios.put('http://localhost:3100/update' , {data})
            console.log("data updated")
        }
        catch {
            alert('Could not delete item')
        }
    }

    return (
        <>
            <button className="m-2 p-2 border-black border-1 bg-yellow-200 hover:scale-110" onClick={onButtonPress}> Update </button>
        </>
    )
}

export default UpdateButton;