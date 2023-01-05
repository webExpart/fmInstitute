import React from 'react'
import Footer from '../../component/footer/bigFooter/Footer'
import SiteFooter from '../../component/footer/siteFooter/SiteFooter'
import Header from '../../component/header/Header'
import GalleryBody from './GalleryBody'

function Gallery() {
  return (
    <div className='App'>
      <Header/>
      <GalleryBody/>
      <Footer/>
      <SiteFooter/>
    </div>
  )
}

export default Gallery