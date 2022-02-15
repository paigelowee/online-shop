import React from "react";
import styled from "styled-components";
import ProductCarousel from "./ProductCarousel";
// import Products from "./Products";

const Container = styled.div``;

function Home() {
  return (
    <Container>
      <ProductCarousel />
      {/* <Products /> */}
    </Container>
  );
}

export default Home;
