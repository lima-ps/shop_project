import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Row';
import Product from '../components/Product';

function HomeView() {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const info = await axios.get('/api/products');
    setProducts(info.data);
  };
  fetchData();

  return (
    <div>
      <Helmet>
        <title>Shop-Project</title>
      </Helmet>
      <h1>All Products</h1>
      <div>
        <Row>
          {products.map((product) => (
            <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
              <Product product={product}></Product>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default HomeView;
