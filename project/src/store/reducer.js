import {combineReducers} from 'redux';
import {user} from './user/user.js';
import {data} from './data/data.js';
import {changer} from './changer/changer.js';

export const NameSpace = {
  DATA: 'DATA',
  CHANGER: 'CHANGER',
  USER: 'USER',
};

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.CHANGER]: changer,
  [NameSpace.USER]: user,
});
