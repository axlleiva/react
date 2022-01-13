import React from 'react';
import { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {getfetch} from '../../helpers/mock';
import ItemList from './ItemList';

function ItemListContainer(props){

    const [data, setdata] = useState([])
    const [loading, setloading] = useState(true)

    const {categoriaId} = useParams

    useEffect(() => {
        if(categoriaId){
        getfetch
        .then(resp=>setdata(resp.filter(prod=> prod.categoria===categoriaId)))
        .catch(err=>console.log(err))
        .finally(()=>setloading(false))
        }else{
        getfetch
        .then(resp=>setdata(resp))
        .catch(err=>console.log(err))
        .finally(()=>setloading(false))
        }
    }, [categoriaId])
    
    
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
