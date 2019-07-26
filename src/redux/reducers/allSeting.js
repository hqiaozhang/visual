/*
 * @Author: zhanghongqiao
 * @Date: 2019-07-01 10:11:29
 * @Email: 991034150@qq.com
 * @Description: 我的课程
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2019-07-25 13:31:55
 */


const initialState = {
  isOpenSeting: true,
  wrapperBg: 'blue',
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'OPENSETING': // 打开右边设置
      return Object.assign({}, state, {
        isOpenSeting: true
      });
    case 'CLOSESETING': // 关闭右边设置
      return Object.assign({}, state, {
        isOpenSeting: false
      });
    case 'CHANGEBODYBG': // 修改body背景
      return Object.assign({}, state, {
        wrapperBg: action.className
      });
    default:
      return state;
  }
}
