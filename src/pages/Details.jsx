import React from 'react'
import "./Default.jsx"
import {Link} from "react-router-dom"
import { ProductConsumer } from '../Context';
import './product.css'

function Details() {
  return (
    <ProductConsumer>
    {(value)=>{
     const {id, company, img, info, price, title, inCart} = value.detailProduct;
     return (
      <div className="container py-5">
        <div className="row">
            <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
              <h1>{title}</h1>
            </div>
         </div>
         <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <img src={img} alt="/" className="img-fluid" />
          </div>
          {/* <div className="col"></div> */}
          <div className="col-10 mx-auto col-md-6 my-3 
          text-capitalize">
            <h1>model : {title}</h1>
            <h4 className="text-title text-uppercase text-muted mt-3 mb-2">made by: <span className='text-uppercase'>{company}</span></h4>
            <h4 className='text-blue'>
              <strong>
                price:<span>$</span>{price}
              </strong>
            </h4>
            <p className="text-capitalize font-weight-bold mt-3 mb-0">some info about product:</p>
            <p className="text-muted lead">{info}</p>
            <div>
              <Link to="/">
                <button className="back">back to products</button>
              </Link>
             
                {/* <button className="add-to-cart" disabled={inCart?true:false} onClick={()=>{
                  value.addTocCart(id);
                }}>{inCart ? "in cart" : "add to card"}</button> */}
                <ProductConsumer>
          {(value) =>(
             
             
             <button className='add-to-cart' disabled={inCart ? true :false} onClick={()=>{
               value.addToCart(id);
               value.openModal(id);
              }}>
               {inCart ? "in cart" : "add to card"}
             </button>
          )}
        
         </ProductConsumer>
              
            </div>
          </div>
         </div>
        </div>
     )
    }}
    </ProductConsumer>
  )
}

export default Details;