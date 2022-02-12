import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ProductCarousel from "./ProductCarousel";

const Container = styled.div``;

function Home() {
  return (
    <Container>
      <Navbar />
      <ProductCarousel />
      <Footer />
    </Container>
  );
}

export default Home;
