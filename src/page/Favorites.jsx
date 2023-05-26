import React from 'react';
import { Footer } from '../components';
import { useSelector } from 'react-redux';
import { FavoritesEmpty } from './PageNotFound/FavoritesEmpty/FavoritesEmpty';
import { FavoritesItem } from '../components/FavoritesItem';
import { useTranslation } from 'react-i18next';

const Favorites = () => {
  const favoritesItem = useSelector((state) => state.favorites.itemsFavorites);
  const { itemsFavorites } = useSelector((state) => state.favorites);

  const { t } = useTranslation();

  if(itemsFavorites.length === 0) {
    return <FavoritesEmpty />
  };

  return (
    <>
      <div className='container' >
        <h3>{t("Избранное")}</h3>
        <div className='favorites__container'>
          {favoritesItem.map((obj) => <FavoritesItem key={obj.id} {...obj}/>)}
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Favorites;