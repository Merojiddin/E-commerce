import React from 'react';
import { useDispatch, useSelector } from "react-redux"
import { addCart, delCart } from '../redux/action';

function Cart() {
  const state = useSelector((state) => state.handleCart)
  const dispatch = useDispatch()

  const handlePlusButton = (product) => {
    dispatch(addCart(product))
  }
  const handleMinusButton = (product) => {
    dispatch(delCart(product))
  }

  const cartItems = (product) => {
    return (
      <div key={product.id} className='px-4 my-5 bg-light rounded-3'>
        <div className='container py-4 row justify-content-evenly' >
          <div className='col-md-4'>
            <img src={product.image} alt={product.title} height="200px" width="180px" />
          </div>
          <div className='col-md-4'>
            <h3>{product.title}</h3>
            <p className='lead fw-bold'>
              {product.qty} X $ {product.price} =
              $ {product.qty * product.price}
            </p>
            <button className='btn btn-outline-dark me-4' onClick={() => { handleMinusButton(product) }}>
              <i className='fa fa-minus'></i>
            </button>
            <button className='btn btn-outline-dark' onClick={() => handlePlusButton(product)}>
              <i className='fa fa-plus'></i>
            </button>
          </div>
        </div>
      </div>
    )
  }

  const empytyCart = () => {
    return (
      <>
        <div className='px-4 my-5 bg-light rounded-3 justify-content-center' style={{ display: "flex" }}>
          <div className='container py-4 row' >
            <h3>
              No Element in the cart
            </h3>
          </div>
        </div>
      </>
    )
  }

  return (

    <div>
      {state.length === 0 ? empytyCart() : state.length !== 0 && state.map(cartItems)}
    </div >);
}

export default Cart;
