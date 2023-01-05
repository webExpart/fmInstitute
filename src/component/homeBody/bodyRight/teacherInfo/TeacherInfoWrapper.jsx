import React from 'react'
import './teacherinfoWrapper.css'
import CountUp from 'react-countup';

function TeacherInfoWrapper() {
  return (
    <div className="student-info-wrapper">
        <h4 className='text-2 w-100'>Teacher</h4>
        <div className="student-card">
          <span className='countNumber'><CountUp end={10000} duration={1000}/>+</span>
          <span className='counter-text'>Teacher</span>
      </div>
    </div>
  )
}

export default TeacherInfoWrapper