import React from 'react';
import css from './Testimonials.module.css';

import Hero from '../../assets/testimonialHero.png';

import { Swiper, SwiperSlide } from 'swiper/react'

import { TestimonialsData } from '../../data/testimonials'

const Testimonials = () => {
    return (
        <div className={css.Testimonial}>
            <div className={css.wrapper}>
                <div className={css.container}>

                    <span>Top Rated</span>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sapiente aliquid qui?</span>
                </div>

                <img src={Hero} alt="" />

                <div className={css.container}>
                    <span>100k</span>
                    <span>Happy Customers with us</span>
                </div>
            </div>

            <div className={css.reviews}>Reviews</div>
            <div className={css.carousel}>
                <Swiper
                    slidesPerView={3}
                    slidesPerGroup={1}
                    spaceBetween={20}
                    className={css.tcarousel}
                >

                    {
                        TestimonialsData.map((Testimonials, i) => (
                            <SwiperSlide >
                                <div className={css.Testimonials}>

                                    <img src={Testimonials.image} alt="" />
                                    <span>{Testimonials.comment}</span>
                                    <hr style={{'width':'100%', 'height':'1px'}}/>
                                    <span>{Testimonials.name}</span>

                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default Testimonials;