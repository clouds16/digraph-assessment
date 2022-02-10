import React, {useEffect, useState} from 'react'
import Axios from 'axios'
import RemoveButton from './RemoveButton'
import UpdateButton from './UpdateButton'

function GetGraphs(){

    let [data , setData] = useState([])

    useEffect( ()=> {
        try {
            let req = Axios.get('http://localhost:3000/read')
            setData( ...data, req.data)
        } catch(e) {
            alert('Could not download data')
            console.log(e)
        }

    }, [])

    return(
        <div>
            {   data? 
                data.map((item) => {
                    return (
                        <div>
                            <h1> {item.name} </h1>
                            <RemoveButton />
                            <UpdateButton />
                        </div>
                    )
                } ) : <> <p> No data selected </p></>
            }

        </div>
    )
}

export default GetGraphs;