import React, {useEffect, useState} from 'react'
import Axios from 'axios'

function UpdateButton( {uniqueID , data} ){
    
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