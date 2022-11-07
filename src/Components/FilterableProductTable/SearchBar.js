import styled from '@emotion/styled'
import React from 'react'

const SearchBar = () => {
   return (
      <Form>
         <input type="search" placeholder="Search..." />
         <br />
         <input type="checkbox" id="search" />
         <label htmlFor="search">Only show products in stock</label>
      </Form>
   )
}

export default SearchBar

const Form = styled('form')`
   /* border: 1px solid red; */
`
