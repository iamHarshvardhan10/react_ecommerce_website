import React from 'react';
import './Slider.css'

import { Navigation, Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import {SliderProducts} from '../../data/products';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

const Slider = () => {
  return (

    <div className="s_container">
    <Swiper
   modules={[Pagination, Navigation]}
   className='mySwiper'
   navigation={true}
    slidesPerView={3}
    spaceBetween={30}
    slidesPerGroup={1}
    loop={true}

  
  >
    {
      SliderProducts.map((slide, i) => (
        <SwiperSlide>
          <div className="left_s">
            <div className="name">
              <span>{slide.name}</span>
              <span>{slide.detail}</span>
            </div>

            <span>{slide.price}$</span>

            <div>Shop Now</div>
          </div>

          <img src={slide.img} alt="product" className='img_product' />
        </SwiperSlide>
      ))
    }
   
  
  </Swiper>
  </div>
  );
}

export default Slider;