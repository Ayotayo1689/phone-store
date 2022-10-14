import React from 'react'
// import CartItem from './CartItem';

function CartBtn({value}) {
    const {cart} = value;
  
   

  return (
    <div className='container-fluid'>
       
        
        return (
            {/* <CartItem key={item.id} item={item} value={value} /> */}
            <div className='d-flex align-items-center justify-content-center ' >
                <button className='ml-auto button'>
              <i className="fas cart fa-cart-plus" /></button><span className='count'><div style={{border: "2px solid red", height: "20px", width: "20px",display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"red", color:"white", borderRadius: "50% "}}>{cart.length}</div></span>
              </div>
        )

       
    </div>
  )
}

export default CartBtn;