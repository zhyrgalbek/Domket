import React from 'react'
import Footer from '../../Components/Footer/Footer'
import UserHeader from '../../Components/Header/userHeader'
import Container from '../Container'

const UserLayout = () => {
   return (
      <>
         <Container>
            <UserHeader />
         </Container>
         <Footer />
      </>
   )
}

export default UserLayout
