import React from 'react'
import {Link} from 'react-router-dom'
import './cart.css'

export default function CartTotals({value}) {
  const {cartSubTotal, cartTax, cartTotal, clearCart} = value
  return (
    <>
      <div className="container"  >
        <div className="row">
          <div className=" text-right" style={{textAlign: "right"}}>
            <Link to="/">
              <button className='btn clear-btn btn-outline-danger text-uppercase mb-3 px-5' type='button'onClick={()=> clearCart()} >clear cart</button>
            </Link>
            <h5>
              <span className="text-title">
                Subtotal : <strong>${cartSubTotal}</strong>
              </span>
            </h5>
            <h5>
              <span className="text-title">
                Tax : <strong>${cartTax}</strong>
              </span>
            </h5>
            <h5>
              <span className="text-title">
                Total : <strong>${cartTotal}</strong>
              </span>
            </h5>
          </div>
        </div>
      </div>
    </>
  )
}
