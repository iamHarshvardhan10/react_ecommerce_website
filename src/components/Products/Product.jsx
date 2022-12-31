import React from 'react'
import css from './Product.module.css';
import {ProductsData} from '../../data/products1';
import plan from '../../assets/plane.png';
import { useState } from 'react';

const Product = () => {

const [MenuProduct, setMenuProduct] = useState(ProductsData);



const filter = (type) =>{
  setMenuProduct(ProductsData.filter((product) => {
    return product.type === type
  }))
}








  return (
    <div className={css.container}>
        <img src={plan} alt="" />
        <h1>Our Featured Products</h1>

        <div className={css.products}>
            <ul className={css.menu}>
                <li onClick={() => setMenuProduct(ProductsData)}>All</li>
                <li onClick={() => filter("skin care")}>Skin Care</li>
                <li onClick={() => filter("conditioner")}>Conditioners</li>
                <li onClick={() => filter("foundation")}>Foundations</li>
            </ul>

            <div className={css.list}>
                {
                  MenuProduct.map((product , i) => (
                    <div className={css.product}>
                      <div className={css.left_s}>
                        <div className={css.name}>
                          <span>{product.name}</span>
                          <span>{product.detail}</span>
                        </div>

                        <span>{product.price}$</span>
                        <div>Show Now</div>
                      </div>

                      <img src={product.img} alt="" className='img_products'/>
                    </div>
                  ))
                }

            </div>
        </div>

    </div>
  )
}

export default Product;