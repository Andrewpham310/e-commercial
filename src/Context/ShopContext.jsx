import React from "react";
import all_product from "../Components/Assets/all_product";

//provide context to the app

export const ShopContext = React.createContext(null);
const getDefaultCart = () => {
        let cart = {};
        //for loop to initialize the cart with 0 quantity for each product
        for (let index = 0; index < all_product.length+1; index++) {
            cart[index] = 0;  
            
        }
        
        return cart;
    };

const ShopContextProvider = (props ) => {
    //state to hold all products
    const [cartItems, setCartItems] = React.useState(getDefaultCart());
   
    //function to add item to cart
    const addToCart = (itemId) => {
        setCartItems((prev)=> ({...prev, [itemId]: prev[itemId] + 1}));
        
    }
    
    //function to remove item from cart
    const removeFromCart = (itemId) => {
        setCartItems((prev)=> ({...prev, [itemId]: prev[itemId] - 1}));
    }

    //getTotalCartAmount function to calculate total amount in cart
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                const itemInfo = all_product.find((product) => product.id === Number(item));
                if (itemInfo) totalAmount += cartItems[item] * itemInfo.new_price;
            }
        }
        return totalAmount;
    };
     
    //context value to be provided to the app
     const contextValue = {getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart };
    
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
