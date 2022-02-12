import React from "react";
import styled from "styled-components";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaPaperPlane,
  FaPlus,
  FaRegEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const Container = styled.div`
  padding: 40px 40px 20px 40px;
  background-color: #082335;
`;

const InfoContainer = styled.div`
  display: flex;
`;

const SectionGeneral = styled.div`
  margin-right: 50px;
  flex: 2;
`;
const SectionNews = styled.div`
  flex: 1;
`;

const Title = styled.div`
  color: white;
  font-size: 30px;
  font-weight: 400;
  margin: 10px 0px;
`;

const Description = styled.div`
  color: white;
  font-size: 17px;
  margin: 10px 0px;
`;

const Social = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5px;
`;

const SocialIcon = styled.div`
  margin-right: 10px;
  color: white;
  cursor: pointer;
  :hover {
    color: #445d6d;
  }
`;

const Input = styled.input`
  padding: 7px;
  width: 65%;
  height: 20px;
  outline: none;
  border: none;
`;

const Button = styled.button`
  padding: 7px;
  color: #082335;
  background-color: white;
  border: none;
  font-weight: 300;
  font-size: 15px;
  cursor: pointer;
`;

const NewsletterTitle = styled.div`
  color: white;
  font-size: 15px;
  margin: 10px 0px;
`;

const InputContainer = styled.div`
  display: flex;
`;

const Divider = styled.div`
  margin-top: 20px;
  border-bottom: 1px solid #b6adad7a;
`;

const PaymentImage = styled.div`
  /* width: 100px;
  height: 100px; */
`;

const Contact = styled.div`
  display: flex;
  margin-top: 20px;
`;

const ContactText = styled.p`
  color: white;
  margin-right: 15px;
  font-size: 13px;
`;

function Footer() {
  return (
    <Container>
      <InfoContainer>
        <SectionGeneral>
          <Title>Névé.</Title>
          <Description>
            Specialists in winter sports equipment. Dedicated to providing
            quality products to meet all your mountain needs.
          </Description>
          <Social>
            <SocialIcon>
              <FaInstagram size={25} />
            </SocialIcon>
            <SocialIcon>
              <FaFacebook size={25} />
            </SocialIcon>
            <SocialIcon>
              <FaTwitter size={25} />
            </SocialIcon>
          </Social>
        </SectionGeneral>
        <SectionNews>
          <NewsletterTitle>Sign up to our newsletter.</NewsletterTitle>
          <InputContainer>
            <Input placeholder="Email"></Input>
            <Button>
              <FaPaperPlane />
            </Button>
          </InputContainer>
        </SectionNews>
      </InfoContainer>
      <Divider />
      <Contact>
        <ContactText>
          <FaPlus style={{ marginRight: 2 }} size={8} />
          44 7735 533749
        </ContactText>
        <ContactText>
          {/* <FaRegEnvelope size={12} style={{ marginRight: 4 }} /> */}
          enquiries@neve.com
        </ContactText>
      </Contact>
      <PaymentImage />
    </Container>
  );
}

export default Footer;
