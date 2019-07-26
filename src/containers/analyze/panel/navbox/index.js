import React, {Components} from 'react';
import {Link} from 'react-router-dom';
import './index.scss';

class Navbox extends Components {
  render() {
    return (
      <div className="navbox">
        <div className="navbox-tiles">
          <Link href="networks/networks.html" className="tile" target="_blank">
            <div className="icon"><i className="fa fa-group" /></div><span className="title">关系网络分析</span>
          </Link>
          <Link href="analyze_3d.html" className="tile" target="_blank">
            <div className="icon"><i className="fa fa-joomla" /></div><span className="title">三维网络场景</span>
          </Link>
          <Link href="dashboard/index.html" className="tile" target="_blank">
            <div className="icon"><i className="fa fa-dashboard" /></div><span className="title">自定义大屏图表</span>
          </Link>
          <Link href="university/index.html" className="tile" target="_blank">
            <div className="icon"><i className="fa fa-globe" /></div><span className="title">高校可视图谱</span>
          </Link>
          <Link href="knowledge/index.html" className="tile" target="_blank">
            <div className="icon"><i className="fa fa-book" /></div><span className="title">知识图谱查询</span>
          </Link>
          <Link href="dev-doc/index.html" className="tile" target="_blank">
            <div className="icon"><i className="fa fa-leanpub" /></div><span className="title">开发手册</span>
          </Link>
        </div>
        <div className="bottom-bar"><a id="closeTopNavBtn" href="javascript:;"><i className="fa fa-angle-double-up" /></a></div>
      </div>
    );
  }
}
