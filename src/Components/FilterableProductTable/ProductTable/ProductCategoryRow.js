import styled from '@emotion/styled'
import React from 'react'

const ProductCategoryRow = ({ category }) => {
   return (
      <tr>
         <TableHead>{category}</TableHead>
      </tr>
   )
}

export default ProductCategoryRow

const TableHead = styled('th')`
   /* border: 1px solid red; */
   text-align: left;
   text-transform: capitalize;
`
