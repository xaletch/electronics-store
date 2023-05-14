import React from 'react';
import style from '../style.module.scss';
import { Link } from 'react-router-dom';

export const CartEmpty = () => {
  return (
    <div className={style.container}>
        <h1 className={style.h1}>Ваша корзина пуста</h1>
        <p className={style.home}><Link to='/'>К списку товаров</Link></p>
    </div>
  )
}
