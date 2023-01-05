import React from 'react'
import './courseIntro.css'
import StudentReviewCard from '../homeBody/bodyLeft/studentReviewWrapper/studentReviewCard/StudentReviewCard'

function CourseIntro() {
  return (
    <div className='course-intro'>
        <h2 className="course-name">
            BSC IN Nursing
        </h2>
        <span className="course-dec">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci enim cumque consequatur quidem delectus porro animi eum a sequi error. Necessitatibus tempore quibusdam aliquid placeat beatae culpa nobis delectus amet.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci enim cumque consequatur quidem delectus porro animi eum a sequi error. Necessitatibus tempore quibusdam aliquid placeat beatae culpa nobis delectus amet.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci enim cumque consequatur quidem delectus porro animi eum a sequi error. Necessitatibus tempore quibusdam aliquid placeat beatae culpa nobis delectus amet.
        </span>
        <div className="course-modoul">
            <h4 className="text-2">Course Modoule</h4>
            <div className="course-modoul-items">
            <div className="course-modoul-item">
                <h2 className="lesson-name">Lesson 01</h2>
                <span className="class-day">2Days</span>
            </div>
            <div className="course-modoul-item">
                <h2 className="lesson-name">Lesson 01</h2>
                <span className="class-day">2Days</span>
            </div>
            <div className="course-modoul-item">
                <h2 className="lesson-name">Lesson 01</h2>
                <span className="class-day">2Days</span>
            </div>
            <div className="course-modoul-item">
                <h2 className="lesson-name">Lesson 01</h2>
                <span className="class-day">2Days</span>
            </div>
            <div className="course-modoul-item">
                <h2 className="lesson-name">Lesson 01</h2>
                <span className="class-day">2Days</span>
            </div>
            <div className="course-modoul-item">
                <h2 className="lesson-name">Lesson 01</h2>
                <span className="class-day">2Days</span>
            </div>
            <div className="course-modoul-item">
                <h2 className="lesson-name">Lesson 01</h2>
                <span className="class-day">2Days</span>
            </div>
            <div className="course-modoul-item">
                <h2 className="lesson-name">Lesson 01</h2>
                <span className="class-day">2Days</span>
            </div>
            <div className="course-modoul-item">
                <h2 className="lesson-name">Lesson 01</h2>
                <span className="class-day">2Days</span>
            </div>
            <div className="course-modoul-item">
                <h2 className="lesson-name">Lesson 01</h2>
                <span className="class-day">2Days</span>
            </div>
            <div className="course-modoul-item">
                <h2 className="lesson-name">Lesson 01</h2>
                <span className="class-day">2Days</span>
            </div>
            <div className="course-modoul-item">
                <h2 className="lesson-name">Lesson 01</h2>
                <span className="class-day">2Days</span>
            </div>
            </div>
        </div>
        <div className="course-pricing">
            <h4 className='text-2'>Pricing Table</h4>
            <div className="price-tables">
                <div className="price-table">
                    <h4 className="package-name">Basic</h4>
                    <span className="free-item">Book Free Provide</span>
                    <span className="free-item">Book Free Provide</span>
                    <span className="free-item">Book Free Provide</span>
                    <span className="free-item">Book Free Provide</span>
                    <span className="course-fe"> Course Fee 16,000Tk</span>
                </div>
                <div className="price-table">
                    <h4 className="package-name">Basic</h4>
                    <span className="free-item">Book Free Provide</span>
                    <span className="free-item">Book Free Provide</span>
                    <span className="free-item">Book Free Provide</span>
                    <span className="free-item">Book Free Provide</span>
                    <span className="course-fe">Course Fee 16,000Tk</span>
                </div>
            </div>
        </div>
        <div className="student-review">
            <h2 className='text-2'>Student Reviews</h2>
            <StudentReviewCard/>
        </div>
    </div>
  )
}

export default CourseIntro