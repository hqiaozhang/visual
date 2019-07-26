
import {combineReducers} from 'redux';
import allSeting from './allSeting';
import * as customize from './customize';

//  combineReducers 用来把多个 reducer 创建成一个根 reducer，即合并所有reducer
const rootReducer = combineReducers({
  allSeting,
  ...customize
});

export default rootReducer;
