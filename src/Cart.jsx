import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from './CartContext'


const Cart = () => {

  const[cartProducts, setCartProducts] = useState([]);

  const { cart,setCart } = useContext(CartContext);

  useEffect(() => {

    if(!cart.items){
      return;
    }

    fetch('https://star-spark-pasta.glitch.me/api/products/cart-items',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({ids: Object.keys(cart.items)} )
      
    }).then(res => res.json())
    .then(data => {
      console.log(data)
      setCartProducts(data)
    })
      
  },[cart])

  const getQty = (productId) => {
    return cart.items[productId]
  }

  const incQty = (productId) => {
    const _cart = {...cart}
    _cart.items[productId] += 1;
    _cart.totalItems += 1;
    setCart(_cart);
  }

  const decQty = (productId) => {
    const oldQty = cart.items[productId]
    if(oldQty>1){
    const _cart = {...cart}
    _cart.items[productId] -= 1;
    _cart.totalItems -= 1;
    setCart(_cart);
    }
  }

  let total = 0;

  const getPrice = (price,productId) => {
    const sum = cart.items[productId]*price
    total += sum;
    return sum
  }

  const removeItem = (productId) => {
    const _cart = {...cart};
    const qty = _cart.items[productId];
    delete _cart.items[productId];
    _cart.totalItems -= qty;
    setCart(_cart);

    setCartProducts(cartProducts.filter((product) => product._id !== productId))
  }

  const order = () => {
    window.alert('Your Order Placed successfully')
    setCartProducts([]);
    setCart({})
  }

  



  return (
    cartProducts.length ?
    <>
      <div className='cart'>
        <h3 className='cart-heading'>Cart Items</h3>
        <ul>
          {
            cartProducts.map((CartProduct) => {
              return(
              <li key={CartProduct._id}>
                <div className='cartItem'>
                  <div className='cartItemImg'>
                    <img src={CartProduct.image} alt="" />
                    <span>{CartProduct.name}</span>
                  </div>
                  <div className='cartItembtn'>
                    <button onClick={() => {decQty(CartProduct._id)}} className='minus'>-</button>
                    <b>{getQty(CartProduct._id)}</b>
                    <button onClick={() => {incQty(CartProduct._id)}} className='plus'>+</button>
                  </div>
                  <span>Rs.{getPrice(CartProduct.price,CartProduct._id)}</span>
                  <button onClick={() => {removeItem(CartProduct._id)}} >Delete</button>
                </div>
              </li> 
              )
            })
          } 
        </ul>
        <div className='cartTotal'>
          <b>Grand Total:</b> Rs. {total}
        </div>
        <div className='cartOrder'>
          <button onClick={() => order()}>Order Now</button>
        </div>
      </div> 
    </>
    :
    <div className="emptyCartImg">
      <img src={require('./Images/EmptyCart.png')} alt="emptyCart" />
    </div>
  )
}

export default Cart;