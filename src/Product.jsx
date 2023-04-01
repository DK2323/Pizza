import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext';


const Product = (props) => {

    const {product} = props;

    const[isAdding, setIsAdding] = useState(false);
    const {cart ,setCart} = useContext(CartContext);
    
    const addToCart = (e,product) => {
        e.preventDefault();

        let _cart = {...cart};
        if(!_cart.items){
            _cart.items = {}
        }

        if(_cart.items[product._id]){
            _cart.items[product._id] += 1;
        }else{
            _cart.items[product._id] = 1;
        }

        if(!_cart.totalItems){
            _cart.totalItems = 0;
        }

        _cart.totalItems += 1;
        setCart(_cart);

        setIsAdding(true);

        setTimeout(() => {
            setIsAdding(false);
        }, 500);        
    }

  return (

    <>
        <Link className='singleProduct' to={`/products/${product._id}`}>
            <img className='productImg' src={product.image} alt="" />
            <div className='productName'>
              <h3>{product.name}</h3>
              <span>{product.size}</span>
            </div>
            <div className='productPrice'>
              <span>Rs. {product.price}</span>
              <button disabled={isAdding} onClick={(e) => addToCart(e,product) } className={`${isAdding ? 'green' : 'orange'} `}>{`${isAdding ? "ADDED" : "ADD"}`}</button>
            </div>
        </Link> 
    </>
    
  )
}

export default Product