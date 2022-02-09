import React, {useEffect, useState} from 'react'
import Axios from 'axios'

function RemoveButton( {uniqueID , data} ) {
    
    function onButtonPress(){
        Axios.delete('localhost:3000/delete' , {uniqueID})
    }

    return (
        <>
            <button onClick={onButtonPress}> - </button>
        </>
    )
}

export default RemoveButton;