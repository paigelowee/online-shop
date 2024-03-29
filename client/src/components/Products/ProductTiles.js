import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/basketSlice";

const Container = styled.div`
  margin: 20px 0px;
`;

const ProductsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Tile = styled.div`
  height: 90px;
  bottom: 0;
  width: 300px;
  position: absolute;
  opacity: 0;
  backdrop-filter: blur(20px);
  align-items: center;
  display: flex;
  flex-direction: column;
  transition: transform 0.5s;
`;

const ProductContainer = styled.div`
  position: relative;
  &:hover ${Tile} {
    transition: opacity 0.4s ease;
    opacity: 1;
  }
`;

const Product = styled.div`
  height: 400px;
  width: 300px;
  position: relative;
  background-size: cover !important;
  background: url(${(props) => props.image});
  z-index: -1;
  cursor: pointer;
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
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function ProductTiles({ products }) {
  const dispatch = useDispatch();
  const addToCart = (product) => {
    dispatch(
      addProduct({ product: product, quantity: 1, price: product.price })
    );
  };

  return (
    <Container>
      <ProductsDiv>
        {products.map((p, i) => (
          <ProductContainer>
            <Tile>
              <Button as={Link} to={`${p._id}`}>
                View item
              </Button>
              <ButtonPrimary onClick={() => addToCart(p)}>
                Add to basket
              </ButtonPrimary>
            </Tile>
            <Product image={p.image}></Product>
          </ProductContainer>
        ))}
      </ProductsDiv>
    </Container>
  );
}

export default ProductTiles;
