import React from 'react'
import Footer from '../../component/footer/bigFooter/Footer'
import SiteFooter from '../../component/footer/siteFooter/SiteFooter'
import Header from '../../component/header/Header'
import BlogBody from './BlogBody'

function Blog() {
  return (
    <div className='App'>
      <Header/>
      <BlogBody/>
      <Footer/>
      <SiteFooter/>
    </div>
  )
}

export default Blog