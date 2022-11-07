import styled from '@emotion/styled'
import React from 'react'
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow'

const ProductTable = ({ products }) => {
   const rows = []
   products.forEach((product) => {
      const exam = rows.find((el) => el.key === product.category)
      if (!exam) {
         rows.push(
            <ProductCategoryRow
               key={product.category}
               category={product.category}
            />
         )
      }
      rows.push(<ProductRow key={product.name} product={product} />)
   })
   return (
      <table>
         <thead>
            <tr>
               <ProductHead>name</ProductHead>
               <ProductHead>price</ProductHead>
            </tr>
         </thead>
         <tbody>{rows}</tbody>
      </table>
   )
}

export default ProductTable

const ProductHead = styled('th')`
   text-align: left;
   text-transform: capitalize;
`
