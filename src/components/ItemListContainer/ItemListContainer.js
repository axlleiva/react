import React from 'react';
import { useState , useEffect } from 'react';
import {getfetch} from '../../helpers/mock';
import ItemList from './ItemList';

function ItemListContainer(props){

    const [data, setdata] = useState([])
    const [loading, setloading] = useState(true)

    useEffect(() => {
        getfetch
        .then(resp=>setdata(resp))
        .catch(err=>console.log(err))
        .finally(()=>setloading(false))
        
    }, [])
    
    
    console.log(data)

    const {greeting} = props
    
    return (
        <div>
            <h1>{greeting}</h1>
            {loading ? <h1>Loading....</h1>
            :
            <ItemList productos={data} />}
            
        </div>
    )
}

export default ItemListContainer
