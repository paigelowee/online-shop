import React, { useRef } from "react";
import styled from "styled-components";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 60vh;
  width: 100vw;
  background-size: cover !important;
  filter: contrast(92%);
  justify-content: center;
  opacity: 0.9;
  background: url("https://images.unsplash.com/photo-1577641591369-8317b4ad9bd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
`;

const Carousel = styled.div`
  display: flex;
  margin: 0px 30px;
  align-items: center;
`;

const NavIcon = styled.div`
  margin: 5px;
  color: white;
  :hover {
    color: #082335;
  }
`;

const ProductDiv = styled.div`
  display: flex;
  max-width: 90vw;
  overflow-x: hidden;
`;

const Product = styled.div`
  margin: 0px 10px;
  height: 250px;
  display: flex;
  align-items: end;
  min-width: 170px;
  transition: transform 0.6s;
  background-size: cover !important;
  background: url("https://images.unsplash.com/photo-1614358606268-aa86853578b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNraXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60");
  :hover {
    transform: scale(1.05);
  }
`;

const ProductType = styled.div`
  background-color: white;
  width: 100%;
  text-align: center;
  padding: 5px;
`;

const ProductText = styled.div`
  color: #082335;
  font-weight: bold;
`;

const categories = [
  "Ski",
  "Snowboard",
  "Goggles",
  "Trousers",
  "Coats",
  "Boots",
  "Gloves",
];

function ProductCarousel() {
  const carouselRef = useRef(null);

  const scrollTo = (amount) => {
    carouselRef.current.scrollLeft += amount;
  };

  return (
    <Container>
      <Carousel>
        <NavIcon>
          <FaArrowLeft size={25} onClick={() => scrollTo(-500)} />
        </NavIcon>
        <ProductDiv ref={carouselRef}>
          {categories.map((c, i) => (
            <Product>
              <ProductType>
                <ProductText>{c}</ProductText>
              </ProductType>
            </Product>
          ))}
        </ProductDiv>
        <NavIcon>
          <FaArrowRight size={25} onClick={() => scrollTo(500)} />
        </NavIcon>
      </Carousel>
    </Container>
  );
}

export default ProductCarousel;
