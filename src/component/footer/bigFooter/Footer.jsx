import React from 'react'
import './footer.css'
import FooterCenterCard from './footerCard/FooterCenterCard'
import FooterLeftCard from './footerCard/FooterLeftCard'
import FooterRightCard from './footerCard/FooterRightCard'

function Footer() {
  return (
    <div className='footer'>
        <FooterLeftCard/>
        <FooterCenterCard/>
        <FooterRightCard/>
    </div>
  )
}

export default Footer