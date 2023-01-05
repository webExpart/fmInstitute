import React from 'react'
import './studentInfo.css'
import CountUp from 'react-countup';

function StudentInfo() {
  return (
    <div className="student-info-wrapper">
    <h4 className='text-2 w-100'>Student</h4>
    <div className="student-card">
      <span className='countNumber'><CountUp end={10000} duration={1000}/>+</span>
      <span className='counter-text'>Total Student</span>
    </div>
    </div>
  )
}

export default StudentInfo