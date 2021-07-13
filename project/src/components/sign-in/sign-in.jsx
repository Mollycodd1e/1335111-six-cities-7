import React, {useRef} from 'react';
import Logo from '../logo/logo.jsx';
import {useHistory} from 'react-router-dom';
//import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {login} from '../../store/api-action.js';
import {AppRoute} from '../../const.js';

function SignIn () {

  //const {onSubmit} = props;
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();

  const history = useHistory();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    dispatch(login({
      login: emailRef.current.value,
      password: passwordRef.current.value,
    }));

    history.push(AppRoute.MAIN);
  };

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" xlinkHref="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input ref={emailRef} className="login__input form__input" type="email" name="email" placeholder="Email" required/>
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input ref={passwordRef} className="login__input form__input" type="password" name="password" placeholder="Password" required/>
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" xlinkHref="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

//SignIn.propTypes = {
//  onSubmit: PropTypes.func.isRequired,
//};
//
//const mapDispatchToProps = (dispatch) => ({
//  onSubmit(authData) {
//    dispatch(login(authData));
//  },
//});

export default SignIn;
//export default connect(null, mapDispatchToProps)(SignIn);
