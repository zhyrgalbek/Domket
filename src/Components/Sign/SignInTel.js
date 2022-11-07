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

const SignInTel = () => {
   return (
      <SignInBlock>
         <SignInItem>
            <SignInForm>
               <FormHeader>Восстановление пароля</FormHeader>
               <InfoSign>
                  Для восстановления пароля <br /> введите номер телефона, на
                  которую вышлим
                  <br /> ссылку для восстановления пароля
               </InfoSign>
               <Input
                  fullWidth
                  label="Телефон"
                  variant="outlined"
                  type="tel"
                  id="tel"
               />
               <SubmitForm variant="contained">Восстановить пароль</SubmitForm>
            </SignInForm>
            <SignInInfo>
               <SignInfoItem>
                  У вас есть профиль?
                  <SignInItemLink href="#" green>
                     Войти
                  </SignInItemLink>
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

export default SignInTel
