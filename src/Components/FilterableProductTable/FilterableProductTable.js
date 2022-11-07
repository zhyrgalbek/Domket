import styled from '@emotion/styled'
import React from 'react'
import ProductTable from './ProductTable/ProductTable'
import SearchBar from './SearchBar'

const FilterableProductTable = ({ products }) => {
   return (
      <FilterBlock>
         <SearchBar />
         <ProductTable products={products} />
      </FilterBlock>
   )
}

export default FilterableProductTable

const FilterBlock = styled('div')`
   /* border: 1px solid red; */
   width: 220px;
`
