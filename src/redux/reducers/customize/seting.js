/*
 * @Author: zhanghongqiao
 * @Date: 2019-07-01 10:11:29
 * @Email: 991034150@qq.com
 * @Description: 我的课程
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2019-07-26 14:06:32
 */

import {guid} from '@/util/util';

const initialState = {
  isDrag: false,
  uuid: guid()
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'ISDRAG': // 打开右边设置
      return Object.assign({}, state, {
        isDrag: action.flag
      });
    case 'UPDATEUUID': // 更新uuid
      return Object.assign({}, state, {
        uuid: guid()
      });
    default:
      return state;
  }
}
