import React from 'react'
import { useState } from 'react';
import css from './Header.module.css'
import logo from '../../assets/logo.png';
import { CgShoppingBag } from 'react-icons/cg'
import { GoThreeBars } from 'react-icons/go'

const Header = () => {

    const [showMenu, setShowMenu] = useState(true)

    const toggleMenu = ()=>{
        setShowMenu((showMenu) => !showMenu)
    }
    return (
        <div className={css.container}>
            <div className={css.logo}>
                <img src={logo} alt="" />
                <h2><span>S</span>hopy<span>F</span>y</h2>
            </div>
            <div className={css.right}>


                <div className={css.bars} onClick={toggleMenu}>
                    <GoThreeBars/>
                </div>
              
                    <ul className={css.menu} style={{display: showMenu ? 'inherit' : 'none'}}>
                        <li>Collections</li>
                        <li>Brands</li>
                        <li>New</li>
                        <li>Sales</li>
                        <li>ENG</li>
                    </ul>
             

                <input type="text" placeholder='Search Here' className='search'/>

                <CgShoppingBag style={{'width':'1.5rem', 'height':'1.5rem'}}/>
            </div>
        </div>
    )
}

export default Header;