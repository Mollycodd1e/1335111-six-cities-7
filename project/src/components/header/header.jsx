import React from 'react';
import {useSelector} from 'react-redux';
import Logo from '../logo/logo.jsx';
import WithAuth from '../with-auth/with-auth.jsx';
import WithoutAuth from '../without-auth/without-auth.jsx';
import {AuthorizationStatus} from '../../const.js';
import {getAuthorizationStatus} from '../../store/user/selectors.js';

function Header() {

  const authorizationStatus = useSelector(getAuthorizationStatus);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {authorizationStatus === AuthorizationStatus.AUTH ?
                <WithAuth /> : <WithoutAuth />}
            </ul>
          </nav>
        </div>
      </div>
    </header>);
}

export default Header;
