import {Swiper, SwiperSlide} from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import image1 from './../../assets/images/gallery/gallery-1.jpg'
import image2 from './../../assets/images/gallery/gallery-2.jpg'
import image3 from './../../assets/images/gallery/gallery-3.jpg'
import image4 from './../../assets/images/gallery/gallery-4.jpg'
import image5 from './../../assets/images/gallery/gallery-5.jpg'
import image6 from './../../assets/images/gallery/gallery-6.jpg'
import image7 from './../../assets/images/gallery/gallery-7.jpg'
import image8 from './../../assets/images/gallery/gallery-8.jpg'

export default function Gallery() {
    const [activeIndex, setActiveIndex] = useState(0);
    const images = [image1, image2, image3, image4, image5, image6, image7, image8];
    
    // const handleSlideChange = (index) => {
    //   setActiveIndex(index);
    // };


  return (
        <div className="container pt-5">
            <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={
                {
                rotate:0,
                stretch:0,
                depth:0,
                modifier:1.5,
                } }
                modules={[EffectCoverflow, Pagination, Navigation]}
                onSlideChange={(swiper) => {
                setActiveIndex(swiper.activeIndex);
                }} >
                {images.map((image, index) => (
                <SwiperSlide key={index} className='col-6 col-md-4 col-xl-3 ms-1 me-1'>
                    <img src={image} alt='slide-img' 
                    className={`w-100 h-100 p-1 ${activeIndex === index ? 'border-5-primary' : ''}`}/>
                </SwiperSlide>
                ))}
            </Swiper>
            {/* <div className='pagination justify-content-center pt-3 '>
                {images.map((_, index) => (
                <Button size="sm"
                    key={index}
                    className={`pagination-bullet me-1 bg-white rounded-circle border-my-primary ${activeIndex === index ? 'active' : ''}`}
                    onClick={() => handleSlideChange(index)}
                />
                ))}
            </div> */}
    </div>
)
}

