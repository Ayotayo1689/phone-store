import React from 'react';
// import Title from '../Title';
import CartColumns from "./CartColumns"
import "./cart.css"
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../../Context';
import CartList from './CartList';
import CartTotal from './CartTotals';


function Cart() {
  return (
    <section style={{margin:"0" , padding:'0'}}>
      <ProductConsumer>
        {value => {
          const {cart} = value;
          if (cart.length>0){
            return(
              <>
              <h1  style={{textAlign:"center"}}>your Cart</h1>
      {/* <Title name="your" title="cart" /> */}
      <CartColumns />
      <CartList value = {value} />
      <CartTotal value = {value} />
      </>
            )
            }else {
              return(
                <EmptyCart/>
              )
            }
        }}
      </ProductConsumer>
      
     
    </section>
  )
}

export default Cart;