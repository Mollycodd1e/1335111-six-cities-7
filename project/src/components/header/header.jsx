import React from 'react';
//import {connect} from 'react-redux';
import { useSelector } from 'react-redux';
//import PropTypes from 'prop-types';
import Logo from '../logo/logo.jsx';
import WithAuth from '../with-auth/with-auth.jsx';
import WithoutAuth from '../without-auth/withoutAuth.jsx';
import {AuthorizationStatus} from '../../const.js';
import { getAuthorizationStatus } from '../../store/user/selectors.js';

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

//Header.propTypes = {
//  authorizationStatus: PropTypes.string.isRequired,
//};
//
//const mapStateToProps = (state) => ({
//  authorizationStatus: state.authorizationStatus,
//});

export default Header;
//export default connect(mapStateToProps)(Header);
