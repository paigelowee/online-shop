import React from "react";
import styled from "styled-components";
import ProductTiles from "./ProductTiles";

const Container = styled.div`
  margin-top: 10px;
  padding: 0px 20px;
`;

const Title = styled.h1``;

const FilterContainer = styled.div`
  display: flex;
  justify-content: end;
`;

const SearchInput = styled.select`
  padding: 5px;
  color: #082335;
  margin-right: 20px;
`;

const SearchText = styled.h2`
  color: #082335;
  margin-right: 5px;
  font-size: inherit;
`;

const SortInput = styled.select`
  padding: 5px;
  color: #082335;
`;

const SortText = styled.h2`
  color: #082335;
  margin-right: 5px;
  font-size: inherit;
`;

const FilterFlex = styled.div`
  display: flex;
  align-items: center;
`;

function Products() {
  return (
    <Container>
      <FilterContainer>
        <FilterFlex>
          <SearchText>Category</SearchText>
          <SearchInput name="cagegory" id="cagegory" onChange={null}>
            <option value="goggle">Goggle</option>
            <option value="ski">Ski</option>
            <option value="snow">Snowboard</option>
          </SearchInput>
        </FilterFlex>
        <FilterFlex>
          <SortText>Sort by</SortText>
          <SortInput name="sort" id="sort" onChange={null}>
            <option value="asc">Price: low to high</option>
            <option value="desc">Price: high to low</option>
            <option value="newest">Newest</option>
          </SortInput>
        </FilterFlex>
      </FilterContainer>
      <ProductTiles />
    </Container>
  );
}

export default Products;
