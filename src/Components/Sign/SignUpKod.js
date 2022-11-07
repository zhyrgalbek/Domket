import React from 'react'
import { Input } from '../UI/Input'
import SignInImg from '../../assets/images/signInBackground.jpg'
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
   InfoSign,
} from './SignStyles'

const SignUpKod = () => {
   return (
      <SignInBlock>
         <SignInItem>
            <SignInForm>
               <FormHeader>Регистрация</FormHeader>
               <InfoSign>
                  Для завершения регистрации,
                  <br /> введите СМС код отправленный на телефон
               </InfoSign>
               <Input
                  fullWidth
                  label="Введите СМС код"
                  variant="outlined"
                  type="text"
                  id="kod"
               />
               <SubmitForm variant="contained">Регистрация</SubmitForm>
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

export default SignUpKod
