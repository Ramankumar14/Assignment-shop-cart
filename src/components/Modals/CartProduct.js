import React from "react";
import "./cart-product.scss";
import Button from "../UI/Button/Button";


function CartProduct(props) {
  let totalPrice = props.price * props.quantity;

  return (
    <div className="CartItem">
      <img className="CartItem__Img" src={props.imageUrl} alt={""} />
      <div className="container">
        <div className="heading">
          {props.name}
        </div>
        <div className="qtybtn">
          <Button
            styles="remove-item"
            click={props.removeCartItem}
            ariaLabel={`Decrease ${props.name} quantity by 1`}
          >
            -
          </Button>
          <span
            style={{ width: "40px", textAlign: "center" }}
            aria-label={`No of items is ${props.quantity}`}
          >
            {props.quantity}
          </span>
          <Button
            styles="add-item"
            click={props.addCartItem}
            ariaLabel={`Increase ${props.name} quantity by 1`}
          >
            +
          </Button>
          <span
            style={{
              width: "40px",
              textAlign: "center",
              fontSize: "1.2rem",
            }}
          >
            x
          </span>
          <span
            style={{ width: "40px", textAlign: "left" }}
            aria-label={` Rs ${props.price} per quantity`}
          >
            Rs.{props.price}
          </span>
          <span
            style={{ textAlign: "center", position: "absolute", right: "23px" }}
            aria-label={`Total Price  ${totalPrice}`}
          >
            Rs.{totalPrice}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;