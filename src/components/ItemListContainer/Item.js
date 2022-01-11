import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Item = ({producto}) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={producto.pictureUrl} />
                <Card.Body>
                    <Card.Title>{producto.title}</Card.Title>
                    <Card.Text>
                    {producto.description}
                    </Card.Text>
                    <h1> {producto.price} </h1>
                    <Button variant="primary">Comprar! </Button>
                </Card.Body>
            </Card>

        </div>
    )
}

export default Item

