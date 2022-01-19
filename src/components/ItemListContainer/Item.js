import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Item = ({producto}) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={producto.pictureUrl} />
                <Card.Body>
                    <Card.Title>{producto.title}</Card.Title>
                    <Card.Text>
                    {producto.tipo}
                    </Card.Text>
                    <h1> {producto.price} </h1>
                    <Link to={`/detalle/${producto.id}`}><Button variant="primary">Comprar!</Button></Link>
                </Card.Body>
            </Card>

        </div>
    )
}

export default Item

