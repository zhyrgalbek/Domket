import styled from '@emotion/styled'
import React from 'react'
import FooterNavigation from './FooterNavigation'
import { ReactComponent as GooglePlay } from '../../assets/Logotype/googlePlay.svg'
import { ReactComponent as AppStore } from '../../assets/Logotype/appStore.svg'
import Container from '../../layouts/Container'

const Footer = () => {
   return (
      <Container footer>
         <FooterBlock>
            <FooterTop>
               <FooterNavigation />
            </FooterTop>
            <FooterMid>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
               </p>
               <p>
                  Auis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
               </p>
            </FooterMid>
            <FooterBottom>
               <FooterBottomItem>© 2021 Все права защищены.</FooterBottomItem>
               <FooterBottomItem color="#00BB29">
                  Пользовательское соглашение
               </FooterBottomItem>
               <FooterBottomItem>Made with 3 by ODev</FooterBottomItem>
               <FooterBottomItem>
                  <GooglePlay />
               </FooterBottomItem>
               <FooterBottomItem>
                  <AppStore />
               </FooterBottomItem>
            </FooterBottom>
         </FooterBlock>
      </Container>
   )
}

export default Footer

const FooterTop = styled('div')`
   /* border: 1px solid red; */
   border-top: 1px solid #cbcbcb;
   padding: 20px 0;
`
const FooterMid = styled('div')`
   border: 1px solid #cbcbcb;
   border-right: 0;
   border-left: 0;
   padding: 20px 0;
   display: flex;
   justify-content: space-between;
   font-family: 'Roboto';
   font-size: 16px;
   font-weight: 400;
   line-height: 24px;
   color: #575757;
   letter-spacing: 0em;
   text-align: left;
`
const FooterBottom = styled('div')`
   /* border: 1px solid red; */
   padding: 20px 0;
   display: flex;
   justify-content: space-between;
   align-items: center;
   flex-flow: row wrap;
`
const FooterBottomItem = styled('div')`
   /* border: 1px solid red; */
   font-family: 'Roboto';
   font-size: 16px;
   font-weight: 400;
   line-height: 24px;
   letter-spacing: 0em;
   text-align: left;
   color: ${(props) => (props.color ? props.color : '#575757')};
   cursor: pointer;
`

const FooterBlock = styled('div')`
   /* border: 1px solid red; */
`
