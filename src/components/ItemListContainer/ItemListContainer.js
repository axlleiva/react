import React from 'react';
import { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ItemList from './ItemList';
import {collection,getDocs,getFirestore,query,where,} from 'firebase/firestore';

function ItemListContainer(props){

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoriaId} = useParams()

    useEffect(() => {
        if (categoriaId) {
            const db = getFirestore();
            const queryProducts = query(
                collection(db, 'items'),
                where('category', '==', categoriaId)
            );
            getDocs(queryProducts).then((res) =>
                setData(
                    res.docs.map((prod) => ({
                        id: prod.id,
                        ...prod.data(),
                    }))
                )
            );
            setLoading(false);
        } else {
            const db = getFirestore();
            const queryProducts = collection(db, 'products');
            getDocs(queryProducts).then((res) =>
                setData(
                    res.docs.map((prod) => ({
                        id: prod.id,
                        ...prod.data(),
                    }))
                )
            );
            setLoading(false);
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
/**if(categoriaId){
        getfetch
        .then(resp=>setdata(resp.filter(prod=> prod.categoria===categoriaId)))
        .catch(err=>console.log(err))
        .finally(()=>setloading(false))
        }else{
        getfetch
        .then(resp=>setdata(resp))
        .catch(err=>console.log(err))
        .finally(()=>setloading(false))
        } */