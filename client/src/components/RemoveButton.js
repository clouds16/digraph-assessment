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
            <button onClick={onButtonPress}> - </button>
        </>
    )
}

export default RemoveButton;