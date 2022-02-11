import React, {useEffect, useState} from 'react'
import Axios from 'axios'

function UpdateButton( {uniqueID , data} ){
    
    function onButtonPress(){
        try {
            Axios.put('http://localhost:3000/update' , {uniqueID , data})
        }
        catch {
            alert('Could not delete item')
        }
    }

    return (
        <>
            <button className="m-2 p-2 border-black border-1 bg-white" onClick={onButtonPress}> Update </button>
        </>
    )
}

export default UpdateButton;