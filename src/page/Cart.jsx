import React, { useEffect } from 'react'
import { CartItem } from '../components/CartItem'
import { useSelector } from 'react-redux'
import { Footer } from '../components/index';
import { CartEmpty } from './PageNotFound/CartEmpty/CartEmpty';

const Cart = () => {
  const products = useSelector((state) => state.cart.items); 
  const { items, totalPrice } = useSelector((state) => state.cart);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  if(items.length === 0) {
    return <CartEmpty />
  }

  return (
    <div className='container'>
      <div className='cart'>
        <div className='cart__top'>
          <h4 className='content__title'>Корзина</h4>
        </div>
        <div className='content__cart'>
        <div className='content__items'>
          {products.map((obj) => <CartItem key={obj.id} {...obj}/>)}
        </div>
        <div className='cart__total--price__container'>
          <duv className='cart__total--block'>
            <div className='cart__total--top'>
              <h3 className='total_price-title'>итого</h3>
              <b className='total__price'>{totalPrice} ₽</b>
            </div>
            <div className='button__cart pay--btn'>
              <span>Перейти к оформлению</span>
            </div>
          </duv>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Cart;