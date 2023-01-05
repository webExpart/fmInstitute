import React from 'react'
import CourseDetailsSlider from '../../component/courseDetailsSlider/CourseDetailsSlider'
import CourseIntro from '../../component/courseIntro/CourseIntro'
import './courseDetails.css'
import {useParams } from 'react-router-dom';


function CourseDetailsLeft() {
  let { id } = useParams();
console.log(id);
  return (
    <div className='homeLeftSection'>
      <CourseDetailsSlider/>
      <CourseIntro/>
    </div>
  )
}

export default CourseDetailsLeft