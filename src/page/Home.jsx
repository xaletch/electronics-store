import React, { useEffect } from 'react';
import { headphones, wirelessHeadphones } from '../assets/product';
import { ProductBlock } from '../components/ProductBlock/ProductBlock';
import { Footer } from '../components/index';

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <>
      <div className='container'>
        <div className='content__items'>
          <h4 className='content__title'>Наушники</h4>
          <div className='content__product'>
            {headphones.map((obj) => <ProductBlock key={obj.id} {...obj} />)}
          </div>
        </div>
        <div className='content__items'>
          <h4 className='content__title'>Беспроводные наушники</h4>
          <div className='content__product'>
            {wirelessHeadphones.map((obj) => <ProductBlock key={obj.id} {...obj} />)}
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Home;