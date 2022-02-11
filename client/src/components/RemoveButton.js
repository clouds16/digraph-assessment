import React, {useEffect, useState} from 'react'
import Axios from 'axios'

function RemoveButton( {uniqueID , data} ) {
    
    function onButtonPress(){
        try {
            Axios.delete('http://localhost:3000/delete' , {uniqueID})
        }
        catch {
            alert('could not access data')
        }
    }

    return (
        <>
            <button className="m-2 p-2 border-black border-1 bg-red-200" onClick={onButtonPress}> Delete </button>
        </>
    )
}

export default RemoveButton;