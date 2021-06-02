import React from 'react';
import Main from '../main/main.jsx';
import PropTypes from 'prop-types';

function App(props) {
  const {cardsCount} = props;

  return (
    <Main cardsCount={cardsCount}/>
  );
}

App.propTypes = {
  cardsCount: PropTypes.number.isRequired,
};

export default App;
