import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addProductCart } from '../../redux/slices/cartSlice'

export const ProductBlock = ({ id, img, title, rate, price, discount, clName }) => {
  const dispatch = useDispatch()
  
  const onClickAddCart = () => {
    const item = {
      id,
      img,
      title,
      price
    };
    dispatch(addProductCart(item));
  };
  
  return (
    <>
      <div className='card__block--wrapper'>
        <div className='card__block--inner'>
          <div className='card__image'>
            <img className={`card__img ${clName}`} src={img} alt=''/>
          </div>
          <div className='card__product--description'>
          <div className='card__block'>
            <h3 className='electronic__title title'>{title}</h3>
            <div className='card__price'>
              <b className='electronic__price price'>{price} ₽</b>
              <span className='price__discount'>{discount}</span>
            </div>
            </div>
            <div className='card__content--end'>
              <div className='button__rating'>
                <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.6268 17.6614L5.41618 22.0127L7.37647 13.892L0.960754 8.462L9.38215 7.79538L12.6268 0.0867615L15.8715 7.79538L24.2941 8.462L17.8771 13.892L19.8374 22.0127L12.6268 17.6614Z" fill="#FFCE7F"/>
                </svg>
                <span className='electronic__rating'>{rate}</span>
              </div>
              <Link className='button__by' to='cart'>
                <span onClick={onClickAddCart}>Купить</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
