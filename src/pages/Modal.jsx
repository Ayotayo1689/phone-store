import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../Context'
import './modal.css'



export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value)=>{
            const {modalOpen,closeModal} = value;
            const{img, title, price} = value.modalProduct;

            if(!modalOpen){
                return null;
            }else{
              return (<div className='modal-container'>
                    <div className="container">
                        <div className="row">
                            <div id='modal' className="col-8 mx-auto col-md-3 col-lg-4 text-center text-capitalize p-4 " >
                                <h5>item added to the cart</h5>
                                <img src={img} alt="/"className='img-fluid' />
                                <h5>{title}</h5>
                                <h5 className='text-muted'> price : $ {price}</h5>
                                <Link to="/">
                                    <button onClick={()=> closeModal()}>
                                       store
                                    </button>
                                </Link>
                                <Link to="/cart">
                                    <button style={{marginTop: "5px"}} onClick={()=> closeModal()}>
                                       go to cart
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        }}
      </ProductConsumer>
    )
  }
}
