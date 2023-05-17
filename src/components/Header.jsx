import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const Header = () => {
  const { items, totalPrice } = useSelector((state) => state.cart);
  const { itemsFavorites } = useSelector((state) => state.favorites)
  const isLocalStorage = useRef(false);

  useEffect(() => {
    if (isLocalStorage.current) {
      const json = JSON.stringify(items, totalPrice);
      localStorage.setItem('cart', json);
    };

    if (isLocalStorage.current) {
      const jsonFavorites = JSON.stringify(itemsFavorites);
      localStorage.setItem('favorites', jsonFavorites);
    };

    isLocalStorage.current = true;
  }, [items, totalPrice, itemsFavorites]);

  return (
    <div className='header'>
      <div className='header__content container'>
      <div className='header__logo'>
        <Link to='/'>
          <h2 className='header__logo logo'>QPICK</h2>
        </Link>
      </div>
        <div className='header__card'>
          <button className='button__favorites icon'>
            <Link to='favorites'>
              <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.4867 1.65429C14.0706 -0.627558 18.0635 -0.551821 20.5528 1.90098C23.0409 4.35486 23.1267 8.2629 20.8124 10.812L11.4845 20L2.15892 10.812C-0.155442 8.2629 -0.0685429 4.34837 2.41851 1.90098C4.90996 -0.548575 8.89519 -0.630804 11.4867 1.65429ZM18.9952 3.42979C17.3452 1.80469 14.6833 1.73869 12.9563 3.26425L11.4878 4.56044L10.0183 3.26533C8.2858 1.73761 5.62935 1.80469 3.97498 3.43195C2.33601 5.04407 2.25351 7.62455 3.76379 9.32971L11.4856 16.937L19.2075 9.3308C20.7189 7.62455 20.6364 5.04732 18.9952 3.42979Z" fill="#838383"/>
              </svg>
            {itemsFavorites.length === 0 ? '' : <i className='favorites__quantity quantity'>{itemsFavorites.length}</i>}
            </Link>
          </button>
          <button className='button__card--item icon'>
            <Link to='cart'>
              <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.08589 6.04602L0.48584 2.50535L2.05663 0.959991L5.65556 4.50175H22.5757C22.7487 4.50174 22.9193 4.54152 23.074 4.61792C23.2286 4.69431 23.3629 4.80521 23.4662 4.94176C23.5695 5.07831 23.639 5.23673 23.669 5.40438C23.699 5.57202 23.6888 5.74425 23.6391 5.90732L20.9749 14.6443C20.9064 14.8694 20.7659 15.0667 20.5743 15.207C20.3827 15.3473 20.1503 15.423 19.9114 15.423H6.30608V17.6072H18.5172V19.7915H5.19598C4.90157 19.7915 4.61921 19.6764 4.41103 19.4716C4.20284 19.2668 4.08589 18.989 4.08589 18.6994V6.04602ZM6.30608 6.686V13.2387H19.0855L21.0837 6.686H6.30608ZM5.75103 24.16C5.30941 24.16 4.88587 23.9874 4.5736 23.6802C4.26132 23.373 4.08589 22.9563 4.08589 22.5218C4.08589 22.0873 4.26132 21.6707 4.5736 21.3634C4.88587 21.0562 5.30941 20.8836 5.75103 20.8836C6.19266 20.8836 6.61619 21.0562 6.92847 21.3634C7.24074 21.6707 7.41618 22.0873 7.41618 22.5218C7.41618 22.9563 7.24074 23.373 6.92847 23.6802C6.61619 23.9874 6.19266 24.16 5.75103 24.16ZM19.0722 24.16C18.6306 24.16 18.207 23.9874 17.8948 23.6802C17.5825 23.373 17.4071 22.9563 17.4071 22.5218C17.4071 22.0873 17.5825 21.6707 17.8948 21.3634C18.207 21.0562 18.6306 20.8836 19.0722 20.8836C19.5138 20.8836 19.9374 21.0562 20.2496 21.3634C20.5619 21.6707 20.7373 22.0873 20.7373 22.5218C20.7373 22.9563 20.5619 23.373 20.2496 23.6802C19.9374 23.9874 19.5138 24.16 19.0722 24.16Z" fill="#838383"/>
              </svg>
              {items.length === 0 ? '' : <i className='card__quantity quantity'>{items.length}</i>}
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}
