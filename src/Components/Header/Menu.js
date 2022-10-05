import styled from '@emotion/styled'
import React from 'react'

const menuItems = [
   {
      name: 'Продажа',
      link: '#',
   },
   {
      name: 'Аренда',
      link: '#',
   },
   {
      name: 'Посуточно',
      link: '#',
   },
   {
      name: 'Карта',
      link: '#',
   },
   {
      name: 'Компании',
      link: '#',
   },
   {
      name: 'Срочно',
      link: '#',
   },
   {
      name: 'Новостройки',
      link: '#',
   },
   {
      name: 'Иссык-куль',
      link: '#',
   },
]

const Menu = () => {
   return (
      <MenuBlock>
         {menuItems.map((el) => {
            return <MenuItem key={el.name}>{el.name}</MenuItem>
         })}
      </MenuBlock>
   )
}

export default Menu

const MenuItem = styled('li')`
   /* border: 1px solid red; */
   font-family: 'Roboto';
   font-size: 16px;
   font-weight: 400;
   line-height: 19px;
   letter-spacing: 0em;
   color: #575757;
   text-align: left;
   cursor: pointer;
`

const MenuBlock = styled('ul')`
   /* border: 1px solid green; */
   margin: 0;
   padding: 0;
   list-style: none;
   display: flex;
   justify-content: space-between;
`
