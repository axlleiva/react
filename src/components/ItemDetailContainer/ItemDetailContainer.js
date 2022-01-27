import {doc,getDoc, getFirestore } from 'firebase/firestore';
import React from 'react';
import { useEffect , useState } from 'react';
import { useParams } from 'react-router-dom';

import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const[producto , setproducto]= useState({})

    const {detalleId} =useParams()

    useEffect (() => {
        const db = getFirestore();
        const queryProd = doc(db, 'item', detalleId);
        getDoc(queryProd).then((resp) => {
            setproducto({ id: resp.id, ...resp.data() });
        });
        

        
    }, [detalleId])
    console.log(producto)

    return (
        <div>
            <ItemDetail producto={producto}/>
            
        </div>
    )
}

export default ItemDetailContainer
/**getfetch
        .then(resp=>setproducto(resp.find(prod=>prod.id === detalleId))) */