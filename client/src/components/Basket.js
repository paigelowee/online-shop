import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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

const TotalDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;
const SummaryTitle = styled.h2`
  color: #082335;
`;

const TotalHeading = styled.p`
  font-weight: bold;
  color: #082335;
`;

const OrderTotal = styled.p``;

const ButtonPrimary = styled.button`
  padding: 7px;
  width: 100%;
  height: 40px;
  color: white;
  background-color: #082335;
  border: none;
  font-weight: 400;
  font-size: 17px;
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
  font-size: medium;
`;

function Basket() {
  return (
    <Container>
      <Details>
        <Item>
          <Image
            image={
              "https://images.unsplash.com/photo-1535813449-9b1b28174821?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNraXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            }
          />
          <ItemDetails>
            <ItemName>Men apres ski goggles</ItemName>
            <ItemPrice>£24.99</ItemPrice>
            <Quantity></Quantity>
          </ItemDetails>
        </Item>
        <Divider />
      </Details>
      <Summary>
        <SummaryTitle>Order Summary</SummaryTitle>
        <TotalDiv>
          <TotalHeading>Total</TotalHeading>
          <OrderTotal>£24.99</OrderTotal>
        </TotalDiv>
        <ButtonPrimary>Checkout</ButtonPrimary>
        <ContinueShopping as={Link} to="/products">
          Continue shopping
        </ContinueShopping>
      </Summary>
    </Container>
  );
}

export default Basket;
