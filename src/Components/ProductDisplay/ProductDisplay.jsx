import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
   
    const {product} = props;    
    const {addToCart} = useContext(ShopContext);//get addToCart function from context

  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt=''/>
            </div>
        </div>
        <div className="productdisplay-right">
            <h1 >{product.name}</h1>
            <div className="productdisplay-right-star">
                <img  src={star_icon} alt='' />
                <img  src={star_icon} alt='' />
                <img  src={star_icon} alt='' />
                <img  src={star_icon} alt='' />
                <img  src={star_dull_icon} alt='' />
                <p>(120 Reviews)</p>

            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-oldprice">${product.old_price}</div>
                <div className="productdisplay-right-newprice">${product.new_price}</div>
            </div>
            <div className='productdisplay-right-description'>
                <p>{product.description}</p>
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                </div>
            </div>

            <button onClick={()=>{addToCart(product.id)}}>Add to Cart</button>
            <p className='productdisplay-right-category'><span>Category: </span>{product.category}</p>
            <p className='productdisplay-right-category'><span>Tags: </span>{product.tag}</p>
        </div>
    </div>
  )
}

export default ProductDisplay