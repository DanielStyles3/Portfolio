import React from 'react'
import Navbar from '../Component/Navbar/Navbar'
import Footer from '../Component/Footer/Footer'
import Banner from '../Component/Banner/Banner'
import Form from '../Component/Contact/Form'

const Contact = () => {
  return (
    <div>
    <Navbar />
    <Banner heading="CONTACT." text='Lets have a chat' />
    <Form />
    <Footer />
    </div>
  )
}

export default Contact
