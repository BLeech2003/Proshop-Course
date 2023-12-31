import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const product = ({product}) => {
  return (
    <Card className="my-3 p-3 rounded">
        <Link to={`/product/${product._id}`}>
            <Card.Img src={product.image} variant="top" alt={product.name}/>
        </Link>
        <Card.Body>
        <Link to={`/product/${product._id}`}>
            <Card.Title className="product-title" as="div">
                <strong> {product.name}</strong>
            </Card.Title>
        </Link>

        <Card.Text as="div">
            <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
        </Card.Text>
        <Card.Text as="h3">
                R {product.price}
            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default product