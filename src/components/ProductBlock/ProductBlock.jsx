import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addProductCart } from '../../redux/slices/cartSlice'
import { addFavorites } from '../../redux/slices/favoritesSlice'

export const ProductBlock = ({ id, img, title, rate, price, discount, clName }) => {
  const dispatch = useDispatch()
  
  const onClickAddCart = () => {
    const item = {
      id,
      img,
      title,
      price,
    };
    dispatch(addProductCart(item));
  };

  const onClickAddFavorites = () => {
    const favoritesItem = {
      id,
      img,
      title,
      price
    };
    dispatch(addFavorites(favoritesItem))
  }
  
  return (
    <>
      <div className='card__block--wrapper'>
        <div className='card__block--inner'>
        <div className='button__favorites icon'>
            <Link to='favorites' onClick={onClickAddFavorites}>
              <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.4867 1.65429C14.0706 -0.627558 18.0635 -0.551821 20.5528 1.90098C23.0409 4.35486 23.1267 8.2629 20.8124 10.812L11.4845 20L2.15892 10.812C-0.155442 8.2629 -0.0685429 4.34837 2.41851 1.90098C4.90996 -0.548575 8.89519 -0.630804 11.4867 1.65429ZM18.9952 3.42979C17.3452 1.80469 14.6833 1.73869 12.9563 3.26425L11.4878 4.56044L10.0183 3.26533C8.2858 1.73761 5.62935 1.80469 3.97498 3.43195C2.33601 5.04407 2.25351 7.62455 3.76379 9.32971L11.4856 16.937L19.2075 9.3308C20.7189 7.62455 20.6364 5.04732 18.9952 3.42979Z" fill="#838383"/>
              </svg>
            </Link>
          </div>
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
