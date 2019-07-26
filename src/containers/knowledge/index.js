/*
 * @Author: zhanghongqiao
 * @Date: 2019-07-25 13:39:26
 * @Email: 991034150@qq.com
 * @Description: 首页
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2019-07-25 16:40:58
 */
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './index.scss';

export default class Knowledge extends Component {
  render() {
    return (
      <div className="knowledge_body" >
        <section className="search-wrap">
          <div className="container">
            <h3>实体、概念、网络</h3>
            <p>您可以输入您感兴趣的人物、地方、事件进行查询，我们有的都会给您“一网打尽”</p>
            <div className="search">
              <input type="text" id="keywords" placeholder="输入您感兴趣的人物、地方、事件查询，如：重庆" />
              <span id="searchBtn" className="search-btn">查询</span>
            </div>
          </div>
          <div className="imglist1">
            <ul className="clear">
              <li>
                <Link to="/analyze">
                  <img src="http://media.graphvis.cn/hangt-demo.jpg" />
                  <span>复杂网络分析</span>
                </Link>
              </li>
              <li>
                <Link to="/analyze_3d">
                  <img src="http://media.graphvis.cn/zhuanli-demo.jpg" />
                  <span>三维网络可视化</span>
                </Link>
              </li>
              <li>
                <Link to="/networks/networks">
                  <img src="http://media.graphvis.cn/22221.jpg" />
                  <span>实体网络可视分析</span>
                </Link>
              </li>
              <li>
                <Link to="/customize">
                  <img src="http://media.graphvis.cn/6.jpg" />
                  <span>自定义大屏图表</span>
                </Link>
              </li>
              <li>
                <Link to="/university">
                  <img src="http://media.graphvis.cn/12221.jpg" />
                  <span>全国高等院校可视化</span>
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}
