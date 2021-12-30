import React from 'react'
import { useState , useEffect } from 'react'
import {getfetch} from '../../helpers/mock'
import Item from './Item'


function ItemListContainer(props){

    const [array, setarray] = useState([])
    const [loading, setloading] = useState(true)

    useEffect(() => {
        getfetch
        .then(resp=>setarray(resp))
        .catch(err=>console.log(err))
        .finally(()=>setloading(false))
        
    }, [])
    
    
    console.log(array)

    const {greeting} = props
    
    return (
        <div>
            <h1>{greeting}</h1>
            {loading ? <h1>Loading....</h1>
            :
            array.map(client=> 
            <div>
                <Item key={client.id}/>

            </div>)}
            
        </div>
    )
}

export default ItemListContainer
