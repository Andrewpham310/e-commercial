import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'

import remove_icon from '../Assets/cart_cross_icon.png'


const CartItems = () => {

    const {getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />

            {/* map through all products and display those which are in cart */}
            {/* e meanets each product object */}
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return <div >
                        <div className="cartitems-format cartitems-format-main">
                            <img src={e.image} className='carticon-product-icon' />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                            <p>${e.new_price * cartItems[e.id]}</p>
                            <img src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt='' className='cartitems-remove-icon' />
                        </div>
                    </div>
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping fee</p>
                            <p>free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                        <button>Proceed to checkout</button>
                    </div>
                    <div className="cartitems-promocode">
                        <p>Enter promocode here</p>
                        <div className="cartitems-promobox">
                            <input type="text" placeholder='Promocode' />
                            <button>Apply</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CartItems