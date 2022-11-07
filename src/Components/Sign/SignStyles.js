import styled from '@emotion/styled'
import { Button } from '@mui/material'

export const InfoSign = styled('div')`
   /* border: 1px solid red; */
   font-family: 'Roboto';
   font-size: 16px;
   font-weight: 400;
   line-height: 19px;
   letter-spacing: 0em;
   text-align: center;
   color: rgba(138, 138, 138, 1);
   margin-bottom: 30px;
`

export const SignInItemLink = styled('a')`
   text-decoration: none;
   color: ${(props) => (props.green ? '#00bb29' : '#8a8a8a')};
   padding-left: 6px;
   cursor: pointer;
`
export const SignInfoItem = styled('li')`
   /* border: 1px solid red; */
   padding-top: 21px;
   font-family: 'Roboto';
   font-size: 18px;
   font-weight: 400;
   line-height: 21px;
   letter-spacing: 0em;
   text-align: center;
   color: #8a8a8a;
   list-style: none;
`
export const SignInInfo = styled('ul')`
   list-style: none;
   margin: 0;
   padding: 0 70px;
   margin-bottom: 57px;
   /* border: 1px solid red; */
`

export const SubmitForm = styled(Button)`
   width: 100%;
   background-color: #00bb29;
   padding: 22px 0;
   font-family: 'Roboto';
   font-size: 18px;
   font-weight: 400;
   line-height: 21px;
   letter-spacing: 0em;
   text-align: left;
   &:hover {
      background-color: #00bb29;
   }
`

export const FormHeader = styled('h2')`
   font-family: 'Roboto';
   font-size: 25px;
   font-weight: 400;
   line-height: 29px;
   letter-spacing: 0em;
   text-align: center;
   color: #3c3c3c;
   margin-bottom: 35px;
`

export const SignInForm = styled('form')`
   box-sizing: border-box;
   /* border: 1px solid red; */
   /* height: 300px; */
   padding: 20px 70px;
`
export const SignInBackground = styled('div')`
   /* border: 1px solid red; */
   background-image: url(${(props) => props.image && props.image});
   background-repeat: no-repeat;
   background-position: bottom center;
   background-size: contain;
   height: inherit;
   /* margin-top: -2px; */
`
export const SignInItem = styled('div')`
   /* border: 1px solid red; */
   width: calc(1 / 2 * 100%);
   overflow: hidden;
   height: auto;
   height: ${(props) => props.height};
`
export const SignInBlock = styled('div')`
   border: 1px solid #00bb29;
   border-right: 0;
   border-radius: 10px;
   margin: 60px 0;
   /* margin-top: 70px; */
   display: flex;
   flex-flow: row nowrap;
   justify-content: space-between;
   overflow: hidden;
`
