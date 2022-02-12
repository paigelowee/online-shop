import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-size: cover !important;
  filter: contrast(92%);
  opacity: 0.9;
  background: url("https://images.unsplash.com/photo-1577641591369-8317b4ad9bd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
`;
const Form = styled.div`
  width: 25%;
  height: 50%;
  backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  margin: 20px 0px;
  font-size: 50px;
  color: #082335;
  font-weight: 500px;
`;

const Input = styled.input`
  margin: 3px 0px;
  padding: 7px;
  width: 60%;
  height: 20px;
  outline: none;
  border: none;
`;

const Button = styled.button`
  margin: 10px 0px;
  padding: 7px;
  width: 65%;
  height: 40px;
  color: white;
  background-color: #082335;
  border: none;
  font-weight: 400;
  font-size: 17px;
  cursor: pointer;
`;

function Register() {
  return (
    <Container>
      <Form>
        <Title>Register.</Title>
        <Input placeholder="Name" onChange={null} />
        <Input placeholder="Email" onChange={null} />
        <Input type="password" placeholder="Password" onChange={null} />
        <Button>Register</Button>
      </Form>
    </Container>
  );
}

export default Register;
