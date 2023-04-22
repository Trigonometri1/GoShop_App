import React, { useEffect, useState } from "react";
// import products from "../products";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import listProducts from "../actions/productAction";

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const products = [];
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
