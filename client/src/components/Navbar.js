import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaShoppingBag, FaUserAlt } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const Title = styled.h1`
  margin: 5px;
  text-decoration: none;
  font-size: 50px;
  font-weight: bold;
  color: #082335;
  :hover {
    color: #082335e8;
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  margin-right: 20px;
`;

const LinkItem = styled(Link)`
  margin-left: 50px;
  cursor: pointer;
  font-weight: 600;
  color: #082335;
  :hover {
    color: #082335e8;
  }
`;

function Navbar() {
  return (
    <Container>
      <Title as={Link} to="/">
        Névé.
      </Title>
      <Links>
        <LinkItem as={Link} to="/register">
          <FaUserAlt size={24} />
        </LinkItem>
        <LinkItem as={Link} to="/basket">
          <FaShoppingBag size={27} />
        </LinkItem>
      </Links>
    </Container>
  );
}

export default Navbar;
