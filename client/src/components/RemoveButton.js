import React, {useEffect, useState} from 'react'
import Axios from 'axios'

function RemoveButton( {data} ) {
    
    function onButtonPress(){
        try {
            alert("Are you sure you want to delete this data?")
            Axios.delete('http://localhost:3100/delete' , {
                data: {
                    _id : data._id
                  }
            })
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