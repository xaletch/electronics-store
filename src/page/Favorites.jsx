import React from 'react';
import { Footer } from '../components';
import { useSelector } from 'react-redux';
import { FavoritesEmpty } from './PageNotFound/FavoritesEmpty/FavoritesEmpty';
import { FavoritesItem } from '../components/FavoritesItem';

const Favorites = () => {
  const favoritesItem = useSelector((state) => state.favorites.itemsFavorites)
  const { itemsFavorites } = useSelector((state) => state.favorites)

  if(itemsFavorites.length === 0) {
    return <FavoritesEmpty />
  }

  return (
    <>
      <div className='container' >
        <h3>Избранное</h3>
        <div className='favorites__container'>
          {favoritesItem.map((obj) => <FavoritesItem key={obj.id} {...obj}/>)}
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Favorites;