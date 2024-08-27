import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };
  return (
    <div className="card" onClick={showDetail}>
      <img src={item?.img} alt="product" />
      <div className="choice blink">
        {item?.choice === true ? "Conscious choice" : ""}
      </div>
      <div>{item?.title}</div>
      <div>￦{item?.price}원</div>
      <div className="new">{item?.new === true ? "NEW" : ""}</div>
    </div>
  );
};

export default ProductCard;
