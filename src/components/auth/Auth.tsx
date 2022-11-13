import React from 'react';
import './auth.scss';
import './media.scss';

// Components
import SplashScreen from '../layouts/SplashScreen/SplashScreen';
import Registration from './Registration';

const Auth = () => {
  return (
    <div className='auth-page'>
      <SplashScreen />
      <Registration />
    </div>
  );
};

export default Auth;
