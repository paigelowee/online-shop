import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 70vh;
  margin: 0px 100px;
  gap: 40px;
`;

const Details = styled.div``;

const Item = styled.div`
  display: flex;
  gap: 15px;
  width: 500px;
`;

const Image = styled.div`
  height: 90px;
  width: 90px;
  background-size: cover !important;
  background: url(${(props) => props.image});
`;

const ItemDetails = styled.div``;

const ItemName = styled.p`
  font-weight: 500;
  font-size: 15px;
  margin-bottom: 5px;
  color: #082335;
`;

const Divider = styled.div`
  margin-top: 10px;
  border-bottom: 1px solid #b6adad1f;
`;

const ItemPrice = styled.p`
  color: #082335;
`;

const Quantity = styled.div``;

const Summary = styled.div`
  border: 1px solid #b6adad7a;
  height: fit-content;
  width: 370px;
  padding: 15px;
`;

const CostDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
`;

const SummaryTitle = styled.h2`
  color: #082335;
`;

const CostHeading = styled.p`
  font-weight: 400;
  color: #082335;
`;

const CostPrice = styled.p``;

const TotalHeading = styled.p`
  font-weight: bold;
  font-size: large;
  color: #082335;
`;

const TotalPrice = styled.p`
  font-size: large;
  font-weight: bold;
`;

const FreeShippingDiv = styled.div`
  margin: 10px 0px;
  border: 1px solid #78787836;
  padding: 20px 10px;
  text-align: center;
  .heading {
    margin-bottom: 10px;
    font-weight: 500;
    color: #082335;
  }
  .subheading {
    font-weight: 200;
    color: #082335;
  }
`;

const ButtonPrimary = styled.button`
  padding: 7px;
  width: 100%;
  height: 40px;
  color: white;
  background-color: #082335;
  border: none;
  font-weight: 400;
  font-size: 17px;
  margin-top: 10px;
  cursor: pointer;
  :hover {
    background-color: #082335e8;
  }
`;
const ContinueShopping = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0px 20px;
  color: #082335;
  color: #082335;
  font-size: medium;
`;

function Basket() {
  const basket = useSelector((state) => state.basket);

  const qualifyForFreeDelivery = 40 - basket.total < 0;
  return (
    <Container>
      <Details>
        {basket.products?.map((p) => (
          <>
            <Item>
              <Image image={p.image} />
              <ItemDetails>
                <ItemName>{p.name}</ItemName>
                <ItemPrice>£{p.price}</ItemPrice>
                <Quantity></Quantity>
              </ItemDetails>
            </Item>
            <Divider />
          </>
        ))}
      </Details>
      <Summary>
        <SummaryTitle>Order Summary</SummaryTitle>
        <div style={{ margin: "10px 0px 15px" }}>
          <CostDiv>
            <CostHeading>Subtotal</CostHeading>
            <CostPrice>£{basket.total}</CostPrice>
          </CostDiv>
          <CostDiv>
            <CostHeading>Estimated Shipping</CostHeading>
            <CostPrice>£{qualifyForFreeDelivery ? 0 : 6.99}</CostPrice>
          </CostDiv>
          <CostDiv style={{ marginTop: 10 }}>
            <TotalHeading>Total</TotalHeading>
            <TotalPrice>
              £{qualifyForFreeDelivery ? basket.total : basket.total + 6.99}
            </TotalPrice>
          </CostDiv>
        </div>
        <FreeShippingDiv>
          <p className="heading">Free delivery on all orders over £40</p>
          <p className="subheading">
            {!qualifyForFreeDelivery
              ? `Spend £${Math.round(
                  40 - basket.total
                )} to qualify for free shipping`
              : "Free shipping applied"}
          </p>
        </FreeShippingDiv>
        <ButtonPrimary>Checkout</ButtonPrimary>
        <ContinueShopping as={Link} to="/products">
          Continue shopping
        </ContinueShopping>
      </Summary>
    </Container>
  );
}

export default Basket;
