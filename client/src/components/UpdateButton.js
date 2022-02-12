import React, {useEffect, useState, useContext} from 'react'
import Axios from 'axios'
import AppContext from '../store/AppContext'

function UpdateButton( {uniqueID , data} ){
    const myContext =  useContext(AppContext);


    function onButtonPress(){
        try {
            Axios.put('http://localhost:3000/update' , {data})
        }
        catch {
            alert('Could not delete item')
        }
    }

    return (
        <>
            <button className="m-2 p-2 border-black border-1 bg-yellow-200" onClick={onButtonPress}> Update </button>
        </>
    )
}

export default UpdateButton;