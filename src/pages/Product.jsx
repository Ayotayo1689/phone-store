// import React from 'react'
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../Context';
import './product.css'

import React, { Component } from 'react'

export default class Product extends Component {
  render() {
    const {id, title, img, price, inCart} = this.props.product;
    return (
      <div className='col-6 mx-auto col-md-4 col-lg-3 my-3'>
        <div className="card">
         <ProductConsumer>
          {(value) =>(
             <div className="img-container p-5" onClick={()=> value.handleDetail(id)
             }>
             <Link to='/details'>
               <img src={img} alt="product" className='card-img-top' />
             </Link>
             <button className='cart-btn' disabled={inCart ? true :false} onClick={()=>{
               value.addToCart(id);
               value.openModal(id);
              }}>
               {inCart ?(
               <p className='text-capitalize mb-0' disabled> in cart</p>) : (<i className='fas fa-cart-plus'/> )}
             </button>
           </div>
          )}
        
         </ProductConsumer>
            <div className="card-footer d-flex justify-content-between">
              <h6 className='align-self-center mb-0' style={{fontStyle: "italic"}}>
                {title}
              </h6>
              <h4 className=' mb-0' style={{fontStyle: "italic"}}>
                <span className="margin">$</span>{price}
              </h4>
            </div>
        </div>
      </div> 
    )
  }
}


// function Product() {
//   const {id, title, img, price, inCart} = this.props.Product;
//   return (
//      <div className='col-9 mx-auto col-md-6 col-lg-e my-3'>
//      <div className="card">
//       <div className="img-container p-5" onClick={console.log('you clickes me on the img container')}>
//         <Link to='/details'>
//           <img src={img} alt="product" className='card-img-top' />
//         </Link>
//       </div>
//      </div>
//      </div> 
//   )
// }

// export default Product; 