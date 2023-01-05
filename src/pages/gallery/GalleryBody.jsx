import React from 'react'
import BodyRight from '../../component/homeBody/bodyRight/BodyRight'
import GalleryLeft from './GalleryLeft'

function GalleryBody() {
  return (
    <div className='homeBody paddingTop'>
        <GalleryLeft/>
        <BodyRight/>
    </div>
  )
}

export default GalleryBody