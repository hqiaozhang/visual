import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './index.scss';

const mapStateToProps = ({allSeting}) => ({
  isOpenSeting: allSeting.isOpenSeting
});

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFull: false,
      isOpenNavbox: false,
    };
  }
  /**
   * @description 打开设置
   */
  handleSeting() {
    if (this.props.isOpenSeting) {
      this.props.dispatch({type: 'CLOSESETING'});
    } else {
      this.props.dispatch({type: 'OPENSETING'});
    }
  }
  /**
   * @description 开启全屏
   */
  openFullscreen() {
    this.setState({
      isFull: true
    });
    const docElm = document.documentElement;
    //W3C
    if (docElm.requestFullscreen) {
      docElm.requestFullscreen();
    }
    //FireFox
    else if (docElm.mozRequestFullScreen) {
      docElm.mozRequestFullScreen();
    }
    //Chrome等
    else if (docElm.webkitRequestFullScreen) {
      docElm.webkitRequestFullScreen();
    }
    //IE11
    else if (docElm.msRequestFullscreen) {
      docElm.msRequestFullscreen();
    }
  }
  /**
   * @description 关闭全屏
   */
  closeFullscreen() {
    this.setState({
      isFull: false
    });
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }
  handleIsOpenNavbox(state) {
    this.setState({
      isOpenNavbox: !state
    });
  }

  render() {
    const {isFull, isOpenNavbox} = this.state;
    return (
      <div className={`top-bar ${isOpenNavbox ? 'navbox-open' : ''}`}>
        <nav className="animenu" >
          <ul >
            <ul className="animenu__nav">
              <li>
                <a id="navbox-trigger" onClick={this.handleIsOpenNavbox.bind(this, isOpenNavbox)} className="logo-li">
                  <i className="fa fa-windows" />
                </a>
              </li>
              <li>
                <a to="javascript:;"><i className="fa fa-folder-open" />文件</a>
                <ul type="file" className="animenu__nav__child">
                  <li method="saveLocal"><a to="javascript:;"><i className="fa fa-save" />保存当前记录</a></li>
                  <li method="history"><a id="scanHistory" to="javascript:;"><i className="fa fa-history" />最近保存记录</a></li>
                  <li method="exportJson"><a id="exportJsonFile" to="javascript:;"><i className="fa fa-cloud-download" />导出图数据</a></li>
                  <li method="saveimg"><a to="javascript:;"><i className="fa fa-print" />保存图片</a></li>
                </ul>
              </li>
              <li>
                <a to="javascript:;"><i className="fa fa-database" />数据</a>
                <ul type="dataset" className="animenu__nav__child">
                  <li method="importData"><a to="javascript:;"><i className="fa fa-arrow-circle-up" />点边数据导入</a></li>
                  <li method="uploadfile"><a to="javascript:;"><i className="fa fa-upload" />关系对导入</a></li>
                  <li method="setdata"><a to="javascript:;"><i className="fa fa-pencil-square-o" />设置JSON数据</a></li>
                  <li method="gefxfile"><a to="javascript:;"><i className="fa fa-sign-out" />gefx文件导入</a></li>
                </ul>
              </li>
              <li>
                <a to="javascript:;"><i className="fa fa-sitemap" />布局</a>
                <ul id="layoutNavMenu" type="layout" className="animenu__nav__child"><li><a method="force" to="javascript:;"><i className="fa fa-share-alt" />力学模型类<i className="fa fa-sort-desc" /></a><ul className="list1"><li className="layoutitem" data-type="fastFR">快速弹性布局</li><li className="layoutitem" data-type="frDirect">弹簧力学布局</li><li className="layoutitem" data-type="fruchterman">力导向算法一</li><li className="layoutitem" data-type="fruchtermanReingold">力导向算法二</li><li className="layoutitem" data-type="spring">力导向算法三</li><li className="layoutitem" data-type="spring2">力导向算法四</li></ul></li><li><a method="kawai" to="javascript:;"><i className="fa fa-connectdevelop" />关系网络类<i className="fa fa-sort-desc" /></a><ul className="list1"><li className="layoutitem" data-type="fr">经典网络布局</li><li className="layoutitem" data-type="kk">关系路径布局</li><li className="layoutitem" data-type="arf">球面网络布局</li></ul></li><li><a method="circle" href="javascript:;"><i className="fa fa-circle-o" />圆形类<i className="fa fa-sort-desc" /></a><ul className="list1"><li className="layoutitem" data-type="concentric">中心圆形布局</li><li className="layoutitem" data-type="singleCirlce">圆形布局</li><li className="layoutitem" data-type="dualCirlce">双圆环布局</li><li className="layoutitem" data-type="layerCircle">多层圆环布局</li><li className="layoutitem" data-type="phyllota">圆面布局</li><li className="layoutitem" data-type="sphere">球体布局</li></ul></li><li><a method="tree" href="javascript:;"><i className="fa fa-sitemap" />树形结构类<i className="fa fa-sort-desc" /></a><ul className="list1"><li className="layoutitem" data-type="hubsize">层级布局</li><li className="layoutitem" data-type="tree">树形布局</li><li className="layoutitem" data-type="dag">有向无环图</li><li className="layoutitem" data-type="topoCircle">雪花布局</li><li className="layoutitem" data-type="radiatree">径向布局</li><li className="layoutitem" data-type="balloon">圆形树状布局</li><li className="layoutitem" data-type="balloontree">球树布局</li></ul></li><li><a method="ismo" href="javascript:;"><i className="fa fa-code-fork" />相似度排序<i className="fa fa-sort-desc" /></a><ul className="list1"><li className="layoutitem" data-type="hive">放射形布局</li><li className="layoutitem" data-type="layered">分层布局</li></ul></li><li><a method="other" href="javascript:;"><i className="fa fa-crosshairs" />其他布局<i className="fa fa-sort-desc" /></a><ul className="list1"><li className="layoutitem" data-type="scale">缩放布局</li><li className="layoutitem" data-type="rotate">旋转布局</li><li className="layoutitem" data-type="grid">矩形布局</li><li className="layoutitem" data-type="noverlap">节点不重叠</li></ul></li></ul>
              </li>
              <li>
                <a href="javascript:;"><i className="fa fa-cubes" />聚类</a>
                <ul type="cluster" className="animenu__nav__child">
                  <li method="chinesewisper"><a href="javascript:;"><i className="fa fa-slideshare" />ChineseWhisper</a></li>
                  <li method="louvain"><a href="javascript:;"><i className="fa fa-slideshare" />Louvain</a></li>
                  <li method="weakcommpent"><a href="javascript:;"><i className="fa fa-slideshare" />WeakCommpent</a></li>
                  <li method="bicomponet"><a href="javascript:;"><i className="fa fa-slideshare" />Bicomponent</a></li>
                  <li method="newman"><a href="javascript:;"><i className="fa fa-slideshare" />Newman</a></li>
                  <li method="kmeans"><a href="javascript:;"><i className="fa fa-slideshare" />KMeans</a></li>
                </ul>
              </li>
              <li>
                <a href="javascript:;" className="nochild"><i className="fa fa-ge" />分析</a>
                <ul type="analyze" className="animenu__nav__child">
                  <li method="visual-any"><a href="javascript:;"><i className="fa fa-bar-chart" />可视统计分析</a></li>
                  <li id="statistic-nav"><a href="javascript:;"><i className="fa fa-pie-chart" />图属性统计</a></li>
                  <li id="analyze-nav"><a href="javascript:;"><i className="fa fa-retweet" />路径分析</a></li>
                  <li method="listAnalyze"><a href="javascript:;"><i className="fa fa-table" />列表分析</a></li>
                  <li>
                    <a href="javascript:;"><i className="fa fa-table" />实体类型设置<i className="fa fa-sort-desc" /></a>
                    <ul className="list1" type="analyze">
                      <li className="layoutitem" method="typeMapSet">点类型设置</li>
                      <li className="layoutitem" method="lineTypeMapSet">边类型设置</li>
                    </ul>
                  </li>

                </ul>
              </li>
              <li>
                <a href="javascript:;"><i className="fa fa-globe" />视图</a>
                <ul type="view" className="animenu__nav__child">
                  <li id="rank-nav"><a href="javascript:;"><i className="fa fa-sort-amount-asc" />实体排序</a></li>
                  <li id="filter-nav"><a href="javascript:;"><i className="fa fa-filter" />实体过滤</a></li>
                  <li id="three-sence"><a href="javascript:;"><i className="fa fa-codepen" />三维视图</a></li>
                </ul>
              </li>

              <li id="demo-nav">
                <a href="javascript:;" className="nochild"><i className="fa fa-photo" />演示</a>
              </li>

            </ul>
          </ul>
        </nav>

        <div className="nav-right-bar">
          <ul>
            <li className="searchli">
              <div className="input-group input-group-sm">
                <input id="seachKey" type="text" className="form-control searchinput" placeholder="输入名称查找" />
                <span className="input-group-btn">
                  <a id="searchBtn" className="btn btn-primary lg-sm bcolor"><i className="fa fa-search" /></a>
                </span>
              </div>
            </li>
            {
              isFull ? <li ><a onClick={this.closeFullscreen.bind(this)} title="退出全屏"><i className="fa fa-compress" /></a></li>
                : <li><a onClick={this.openFullscreen.bind(this)} title="全屏"><i className="fa fa-arrows-alt" /></a></li>

            }
            <li><a onClick={this.handleSeting.bind(this)} title={this.props.isOpenSeting ? '关闭自定义设置' : '自定义设置'}><i className="fa fa-gear" /></a></li>
          </ul>
        </div>
        <div className="navbox">
          <div className="navbox-tiles">
            <Link to="networks/networks.html" className="tile">
              <div className="icon"><i className="fa fa-group" /></div><span className="title">关系网络分析</span>
            </Link>
            <Link to="analyze_3d.html" className="tile">
              <div className="icon"><i className="fa fa-joomla" /></div><span className="title">三维网络场景</span>
            </Link>
            <Link to="/customize" className="tile">
              <div className="icon"><i className="fa fa-dashboard" /></div><span className="title">自定义大屏图表</span>
            </Link>
            <Link to="university/index.html" className="tile">
              <div className="icon"><i className="fa fa-globe" /></div><span className="title">高校可视图谱</span>
            </Link>
            <Link to="knowledge/index.html" className="tile">
              <div className="icon"><i className="fa fa-book" /></div><span className="title">知识图谱查询</span>
            </Link>
            <Link to="dev-doc/index.html" className="tile">
              <div className="icon"><i className="fa fa-leanpub" /></div><span className="title">开发手册</span>
            </Link>
          </div>
          <div className="bottom-bar"><a onClick={this.handleIsOpenNavbox.bind(this, isOpenNavbox)} ><i className="fa fa-angle-double-up" /></a></div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Header);
