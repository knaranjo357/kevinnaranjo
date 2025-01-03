import React from 'react'
import Company from '../Menhomethree/Company'
import Offer from '../Menhomethree/Offer'
import Footer from '../Menpages/Footer/Main'
import Header from '../Menpages/Header/Main'

function Main() {
  return (
    <>
        <div className="page-wrapper">
            <Header/>
            <Offer/>
            <Company/>
            <Footer/>
        </div>
    </>
  )
}

export default Main