import React from 'react'
import SignUpImg from '../../assets/images/signUpBackground.jpg'
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

export const SignUp = () => {
   return (
      <SignInBlock>
         <SignInItem>
            <SignInForm>
               <FormHeader>Регистрация</FormHeader>
               <Input
                  id="email"
                  type="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
               />
               <Input
                  id="tel"
                  type="tel"
                  label="Телефон"
                  variant="outlined"
                  fullWidth
               />
               <Input
                  id="name"
                  type="text"
                  label="ФИО"
                  variant="outlined"
                  fullWidth
               />
               <Input
                  id="password"
                  type="password"
                  label="Пароль"
                  variant="outlined"
                  fullWidth
               />
               <Input
                  id="lastPassword"
                  type="lastPassword"
                  label="Повторите пароль"
                  variant="outlined"
                  fullWidth
               />
               <SubmitForm variant="contained">Регистрация</SubmitForm>
            </SignInForm>
            <SignInInfo>
               <SignInfoItem>
                  <SignInItemLink>Не могу войти</SignInItemLink>
               </SignInfoItem>
               <SignInfoItem>
                  У вас есть профиль?
                  <SignInItemLink href="#" green>
                     Войти
                  </SignInItemLink>
               </SignInfoItem>
            </SignInInfo>
         </SignInItem>
         <SignInItem height="727px">
            <SignInBackground image={SignUpImg} />
         </SignInItem>
      </SignInBlock>
   )
}
