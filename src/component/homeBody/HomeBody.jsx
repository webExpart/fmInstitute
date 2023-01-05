import React from 'react'
import BodyLeftWrapper from './bodyLeft/BodyLeftWrapper'
import BodyRight from './bodyRight/BodyRight'
import './homeBody.css'


function HomeBody() {
  return (
    <section className='homeBody'>
        <BodyLeftWrapper/>
        <BodyRight/>
        
    </section>
  )
}

export default HomeBody