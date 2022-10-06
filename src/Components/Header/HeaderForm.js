import styled from '@emotion/styled'
import { Button, IconButton } from '@mui/material'
import React from 'react'
import { ReactComponent as Heart } from '../../assets/icons/heart.svg'

const HeaderForm = () => {
   return (
      <FormBlock>
         <IconButton>
            <Heart />
         </IconButton>
         <ButtonContained variant="contained">
            Добавить обьявление{' '}
         </ButtonContained>
         <ButtonSignIn variant="contained">Войти</ButtonSignIn>
      </FormBlock>
   )
}

export default HeaderForm

const ButtonSignIn = styled(Button)`
   background: #f3f3f3;
   color: #3b3b3b;
   border-radius: 15px;
   font-family: 'Roboto';
   font-size: 14px;
   font-weight: 400;
   text-transform: capitalize;
   &:hover {
      background: #f3f3f3;
      color: #3b3b3b;
   }
`

const ButtonContained = styled(Button)`
   background: #00bb29;
   border-radius: 15px;
   font-family: 'Roboto';
   font-size: 14px;
   font-weight: 400;
   text-transform: capitalize;
   /* padding: 0; */
   &:hover {
      background: #00bb29;
   }
`

const FormBlock = styled('div')`
   /* border: 1px solid red; */
   display: flex;
   justify-content: space-between;
   flex-flow: row nowrap;
   align-items: flex-start;
   align-content: flex-start;
   width: 360px;
`
