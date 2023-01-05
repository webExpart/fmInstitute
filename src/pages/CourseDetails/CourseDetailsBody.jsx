import React from 'react'
import BodyRight from '../../component/homeBody/bodyRight/BodyRight'
import CourseDetailsLeft from './CourseDetailsLeft'
function CourseDetailsBody() {
  return (
    <div className='homeBody paddingTop course_detailsBody'>
        <CourseDetailsLeft/>
        <BodyRight/>
    </div>
  )
}

export default CourseDetailsBody