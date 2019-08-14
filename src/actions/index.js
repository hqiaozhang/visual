import {fetch} from '@/util/request';
import * as types from './types';

// 请求成功
const chartDataSuccess = (data) => ({
  type: 'CHARTDATASUCCESS',
  data,
});

// 单元详情
const studyunitDetailsSuccess = (data) => ({
  type: types.STUDYUNITDETAILSSUCCESS,
  data,
});

// 请求出错
const requestFailed = (data) => ({
  type: types.REQUEST_FAILED,
  data: '请求出错'
});

// 查询单元
export const chartDataRequest = (url) => dispatch => fetch(url, (data) => {
  dispatch(chartDataSuccess(data));
});

 