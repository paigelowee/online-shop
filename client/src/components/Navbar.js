import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaShoppingBag, FaUserAlt } from "react-icons/fa";
import { useSelector } from "react-redux";

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
  position: relative;
  :hover {
    color: #082335e8;
  }
`;

const Badge = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: cadetblue;
  color: white;
  position: absolute;
  display: flex;
  justify-content: center;
  z-index: -1;
  margin-left: 20px;
  margin-top: -10px;
`;

function Navbar() {
  const basketQuantity = useSelector((state) => state.basket.quantity);

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
          {basketQuantity > 0 && <Badge>{basketQuantity}</Badge>}
          <FaShoppingBag size={27} />
        </LinkItem>
      </Links>
    </Container>
  );
}

export default Navbar;
