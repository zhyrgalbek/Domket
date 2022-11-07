import styled from '@emotion/styled'
import React from 'react'

const ProductRow = ({ product }) => {
   const name = product.stocked ? (
      product.name
   ) : (
      <span style={{ color: 'red' }}>{product.name}</span>
   )
   return (
      <Line>
         <Column>{name}</Column>
         <Column>{product.price}</Column>
      </Line>
   )
}

export default ProductRow

const Column = styled('td')`
   /* border: 1px solid red; */
   /* width: 100%; */
   text-align: left;
`

const Line = styled('tr')`
   /* border: 1px solid red; */
   /* background-color: green; */
`
