import React from 'react'
import StudentReviewCard from './studentReviewCard/StudentReviewCard'

function StudentReviewWrapper() {
  return (
    <div className="student-review-card">
        <h4 className='text-2 '>Student Reviews</h4>
        <StudentReviewCard/>
    </div>
  )
}

export default StudentReviewWrapper