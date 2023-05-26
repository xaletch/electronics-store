import React from 'react'
import style from '../style.module.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


export const FavoritesEmpty = () => {
  const { t } = useTranslation();
  
  return (
    <div className={style.container}>
        <h1 className={style.h1}>{t("В избранном ничего нет")}</h1>
        <p className={style.home}><Link to='/'>{t("К списку товаров")}</Link></p>
    </div>
  )
}
