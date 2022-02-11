import React, {useEffect, useState} from 'react'
import Axios from 'axios'
import RemoveButton from './RemoveButton'
import UpdateButton from './UpdateButton'

function GetGraphs(){

    let [data , setData] = useState([])

    useEffect( ()=> {
      
        Axios.get('http://localhost:3100/read').then( (response)=> {
            console.log(response.data)
            setData(...data , response.data )

        } ).catch( (e)=> {
            alert('could not load data')
        } )

        console.log(data)
  

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