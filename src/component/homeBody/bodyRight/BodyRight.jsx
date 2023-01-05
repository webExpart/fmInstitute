import React from 'react'
import SocailWrapper from './socialWrapper/SocailWrapper'
import NoticeBoardWrapper from './noticeBoardWrapper/NoticeBoardWrapper'
import VideoWrapper from './videoWrapper/VideoWrapper'
import './bodyRight.css'
import StudentInfo from './StudentInfo/StudentInfo'
import TeacherInfoWrapper from './teacherInfo/TeacherInfoWrapper'
import TotalBook from './totalBook/TotalBook'
import OtherServicesWrapper from './othersServices/OtherServicesWrapper'


function BodyRight() {
  return (
    <div className="homeRightSection">
            <NoticeBoardWrapper/>
            <VideoWrapper/>
            <SocailWrapper/>
            <StudentInfo/>
            <TeacherInfoWrapper/>
            <TotalBook/>
            <OtherServicesWrapper/>
        </div>
  )
}

export default BodyRight