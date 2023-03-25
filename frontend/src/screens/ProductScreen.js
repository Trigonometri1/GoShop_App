import React, { useEffect, useState } from "react";
import axios from "axios";
// import products from "../products";
import Rating from "../components/Rating";
import { Link, useParams } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  ListGroupItem,
  Card,
  Button,
} from "react-bootstrap";

const ProductScreen = ({ color }) => {
  const params = useParams();
  // const product = products.find((p) => p._id === params.id);
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`/api/products/${params.id}`);

      setProduct(data);
    };
    fetchData();
  });

  return (
    <>
      <Link to="/" style={{ color }} className="btn btn-light my-3">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h3>{product.name}</h3>
            </ListGroupItem>
            <ListGroupItem>
              <Rating
                rating_value={product.rating}
                review_text={`${product.numReviews} reviews`}
              />
            </ListGroupItem>
            <ListGroupItem>
              <h3>Price: ${product.price}</h3>
            </ListGroupItem>
            <ListGroupItem>{product.description}</ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroupItem>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    <strong>
                      {product.countInStock > 0
                        ? `${product.countInStock} left in stock`
                        : "out of stock"}
                    </strong>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Button
                  variant="danger"
                  className="btn-block"
                  type="button"
                  disabled={product.countInStock === 0}
                >
                  Add to Cart
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

ProductScreen.defaultProps = {
  color: "#ffffff",
};

export default ProductScreen;
