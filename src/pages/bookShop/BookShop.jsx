import React from 'react'
import Footer from '../../component/footer/bigFooter/Footer'
import SiteFooter from '../../component/footer/siteFooter/SiteFooter'
import Header from '../../component/header/Header'
import BookShopBody from './BookShopBody'

function BookShop() {
  return (
    <div className='App'>
      <Header/>
      <BookShopBody/>
      <Footer/>
      <SiteFooter/>
    </div>
  )
}

export default BookShop