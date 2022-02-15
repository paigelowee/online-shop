import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  margin-top: 20px;
  gap: 50px;
`;

const ImageDiv = styled.div`
  height: 500px;
  width: 370px;
  background-size: cover !important;
  background: url(${(props) => props.image});
`;

const ContentDiv = styled.div``;

const SizeInput = styled.select`
  padding: 5px;
  color: #082335;
  cursor: pointer;
  width: 100%;
  margin-bottom: 10px;
`;

const SizeText = styled.h2`
  color: #082335;
  margin-right: 5px;
  font-size: inherit;
  margin: 10px 0px 5px;
  color: #082335;
`;

const DeliveryInfo = styled.div``;

const Title = styled.h5`
  font-weight: 500;
  font-size: 25px;
  margin-bottom: 5px;
  color: #082335;
`;

const Divider = styled.div`
  margin-top: 20px;
  border-bottom: 1px solid #b6adad7a;
`;

const Price = styled.p`
  color: #082335;
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
  cursor: pointer;
  :hover {
    background-color: #082335e8;
  }
`;

function Product({ product }) {
  return (
    <Container>
      <ImageDiv
        image={
          "https://images.unsplash.com/photo-1535813449-9b1b28174821?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNraXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
        }
      />
      <ContentDiv>
        <Title>Mens ski goggles apres elite</Title>
        <Price>£24.99</Price>
        <Divider />
        <SizeText>Size</SizeText>
        <SizeInput name="size" id="size" onChange={null}>
          <option value="s">S</option>
          <option value="m">M</option>
          <option value="l">L</option>
        </SizeInput>
        <DeliveryInfo></DeliveryInfo>
        <ButtonPrimary>Add to bag</ButtonPrimary>
      </ContentDiv>
    </Container>
  );
}

export default Product;
