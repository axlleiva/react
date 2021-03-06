import React ,{useState} from 'react'
import Card from 'react-bootstrap/Card';
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';
import ItemCount from '../itemCount';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';


const ItemDetail = ({producto}) => {

    
    const {agregarAlCarrito }=useCartContext()
    const [show,setshow]= useState(true)
    
    const onAdd = (counter)=>{
        agregarAlCarrito({...producto,cantidad:counter})
    setshow(false)


    }

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={producto.pictureUrl} />
                <Card.Body>
                    <Card.Title>{producto.title} </Card.Title>
                    <Card.Text>
                    {producto.description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Debilidad: { producto.debilidad} </ListGroupItem>
                    <ListGroupItem>{producto.tipo}</ListGroupItem>
                    <ListGroupItem> {producto.price} </ListGroupItem>
                </ListGroup>
                <Card.Body>
                    {show ? <ItemCount min ={1} max={10} onAdd={onAdd} /> : <Link to="/cart">
                                <button className="detail">
                                    Ir al carrito
                                </button>
                            </Link>}
                    
                            <Link to="/">
                                <button className="detail">
                                    Volver al inicio
                                </button>
                            </Link>
                </Card.Body>
            </Card>
            
        </div>
    )
}

export default ItemDetail

