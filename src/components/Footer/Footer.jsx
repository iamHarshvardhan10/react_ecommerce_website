import React from 'react';

import css from './Footer.module.css';
import logo from '../../assets/logo.png';


import { AiOutlineMail, AiFillPhone, AiOutlineLink, AiOutlineUserAdd } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go';
import { CiLogin } from 'react-icons/ci'


const Footer = () => {
    return (
        <div className={css.Footer}>
            <div className={css.cFooter}>
                <div className={css.logo}>
                    <img src={logo} alt="" />
                    <span>ShopyFy</span>
                </div>

                <div className={css.block}>
                    <div className={css.details}>
                        <span>Contact Us</span>
                        <span className={css.pngLine}>
                            <GoLocation className='icon' style={{ "fontSize": '2rem' }} />
                            <span>plt no 311, Mumbai</span>
                        </span>
                        <span className={css.pngLine}>
                            <AiFillPhone className='icon' style={{ "fontSize": '2rem' }} />
                            <span>+91 810-8424-368</span>
                        </span>
                        <span className={css.pngLine}>
                            <AiOutlineMail className='icon' style={{ "fontSize": '2rem' }} />
                            <span>shoopyservice24hrs@gmail.com</span>
                        </span>

                    </div>
                </div>


                <div className={css.block}>
                    <div className={css.details}>
                        <span>Account</span>
                        <span className={css.pngLine}>
                            <CiLogin className='icon' style={{ "fontSize": '2rem' }} />
                            <span>Login to</span>
                        </span>
                    </div>
                </div>

                <div className={css.block}>
                    <div className={css.details}>
                        <span>Company</span>
                        <span className={css.pngLine}>
                            <AiOutlineUserAdd className='icon' style={{ "fontSize": '2rem' }} />
                            <span>Cusotmer</span>
                        </span>
                    </div>
                </div>

                <div className={css.block}>
                    <div className={css.details}>
                        <span>Resources</span>
                        <span className={css.pngLine}>
                            <AiOutlineLink className='icon' style={{ "fontSize": '2rem' }} />
                            <span>Franchise</span>
                        </span>
                    </div>
                </div>



            </div>

            <div className={css.copy}>
                <span>
                    All Rights are Resereved @copyrightContent-2023
                </span>
            </div>
        </div>
    )
}

export default Footer;