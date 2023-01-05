import React from 'react'
import Footer from '../../component/footer/bigFooter/Footer'
import SiteFooter from '../../component/footer/siteFooter/SiteFooter'
import Header from '../../component/header/Header'
import SingelPostBody from './SingelPostBody'

function SingelPost() {
  return (
    <div className='App'>
        <Header/>
        <SingelPostBody/>
        <Footer/>
        <SiteFooter/>
    </div>
  )
}

export default SingelPost