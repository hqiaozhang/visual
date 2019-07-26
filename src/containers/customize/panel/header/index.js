import React, {Component} from 'react';
import './index.scss';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo">
          <img src="http://www.graphvis.cn/graphvis/dashboard/images/logo1.png" /><span>自定义大屏</span>
        </div>
        <div className="header-tabs">
          <ul>
            <li>
              <div className="tabs-item">
                <a href="../index.html" target="_blank"><i className="fa fa-home" />首页</a>
              </div>
            </li>
            <li>
              <div className="tabs-item">
                <a href="../analyze.html" target="_blank"><i className="fa fa-users" />复杂网络</a>
              </div>
            </li>
            <li>
              <div className="tabs-item">
                <a href="../networks/networks.html" target="_blank"><i className="fa fa-group" />关系网络</a>
              </div>
            </li>
            <li>
              <div className="tabs-item">
                <a href="../knowledge/index.html" target="_blank"><i className="fa fa-book" />知识图谱</a>
              </div>
            </li>
            <li>
              <div className="tabs-item">
                <a href="../university/index.html" target="_blank"><i className="fa fa-globe" />全国高校分布</a>
              </div>
            </li>
          </ul>
        </div>
        <div className="header-menu">
          <a id="screen-shot" className="btn btn-primary" href="javascript:;" title="截屏"><i className="fa fa-camera" /></a>
          <a id="full-screen" className="btn btn-primary" href="javascript:;" title="全屏"><i className="fa  fa-arrows-alt" /></a>
          <div className="btn-group" title="主题设置">
            <button type="button" className="btn btn-primary"><i className="fa fa-cog" />&nbsp;主题</button>
            <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
              <span className="caret" />
            </button>
            <ul id="themeType" className="dropdown-menu" role="menu"><li className="current" data-type="default"><a href="javascript:;">默认</a></li><li data-type="dark"><a href="javascript:;">黑色</a></li><li data-type="vintage"><a href="javascript:;">复古色系</a></li><li data-type="macarons"><a href="javascript:;">简洁色系</a></li><li data-type="infographic"><a href="javascript:;">醒目色系</a></li><li data-type="shine"><a href="javascript:;">炫光色系</a></li><li data-type="roma"><a href="javascript:;">玫瑰色系</a></li></ul>
          </div>
        </div>
      </div>
    );
  }
}
