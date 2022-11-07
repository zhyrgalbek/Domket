import styled from '@emotion/styled'
import { TextField } from '@mui/material'
import React from 'react'

export const Input = ({ ...props }) => {
   return <InputBlock {...props} />
}

const InputBlock = styled(TextField)`
   margin-bottom: 10px;
   & input {
      padding: 22px;
      border-radius: 4px;
      background-color: rgba(238, 238, 238, 1);
      font-family: 'Roboto';
      font-size: 18px;
      font-weight: 400;
      line-height: 21px;
      letter-spacing: 0em;
      /* color: rgba(167, 167, 167, 1); */
      text-align: left;
      /* border: 1px solid red; */
   }
   & label[data-shrink='false'] {
      /* border: 1px solid red; */
      transform: translate(22px, 26px);
      font-family: 'Roboto';
      font-size: 18px;
      font-weight: 400;
      line-height: 21px;
      letter-spacing: 0em;
      color: rgba(167, 167, 167, 1);
      text-align: left;
   }
   & label[data-shrink='true'] {
      /* border: 1px solid red; */
      transform: translate(14px, -9px) scale(0.75);
      /* background-color: #fff; */
   }
   & fieldset {
      border-color: rgba(238, 238, 238, 1);
   }
`
