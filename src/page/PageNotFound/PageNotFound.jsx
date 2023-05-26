import React from 'react';
import style from './style.module.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const PageNotFound = () => {
  const { t } = useTranslation();
  return (
    <div className={style.container}>
      <h1 className={style.h1}>{t("Данная страница не найдена")}</h1>
      <p className={style.home}><Link to='/'>{t("Вернуться на главную")}</Link></p>
    </div>
  )
}

export default PageNotFound;