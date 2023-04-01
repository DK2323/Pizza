import React, { useEffect, useState, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { CartContext } from './CartContext';

const SingleProduct = () => {
    const[singleProduct, setSingleProduct] = useState({});
    const {cart ,setCart} = useContext(CartContext);
    const[isAdding, setIsAdding] = useState(false);
    

    const params = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        fetch(`https://star-spark-pasta.glitch.me/api/products/${params._id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data) 
            setSingleProduct(data)})
    },[params._id])

    const addToCart = (e,product) => {
        e.preventDefault();

        setIsAdding(true);

        setTimeout(() => {
            setIsAdding(false);
        }, 500); 

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

               
    }



  return (
    <>
    <div className='singlePbox'>
        <button className='backBtn' onClick={() => {navigate(-1)}} >Back</button>
        <div className="singleP">
            <img src={singleProduct.image} alt="" />
            <div className='descript'>
                <h1>{singleProduct.name}</h1>   
                <div className='size'>{singleProduct.size}</div>
                <div className='price'>Rs. {singleProduct.price}</div>
                <button disabled={isAdding} onClick={(e) => addToCart(e,singleProduct) } className={`${isAdding ? 'singleProductG' : 'singleProductO'}`}>Add to cart</button>
            </div>
        </div>
    </div>
       
    </>
  )
}

export default SingleProduct