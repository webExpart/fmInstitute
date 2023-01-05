import React from 'react'
import ProgramsWrapper from './allPrograms/ProgramsWrapper'
import BranchWrapper from './allBranch/BranchWrapper'
import PostCardWrapper from './postWrapper/PostCardWrapper'
import StudentReviewWrapper from './studentReviewWrapper/StudentReviewWrapper'

function BodyLeftWrapper() {
  return (
    <div className="homeLeftSection">
        <ProgramsWrapper/>
        <BranchWrapper/>
        <PostCardWrapper/>
        <StudentReviewWrapper/>
    </div>
  )
}

export default BodyLeftWrapper