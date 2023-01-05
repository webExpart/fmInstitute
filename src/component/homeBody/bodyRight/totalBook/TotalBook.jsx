import React from 'react'
import './totalBook.css'
import CountUp from 'react-countup';

function TotalBook() {
  return (
    <div className="book-info-wrapper">
        <h4 className='text-2 w-100'>Total Book</h4>
        <div className="student-card">
          <span className='countNumber'><CountUp end={10000} duration={1000}/>+</span>
          <span className='counter-text'>Books</span>
      </div>
    </div>
  )
}

export default TotalBook