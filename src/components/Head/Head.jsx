import React from 'react'
import css from './Head.module.css';

import HeroImg from '../../assets/hero.png'
import {RiShoppingBagFill} from 'react-icons/ri'
import {BsArrowRight} from 'react-icons/bs'

const Head = () => {
    return (

        <div className={css.container}>
            <div className={css.h_sides}>
                <span className='text1'>Skin Protection Cream</span>

                <div className={css.text2}>
                    <span>Trendy collection</span>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ad minus hic.</span>
                </div>
            </div>

            <div className={css.wrapper}>
                <div className={css.blueCircle}></div>
                <div className={css.line}></div>
                {/* <div className={css.line1}></div> */}
            
                
                <img src={HeroImg} alt="" style={{'width':'400px','borderRadius':'50%'}}/>
                <div className={css.cart2}>
                    <RiShoppingBagFill/>
                

                <div className={css.signup}>
                    <span>Best Signup Offers</span>

                    <div>
                        <BsArrowRight/>
                    </div>
                </div>
                </div>
            </div>
            
            <div className={css.h_sides}>
                <div className={css.traffic}>
                    <span>1.5m</span>
                    <span>Monthly Traffic</span>
                </div>

                <div className={css.customers}>
                    <span>100k</span>
                    <span>Happy Customers</span>
                </div>
            </div>
        </div>
    )
}

export default Head;