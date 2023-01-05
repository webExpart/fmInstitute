import React from 'react'
import './socailItems.css'
import { ImFacebook2, ImTwitter, ImYoutube2 } from 'react-icons/im'

function SocailItems(props) {

  return (
    <>
    <div className='facebook-item'>
      <div className='midDiv'>
        <ImFacebook2 className='facebookIcon'/>
        <span>Facebook</span>
      </div>
      <a href="#" target="_blank">Visit</a>
    </div>
    <div className='facebook-item'>
      <div className='midDiv'>
        <ImTwitter className='facebookIcon'/>
        <span>Twitter</span>
      </div>
      <a href="#" target="_blank">Visit</a>
    </div>
    <div className='facebook-item'>
      <div className='midDiv'>
      <ImYoutube2 className='facebookIcon'/>
      <span>Youtube</span>
      </div>
      <a href="#" target="_blank">Visit</a>
    </div>
    </>
  )
}

export default SocailItems