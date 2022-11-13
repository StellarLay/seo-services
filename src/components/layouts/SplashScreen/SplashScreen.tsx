import React from 'react';
import './splash.scss';

import Logo from '../../../assets/img/savetool.svg';

const SplashScreen = () => {
  return (
    <div className='splashscreen'>
      <div className='splashscreen__title-block'>
        <h1 className='splashscreen__title'>Seo Services</h1>
        <span className='splashscreen__sub-title'>
          Удобные инструменты для эффективной работы!
        </span>
      </div>
      <p className='splashscreen__description'>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </p>
      <img className='splashscreen__logo' src={Logo} alt='logo' />
    </div>
  );
};

export default SplashScreen;
