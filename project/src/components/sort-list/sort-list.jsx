import React, {useState} from 'react';
//import {connect} from 'react-redux';
import {useSelector, useDispatch} from 'react-redux';
//import PropTypes from 'prop-types';
import Sort from '../sort/sort.jsx';
import {SortType} from '../../const.js';
//import {ActionCreator} from '../../store/action.js';
import { getSortType } from '../../store/changer/selectors.js';
import {changeSortType} from '../../store/action.js';

function SortList() {

  //const {sortType, onSortChange} = props;
  const dispatch = useDispatch();
  const sortType = useSelector(getSortType);
  const onSortChange = dispatch(changeSortType(sortType));

  const [isSortListOpen, setIsSortListOpen] = useState(false);

  const handleSortClick = () => {
    setIsSortListOpen((prevState) => !prevState);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0" onClick={handleSortClick}>
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isSortListOpen ? 'places__options--opened' : ''}`}>
        {Object.values(SortType).map((sort) =>
          <Sort key={sort} isActive={sortType === sort} sortType={sort} onSortChange={onSortChange}/>,
        )}
      </ul>
    </form>
  );
}

//SortList.propTypes = {
//  sortType: PropTypes.string.isRequired,
//  onSortChange: PropTypes.func.isRequired,
//};

//const mapStateToProps = (state) => ({
//  sortType: state.sortType,
//});
//
//const mapDispatchToProps = (dispatch) => ({
//  onSortChange(sortType) {
//    dispatch(ActionCreator.changeSortType(sortType));
//  },
//});

export default SortList;
//export default connect(mapStateToProps, mapDispatchToProps)(SortList);
