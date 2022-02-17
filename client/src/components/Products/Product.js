import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { unauthenticatedRequest } from "../../requests";
import { addProduct } from "../../redux/basketSlice";
import { useDispatch } from "react-redux";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  margin-top: 20px;
  gap: 50px;
`;

const ImageDiv = styled.div`
  height: 500px;
  width: 370px;
  background-size: cover !important;
  background: url(${(props) => props.image});
`;

const ContentDiv = styled.div``;

const SizeInput = styled.select`
  padding: 5px;
  color: #082335;
  cursor: pointer;
  width: 100%;
  margin-bottom: 10px;
`;

const SizeText = styled.h2`
  color: #082335;
  margin-right: 5px;
  font-size: inherit;
  margin: 10px 0px 5px;
  color: #082335;
`;

const DeliveryInfo = styled.div``;

const Title = styled.h5`
  font-weight: 500;
  font-size: 25px;
  margin-bottom: 5px;
  color: #082335;
`;

const Description = styled.p`
  margin-bottom: 5px;
  color: #082335;
`;

const Divider = styled.div`
  margin-top: 20px;
  border-bottom: 1px solid #b6adad7a;
`;

const Price = styled.p`
  color: #082335;
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

function Product() {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    unauthenticatedRequest
      .get(`products/${params.id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, [params.id]);

  const addToCart = () => {
    dispatch(
      addProduct({ product: product, quantity: 1, price: product.price })
    );
  };

  if (!product) return null;
  console.log(product.image);
  return (
    <Container>
      <ImageDiv image={product?.image} />
      <ContentDiv>
        <Title>{product.name}</Title>
        <Description>{product.name}</Description>
        <Price>£{product.price}</Price>
        <Divider />
        <SizeText>Size</SizeText>
        <SizeInput name="size" id="size" onChange={null}>
          {product?.size?.map((size) => (
            <option value={size}>{size}</option>
          ))}
        </SizeInput>
        <DeliveryInfo></DeliveryInfo>
        <ButtonPrimary onClick={() => addToCart()}>Add to bag</ButtonPrimary>
      </ContentDiv>
    </Container>
  );
}

export default Product;
