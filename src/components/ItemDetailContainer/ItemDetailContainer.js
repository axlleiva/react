import React from 'react';
import { useEffect , useState } from 'react';
import { useParams } from 'react-router-dom';
import { getfetch } from '../../helpers/mock';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const[producto , setproducto]= useState({})

    const {detalleId} =useParams()

    useEffect (() => {
        getfetch
        .then(resp=>setproducto(resp.find(prod=>prod.id === detalleId)))

        
    }, [detalleId])
    console.log(producto)

    return (
        <div>
            <ItemDetail producto={producto}/>
            
        </div>
    )
}

export default ItemDetailContainer
