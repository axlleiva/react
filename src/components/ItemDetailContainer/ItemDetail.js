import React ,{useState} from 'react'
import Card from 'react-bootstrap/Card';
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';
import ItemCount from '../itemCount';
import { Link } from 'react-router-dom';


const ItemDetail = ({producto}) => {

    const [show,setshow]= useState(true)
    
    const onAdd = (counter)=>{
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
                    {show ? <ItemCount min ={1} max={10} onAdd={onAdd} /> : <Link to='/'><button>ir al carrito</button></Link>}
                    
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
            
        </div>
    )
}

export default ItemDetail

