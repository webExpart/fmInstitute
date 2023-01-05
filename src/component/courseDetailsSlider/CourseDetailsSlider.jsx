import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

function CourseDetailsSlider() {
  return (
    <div className='CourseDetailsSlider'>
        <Carousel autoPlay= {true} infiniteLoop={true} stopOnHover = {true} width='100%'>
                <div>
                    <img src="assets/1.jpeg" alt='slider'/>
                </div>
                <div>
                    <img src="assets/2.jpeg" alt='slider '/>
                </div>
                <div>
                    <img src="assets/3.jpeg" alt='slider '/>
                </div>
                <div>
                    <img src="assets/4.jpeg" alt='slider '/>
                </div>
                <div>
                    <img src="./assets/5.jpeg" alt='slider '/>
                </div>
    </Carousel>
    </div>
  )
}

export default CourseDetailsSlider