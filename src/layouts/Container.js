import styled from '@emotion/styled'
import React from 'react'

const Container = ({ children, footer }) => {
   return <ContainerBlock footer={footer}>{children}</ContainerBlock>
}

export default Container

const ContainerBlock = styled('div')`
   /* border: 1px solid red; */
   min-height: ${(props) => (props.footer ? '' : '100vh')};
   max-width: 1170px;
   margin: 0 auto;
`
