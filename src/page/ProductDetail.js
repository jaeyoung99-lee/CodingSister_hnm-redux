import React, { useEffect, useState } from "react";
import { Col, Container, Dropdown, DropdownButton, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { productAction } from "../redux/actions/productActions";

const ProductDetail = () => {
  let { id } = useParams();
  console.log("id :", id);
  const product = useSelector((state) => state.product.selectedItem);
  const [selectedSize, setSelectedSize] = useState("사이즈 선택");
  const dispatch = useDispatch();

  const getProductDetail = () => {
    dispatch(productAction.getProductDetail(id));
  };
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  const selectSize = (size) => {
    setSelectedSize(size);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img} alt="product" />
        </Col>
        <Col>
          <div>{product?.title}</div>
          <div>￦{product?.price}원</div>
          <br />
          <div className="choice blink">
            {product?.choice === true ? "Conscious choice" : ""}
          </div>
          <div className="new">{product?.new === true ? "NEW" : ""}</div>
          <div className="dropdown">
            <DropdownButton
              variant="secondary"
              id="dropdown-basic-button"
              title={selectedSize}
            >
              {product?.size.map((size, index) => (
                <Dropdown.Item key={index} onClick={() => selectSize(size)}>
                  {size}
                </Dropdown.Item>
              ))}
            </DropdownButton>
          </div>
          <button className="add-button">추가</button>
          <br />
          <button className="pre-button" onClick={goToHome}>
            목록
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
