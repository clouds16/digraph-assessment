import React, {useEffect, useState} from 'react'
import Axios from 'axios'

function UpdateButton( {uniqueID , data} ){
    
    function onButtonPress(){
        try {
            Axios.put('localhost:3000/update' , {uniqueID , data})
        }
        catch {
            alert('Could not delete item')
        }
    }

    return (
        <>
            <button onClick={onButtonPress}> Update </button>
        </>
    )
}

export default UpdateButton;