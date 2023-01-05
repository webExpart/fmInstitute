import React from 'react'
import Footer from '../../component/footer/bigFooter/Footer'
import SiteFooter from '../../component/footer/siteFooter/SiteFooter'
import Header from '../../component/header/Header'
import ResultBody from './ResultBody'

function Result() {
  return (
    <div className='App'>
      <Header/>
      <ResultBody/>
      <Footer/>
      <SiteFooter/>
    </div>
  )
}

export default Result