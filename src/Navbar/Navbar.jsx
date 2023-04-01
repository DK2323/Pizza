import React, { useContext } from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import { CartContext } from '../CartContext'

const Navbar = () => {

  const {cart} = useContext(CartContext)

  return (
    <>
    <nav className='navbar'>
      <img className='logo' src={require('../Images/PizzaLogo.png')} alt="logo"/>
      <ul>
        <li><Link className='link' to='/'>Home</Link></li>
        <li><Link className='link' to='/products'>Products</Link></li>
        <li>
            <Link className='cartLink' to="/cart">
              <div>
                <span>{cart.totalItems ? cart.totalItems : 0}</span>
                <img className='cartImg' src={require('../Images/CartLogo.png')} alt="cart-img" />
              </div>
            </Link>
        </li> 
      </ul>
    </nav>
    </>
  )
}

export default Navbar