import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className="header">
        <div className="headerImage">
          <img className='headerPizza' src={require('./Images/Pizza.png')} alt="headerImg"/>
        </div>
        <div className="headerText">
          <span>Are you hungry?</span>
          <h1>Don't Wait!</h1>
          <Link to='/products'><button>Order Now</button></Link>
        </div>  
      </div>
    </>
  )
}

export default Home