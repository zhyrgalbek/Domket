import styled from '@emotion/styled'
import React from 'react'

// const NavItems = [
//    {
//       name: 'Бишкек',
//       link: '#',
//    },
//    {
//       name: 'Чуй',
//       link: '#',
//    },
//    {
//       name: 'Нарын',
//       link: '#',
//    },
//    {
//       name: 'Ош',
//       link: '#',
//    },
//    {
//       name: 'Иссык куль',
//       link: '#',
//    },
//    {
//       name: 'Талас',
//       link: '#',
//    },
//    {
//       name: 'Жалал Абад',
//       link: '#',
//    },
//    {
//       name: 'Баткен',
//       link: '#',
//    },
// ]

const FooterNavigation = () => {
   return (
      <NavBlock>
         <NavLi>
            <p>Бишкек</p>
            <p>Иссык куль</p>
         </NavLi>
         <NavLi>
            <p>Чуй</p>
            <p>Талас</p>
         </NavLi>
         <NavLi>
            <p>Нарын</p>
            <p>Жалал Абад</p>
         </NavLi>
         <NavLi>
            <p>Ош</p>
            <p>Баткен</p>
         </NavLi>
      </NavBlock>
   )
}

export default FooterNavigation

const NavLi = styled('li')`
   /* border: 1px solid green; */
   font-family: 'Roboto';
   font-size: 16px;
   font-weight: 400;
   line-height: 24px;
   letter-spacing: 0em;
   color: #575757;
   cursor: pointer;
   text-align: left;
   margin-right: calc(200 / 1170 * 100%);
`

const NavBlock = styled('ul')`
   /* border: 1px solid red; */
   margin: 0;
   padding: 0;
   list-style: none;
   display: flex;
   justify-content: flex-start;
`
