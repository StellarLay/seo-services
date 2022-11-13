import React from 'react';
import './auth.scss';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faVk, faTelegram } from '@fortawesome/free-brands-svg-icons';

const Registration = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('чпуньк');
  };

  return (
    <div className='reg-section'>
      <form className='reg-section__form' onSubmit={handleSubmit}>
        <div className='reg-section__form__title-block'>
          <span className='reg-section__form-title'>Регистрация</span>
          <span className='reg-section__form-subtitle'>
            Создайте свой аккаунт
          </span>
        </div>
        <div className='reg-section__form-inputs'>
          <div className='reg-section__form-inputs__input'>
            <FontAwesomeIcon icon={faUser} className='user-icon' />
            <input
              id='form-username'
              type='text'
              name='username'
              placeholder='Имя пользователя'
            />
          </div>
          <div className='reg-section__form-inputs__input'>
            <FontAwesomeIcon icon={faEnvelope} className='mail-icon' />
            <input
              id='form-email'
              type='email'
              name='email'
              placeholder='E-mail'
            />
          </div>
          <div className='reg-section__form-inputs__input'>
            <FontAwesomeIcon icon={faLock} className='password-icon' />
            <input
              id='form-password'
              type='password'
              name='password'
              placeholder='Пароль'
            />
          </div>
          <div className='reg-section__form-inputs__input'>
            <input
              id='form-confirm-password'
              type='password'
              name='confirm-password'
              placeholder='Подтвердите пароль'
            />
          </div>
        </div>
        <input type='submit' value='Зарегистрироваться' />
        <span className='reg-section__is-account'>
          Уже есть аккаунт? <a href='/'>Войти</a>
        </span>
        <div className='reg-section__social-media'>
          <FontAwesomeIcon icon={faGithub} className='social-icon' />
          <FontAwesomeIcon icon={faVk} className='social-icon' />
          <FontAwesomeIcon icon={faTelegram} className='social-icon' />
        </div>
      </form>
    </div>
  );
};

export default Registration;
