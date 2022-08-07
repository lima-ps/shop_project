import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { Manager } from '../manager.js';
import axios from 'axios';

function Product(props) {
  const { product } = props;

  const { state, dispatch } = useContext(Manager);

  const {
    cart: { cartItems },
  } = state;

  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert('Sorry, out of stock');
      return;
    }
    dispatch({
      type: 'ADD_TO_CART',
      payload: { ...item, quantity },
    });
  };

  return (
    <Card>
      <Link to={`/product/${product.slug}`}>
        <img
          src={product.image}
          className="card-img-top"
          alt={product.name}
        ></img>
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Card.Text>${product.price}</Card.Text>
        {product.countInStock === 0 ? (
          <Button variant="light" disabled>
            Out of Stock
          </Button>
        ) : (
          <Button onClick={() => addToCartHandler(product)}>Add to Cart</Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default Product;
