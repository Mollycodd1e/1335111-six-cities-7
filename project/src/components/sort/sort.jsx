import React from 'react';
import PropTypes from 'prop-types';

function Sort(props) {

  const {sortType, isActive, onSortChange} = props;

  const handleSortChange = () => {
    onSortChange(sortType);
  };

  return (
    <li className={`places__option ${isActive ? 'places__option--active' : ''}`} tabIndex="0" onClick={handleSortChange}>{sortType}</li>
  );
}

Sort.propTypes = {
  sortType: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onSortChange: PropTypes.func.isRequired,
};

export default Sort;
