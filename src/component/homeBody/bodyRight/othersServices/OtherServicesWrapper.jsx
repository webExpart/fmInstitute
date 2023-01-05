import React from 'react'
import './otherServiceWrapper.css'
import OtherCards from './othersCard/OtherCards'
import { OtherServiceInfo } from '../../../allInfo/OthersServiceInfo'

function OtherServicesWrapper() {
  return (
    <div className="Others-info-wrapper">
        <h4 className='text-2 w-100'>Others Services</h4>
        <div className="other-card-wrapper">
          {
            OtherServiceInfo.map(item => (
              <OtherCards key={item.id} name = {item.name} dec = {item.dec} linkText = {item.linkText}/>
            ))
          }
            
        </div>
    </div>
  )
}

export default OtherServicesWrapper