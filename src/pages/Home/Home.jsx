import React from 'react'
import Footer from '../../component/footer/bigFooter/Footer'
import SiteFooter from '../../component/footer/siteFooter/SiteFooter'
import Header from '../../component/header/Header'
import Hero from '../../component/homeBody/hero/Hero'
import HomeBody from '../../component/homeBody/HomeBody'

function Home() {
  return (
    <div className='App'>
        <Header/>
        <Hero/>
        <HomeBody/>
        <Footer/>
        <SiteFooter/>
    </div>
  )
}

export default Home