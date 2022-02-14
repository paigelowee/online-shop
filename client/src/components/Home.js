import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Navbar from "./Navbar";
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
