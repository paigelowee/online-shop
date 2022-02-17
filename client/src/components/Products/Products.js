import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProductTiles from "./ProductTiles";
import constants from "../../constants";
import { unauthenticatedRequest } from "../../requests";

const Container = styled.div`
  margin-top: 10px;
  padding: 0px 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: end;
`;

const SearchInput = styled.select`
  padding: 5px;
  color: #082335;
  margin-right: 20px;
  cursor: pointer;
  option {
    text-transform: capitalize;
  }
`;

const SearchText = styled.h2`
  color: #082335;
  margin-right: 5px;
  font-size: inherit;
`;

const SortInput = styled.select`
  padding: 5px;
  color: #082335;
  cursor: pointer;
  option {
    text-transform: capitalize;
  }
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
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState("asc");
  const [colour, setColour] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const queryParams = `?category=${category ? category : null}&colour=${
      colour ? colour : null
    }&sort=${sort}`;

    console.log(queryParams);
    unauthenticatedRequest
      .get(`products${queryParams}`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, [sort, colour, category]);

  return (
    <Container>
      <FilterContainer>
        <FilterFlex>
          <SearchText>Category</SearchText>
          <SearchInput
            name="cagegory"
            id="cagegory"
            value={category}
            onChange={(e, c) => setCategory(e.target.value)}
          >
            {constants.categories.map((c) => (
              <option value={c}>{c}</option>
            ))}
          </SearchInput>
        </FilterFlex>

        <FilterFlex>
          <SortText>Colour </SortText>
          <SearchInput
            name="colour"
            value={colour}
            id="colour"
            onChange={(e, c) => setColour(e.target.value)}
          >
            {constants.colours.map((c) => (
              <option value={c}>{c}</option>
            ))}
          </SearchInput>
        </FilterFlex>

        <FilterFlex>
          <SortText>Sort by</SortText>
          <SortInput
            name="sort"
            id="sort"
            value={sort}
            onChange={(e, c) => setSort(e.target.value)}
          >
            <option value="asc">Price: low to high</option>
            <option value="desc">Price: high to low</option>
            <option value="newest">Newest</option>
          </SortInput>
        </FilterFlex>
      </FilterContainer>
      <ProductTiles products={products} />
    </Container>
  );
}

export default Products;
