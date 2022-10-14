import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import ProductList from '../pages/ProductList'
import Cart from '../pages/cart/Cart'
import Details from '../pages/Details'
import Default from '../pages/Default'
import './Navbar.css'
import logo from './logo.svg'

function Navbar() {
  return (
    <>
        <nav className='navbar navv navbar-expand-sm  navbar-dark px-sm-5'>
          <div>
          <img src={logo} alt="/" className='navbar-brand' />
           <ul className='navbar-nav align-items-center'>
                <li className='nav-item ml-5'><Link to='/' className='nav-link products' >Products</Link>
                </li>
            </ul>
           {/* <div className="search">
            <input type="text" placeholder='Search...' /><i className="fas fa-cart-plus" />
           </div> */}
          </div>
            <div>
            <Link to='/cart' className='ml-auto' >
              <div className='d-flex align-items-center justify-content-center ' >
                <button className='ml-auto button'>
              <i className="fas cart fa-cart-plus" /></button>
              
   
              </div>
              </Link>
            </div>
            
        </nav>
        <Routes>
         {/* <Navbar/> */}
           <Route exact path='/' element={<ProductList/>}/>
           <Route path='/details' element={<Details/>}/>
           <Route path='/Cart' element={<Cart/>}/>
           <Route path='*' element={<Default />}/>
      </Routes>
    </>
  )
}

export default Navbar