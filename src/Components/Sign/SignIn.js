import React from 'react'
import SignInImg from '../../assets/images/signInBackground.jpg'
import { Input } from '../UI/Input'
import {
   SignInBackground,
   SignInBlock,
   SignInItem,
   SignInForm,
   FormHeader,
   SubmitForm,
   SignInInfo,
   SignInfoItem,
   SignInItemLink,
} from './SignStyles'

const SignIn = () => {
   return (
      <SignInBlock>
         <SignInItem>
            <SignInForm>
               <FormHeader>Вход</FormHeader>
               <Input
                  label="Email или телефон"
                  id="emailorTel"
                  type="text"
                  variant="outlined"
                  fullWidth
               />
               <Input label="Пароль" id="password" type="password" fullWidth />
               <SubmitForm variant="contained">Войти</SubmitForm>
            </SignInForm>
            <SignInInfo>
               <SignInfoItem>
                  <SignInItemLink href="#">Не могу войти</SignInItemLink>
               </SignInfoItem>
               <SignInfoItem>
                  У вас нету профиля?
                  <SignInItemLink href="#" green>
                     Регистрация
                  </SignInItemLink>
               </SignInfoItem>
            </SignInInfo>
         </SignInItem>
         <SignInItem height="498px">
            <SignInBackground image={SignInImg} />
         </SignInItem>
      </SignInBlock>
   )
}

export default SignIn
