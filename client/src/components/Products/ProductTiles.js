import React from "react";
import styled from "styled-components";

const ProductList = [
  {
    _id: "1",
    image:
      "https://images.unsplash.com/photo-1535813449-9b1b28174821?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNraXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    _id: "1",
    image:
      "https://images.unsplash.com/photo-1535813449-9b1b28174821?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNraXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    _id: "1",
    image:
      "https://images.unsplash.com/photo-1535813449-9b1b28174821?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNraXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    _id: "1",
    image:
      "https://images.unsplash.com/photo-1535813449-9b1b28174821?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNraXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    _id: "1",
    image:
      "https://images.unsplash.com/photo-1535813449-9b1b28174821?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNraXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    _id: "1",
    image:
      "https://images.unsplash.com/photo-1535813449-9b1b28174821?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNraXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  },
];

const Container = styled.div`
  margin: 20px 0px;
`;

const ProductsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ProductContainer = styled.div`
  position: relative;
`;

const Product = styled.div`
  margin: 10px;
  height: 400px;
  width: 300px;
  position: relative;
  background-size: cover !important;
  background: url(${(props) => props.image});
  z-index: -1;
  cursor: pointer;
`;

const Tile = styled.div`
  margin: 10px;
  height: 90px;
  bottom: 0;
  width: 300px;
  position: absolute;
  opacity: 0;
  cursor: pointer;
  backdrop-filter: blur(20px);
  align-items: center;
  display: flex;
  flex-direction: column;
  transition: transform 0.5s;
  :hover {
    opacity: 1;
    z-index: 10000;
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
  cursor: pointer;
`;

const Button = styled.button`
  margin: 10px 0px;
  padding: 5px;
  width: 80%;
  height: 35px;
  color: #082335;
  background-color: white;
  border: none;
  font-weight: 400;
  font-size: 15px;
  cursor: pointer;
`;

function ProductTiles() {
  return (
    <Container>
      <ProductsDiv>
        {ProductList.map((p, i) => (
          <ProductContainer>
            <Tile>
              <Button>View item</Button>
              <ButtonPrimary>Add to cart</ButtonPrimary>
            </Tile>
            <Product image={p.image}></Product>
          </ProductContainer>
        ))}
      </ProductsDiv>
    </Container>
  );
}

export default ProductTiles;
