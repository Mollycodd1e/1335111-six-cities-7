import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Sort from '../sort/sort.jsx';
import {SortType} from '../../const.js';
import {getSortType} from '../../store/changer/selectors.js';
import {changeSortType} from '../../store/action.js';

function SortList() {

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

export default SortList;
