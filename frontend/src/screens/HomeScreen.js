import React, { useEffect, useState } from "react";
import axios from "axios";
// import products from "../products";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <Row>
        <h2>Products</h2>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={3} lx={2}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
