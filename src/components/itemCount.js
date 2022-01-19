import React ,{useState} from 'react'

const ItemCount = ({min , max ,onAdd}) => {

    

  const [counter , setcounter] = useState(min);

  const incrementer = () =>{
    if(counter < max ){ setcounter(prev => prev + 1) }else{ alert("ese es todo el stock que tenemos")}
  }
  const decremento =() =>{
    if(counter > min ){ setcounter(prev => prev - 1) }else{ alert("el minimo es 1")}
  }

  return (
    <div >
      <h1> {counter} </h1>
        <button onClick={incrementer}>+</button>
        <button onClick={ () => onAdd(counter)}>Agregar al Carrito</button>
        <button onClick={decremento}>-</button>
    </div>
  )

  
}    

export default ItemCount
