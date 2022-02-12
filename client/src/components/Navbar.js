import React from "react";
import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const Title = styled.h1`
  margin: 5px;
  font-size: 50px;
  color: #082335;
`;

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  margin-right: 20px;
`;

const LinkItem = styled.div`
  margin-left: 50px;
  cursor: pointer;
  font-weight: 600;
  color: #082335;
  :hover {
    color: #445d6d;
  }
`;

// const Container = styled.div``;

function Navbar() {
  return (
    <Container>
      <Title>Névé.</Title>
      <Links>
        <LinkItem>Basket</LinkItem>
        <LinkItem>Log in</LinkItem>
        <LinkItem>Sign up</LinkItem>
      </Links>
    </Container>
  );
}

export default Navbar;
