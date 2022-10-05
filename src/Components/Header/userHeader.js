import styled from '@emotion/styled'
import React from 'react'
import Menu from './Menu'
import { ReactComponent as Logo } from '../../assets/Logotype/Logotype.svg'
import HeaderForm from './HeaderForm'

const UserHeader = () => {
   return (
      <HeaderBlock>
         <HeaderTop>
            <LogoType>
               <Logo />
            </LogoType>
            <HeaderTopInfo>
               <HeaderForm />
            </HeaderTopInfo>
         </HeaderTop>
         <HeaderBottom>
            <Menu />
         </HeaderBottom>
      </HeaderBlock>
   )
}

export default UserHeader

const LogoType = styled('div')`
   padding: 20px 0;
   cursor: pointer;
`

const HeaderTopInfo = styled('div')`
   padding: 20px 0;
`
const HeaderBottom = styled('div')`
   padding-bottom: 20px;
   border-bottom: 1px solid #d6d6d6;
`
const HeaderTop = styled('div')`
   display: flex;
   justify-content: space-between;
`

const HeaderBlock = styled('div')`
   /* border: 1px solid red; */
`
