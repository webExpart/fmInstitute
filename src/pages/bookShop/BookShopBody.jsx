import React from 'react'
import BodyRight from '../../component/homeBody/bodyRight/BodyRight'
import BookShopLeft from './BookShopLeft'

function BookShopBody() {
  return (
    <div className='homeBody paddingTop'>
        <BookShopLeft/>
        <BodyRight/>
    </div>
  )
}

export default BookShopBody