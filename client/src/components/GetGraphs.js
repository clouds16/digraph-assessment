import React, {useEffect, useState} from 'react'
import Axios from 'axios'
import RemoveButton from './RemoveButton'
import UpdateButton from './UpdateButton'
import LoadButton from './LoadButton'

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
                        <div className=" bg-orange-300 p-3 m-1">
                            <h1> {item.name} </h1>
                            <h1> {item._id} </h1>
                            <LoadButton data={item}/>
                            <RemoveButton data={item} />
                            <UpdateButton data={item} />
                        </div>
                    )
                } ) : <> <p> No data selected </p></>
            }

        </div>
    )
}

export default GetGraphs;