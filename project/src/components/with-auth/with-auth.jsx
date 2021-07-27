import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {AppRoute} from '../../const';
import {logoutAction} from '../../store/api-action.js';
import {getUsername} from '../../store/user/selectors';

function WithAuth() {

  const username = useSelector(getUsername);
  const dispatch = useDispatch();

  const handleLogoutClick = () => {
    dispatch(logoutAction());
  };

  return (
    <ul className="header__nav-list">
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to={AppRoute.FAVORITES}>
          <div className="header__avatar-wrapper user__avatar-wrapper">
          </div>
          <span className="header__user-name user__name">{username}</span>
        </Link>
      </li>
      <li className="header__nav-item">
        <Link className="header__nav-link" to={AppRoute.SIGNIN}>
          <span className="header__signout" onClick={handleLogoutClick}>Sign out</span>
        </Link>
      </li>
    </ul>
  );
}

export default WithAuth;
