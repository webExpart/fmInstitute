import React from 'react'
import Header from '../../component/header/Header'
import CourseDetailsBody from './CourseDetailsBody'
import Footer from '../../component/footer/bigFooter/Footer';
import SiteFooter from '../../component/footer/siteFooter/SiteFooter'


function CourseDetails() {
  return (
    <div className='App'>
      <Header/>
      <CourseDetailsBody/>
      <Footer/>
      <SiteFooter/>
    </div>
  )
}

export default CourseDetails