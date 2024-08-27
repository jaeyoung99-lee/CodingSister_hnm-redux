import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Col, Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const getProducts = async () => {
    let searchQuery = query.get("q") || ""; // 쿼리가 없는 경우를 대비해서 빈 값을 넣어줌
    console.log("쿼리값은?", searchQuery);
    let url = `https://my-json-server.typicode.com/jaeyoung99-lee/CodingSister_hnm-shopping-mall/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("data :", data);
    setProductList(data);
  };
  useEffect(() => {
    getProducts();
  }, [query]);
  return (
    <div>
      <Container>
        <Row>
          {productList.map((item) => (
            <Col lg={3}>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
