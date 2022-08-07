import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Row';
import Product from '../components/Product';

function HomeView() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const info = await axios.get('/api/products');
      setProducts(info.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <Helmet>
        <title>Shop-Project</title>
      </Helmet>
      <h1>All Products</h1>
      <div className="product">
        <Row xs={3}>
          {products.map((product) => (
            <Col key={product.slug}>
              <Product product={product}></Product>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default HomeView;
