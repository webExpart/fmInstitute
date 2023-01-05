import React, {useEffect, useState} from 'react'
import axios from 'axios';
import './hero.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';



function Hero() {
    const [slider, setSlider] = useState([])

    // useEffect(()=>{
    //     axios.get('http://localhost/FMBACKEND/HeroItemsShow.php').then(res => {
    //         setSlider(res.data.data)
    //     }).catch(err => {
    //         console.log(err)
    //     })
    // }, [])
  return (
    <Carousel autoPlay= {true} infiniteLoop={true} stopOnHover = {true} width='100%' className='Hero-root'>
                <div height='60vh'>
                    slider 1
                    </div >
                    <div  height='60vh'>
                    slider 1
                    </div>
                    <div  height='60vh'>
                    slider 1
                    </div>
                    <div  height='60vh'>
                    slider 1
                    </div>
            
            
            {/* {
                slider.map(item =>(
                    <div key={item.id}>
                    <img src={`./assets/${item.imageLink}`} alt='slider'/>
                    </div>
                ))
            } */}
    </Carousel>
  )
}

export default Hero