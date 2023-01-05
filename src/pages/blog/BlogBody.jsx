import React from 'react'
import BodyRight from '../../component/homeBody/bodyRight/BodyRight'
import BlogLeft from './BlogLeft'

function BlogBody() {
  return (
    <div className='homeBody paddingTop'>
        <BlogLeft/>
        <BodyRight/>
    </div>
  )
}

export default BlogBody