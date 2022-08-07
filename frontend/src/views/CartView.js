import { useContext } from 'react';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { Helmet } from 'react-helmet-async';
import { Manager } from '../manager';

export default function CartView() {
  const { state, dispatch } = useContext(Manager);
  const {
    cart: { cartItems },
  } = state;

  return (
    <div>
      <Helmet>
        <title>Cart</title>
      </Helmet>
      <h1>Cart</h1>
      <Row className="product">
        {cartItems.length === 0 ? (
          <p>Não há item</p>
        ) : (
          <ListGroup>
            {cartItems.map((item) => (
              <ListGroup.Item key={item._id}>
                <Row xs={4}>
                  <Col>
                    <img src={item.image} alt={item.name}></img>
                  </Col>
                  <Col>Quantidade = {item.quantity}</Col>
                  <Col>Preço {item.price}€</Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Row>
    </div>
  );
}
