import { createContext } from "react";
import { useState, useEffect } from "react";


const CartContext = createContext(null);

const CartProvider = ({children}) => {

    const [cart, setCart] = useState({});

    useEffect(() => {
        const cart = window.localStorage.getItem('cart')
        setCart(JSON.parse(cart));
    },[]);

    useEffect(() => {
        window.localStorage.setItem('cart', JSON.stringify(cart));
    },[cart])



    return(
        <CartContext.Provider value={{cart, setCart}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider};
