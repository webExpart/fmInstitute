import { Swiper, SwiperSlide } from "swiper/react";
import './studentCard.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";

import { StudentReview } from "../../../../allInfo/StudentReview";

function StudentReviewCard() {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1124: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1524: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {
          StudentReview.map((student)=>(
            <SwiperSlide key={student.id}>
            <div className="card">
              <div className="image-box">
                <img src={student.image} alt={student.name}/>
              </div>
              <div className="info">
                <span className="stdname">{student.name}</span>
                <span className="subject">{student.subject}</span>
                <p className="review-text">{student.review}</p>
              </div>
            </div>
          </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  )
}

export default StudentReviewCard