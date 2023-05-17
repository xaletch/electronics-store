import React from 'react'
import style from './style.module.scss'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className={style.container}>
      <h1 className={style.h1}>Данная страница не найдена</h1>
      <p className={style.home}><Link to='/'>Вернуться на главную</Link></p>
    </div>
  )
}

export default PageNotFound;