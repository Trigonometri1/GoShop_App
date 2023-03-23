import React from "react";
import products from "../products";
import Rating from "../components/Rating";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";

const ProductScreen = () => {
  const params = useParams();
  const product = products.find((p) => p._id === params.id);
  console.log(product.name);

  return <div>{product.name}</div>;
};

export default ProductScreen;
