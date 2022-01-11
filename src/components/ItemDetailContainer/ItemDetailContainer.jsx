import React from 'react';
import { useEffect , useState } from 'react';
import { getfetch } from '../../helpers/mock';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const[producto , setproducto]= useState({})

    useEffect (() => {
        getfetch
        .then(resp=>setproducto(resp.find(prod=>prod.id === "uno")))

        
    }, [])
    console.log(producto)

    return (
        <div>
            <ItemDetail producto={producto}/>
            
        </div>
    )
}

export default ItemDetailContainer
