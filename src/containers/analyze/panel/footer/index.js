import React, {Component} from 'react';
import {connect} from 'react-redux';
import './index.scss';

const themeMenus = [
  {
    name: '默认',
    className: 'default'
  }, {
    name: '蓝色',
    className: 'blue'
  }, {
    name: '白色',
    className: 'white'
  }, {
    name: '背景图一',
    className: 'bg1'
  }
];

const mapStateToProps = ({allSeting}) => ({
  isOpenSeting: allSeting.isOpenSeting
});
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowBgMenu: false,
    };
  }
  /**
   * @description 显示、隐藏背景切换
   */
  handleToggleBg(event) {
    event.preventDefault();
    this.setState({
      isShowBgMenu: !this.state.isShowBgMenu
    });
  }
  handleBodyBg(className, event) {
    this.setState({
      isShowBgMenu: false
    });
    this.props.dispatch({type: 'CHANGEBODYBG', className});
  }
  render() {
    const {isShowBgMenu} = this.state;
    return (
      <div className="bottom-toolbar">
        <ul id="bottom-tools-bar">
          <li type="eyeview" title="缩略图" attr="0"><i className="fa fa-eye-slash" /></li>
          <li id="bg-style" className="btn-group dropup btnwrap">
            <button type="button" onClick={this.handleToggleBg.bind(this)} className="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
              <i className="fa fa-photo" />
              <span id="bg-name">背景</span>
              <span className="caret" />
            </button>
            <ul className="dropdown-menu" role="menu" style={{display: isShowBgMenu ? 'inline-block' : 'none'}}>
              {
                themeMenus.map(item => (
                  <li key={item.className} className="bgType"><a onClick={this.handleBodyBg.bind(this, item.className)}>{item.name}</a></li>
                ))
              }
            </ul>

          </li>
          <li className="btn-group dropup btnwrap">
            <button type="button" className="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
              <i className="fa fa-bullseye" />&nbsp;点
              <span className="caret" />
            </button>
            <ul className="dropdown-menu" role="menu">
              <li method="allSelect"><a href="javascript:;">全选</a></li>
              <li method="rebackSel"><a href="javascript:;">反选</a></li>
              <li method="showNodes"><a href="javascript:;">显示全部</a></li>
              <li method="showSelNode"><a href="javascript:;">显示选中</a></li>
              <li method="hideSelNode"><a href="javascript:;">隐藏选中</a></li>
              <li method="hideIsolatedNodes"><a href="javascript:;">隐藏孤立点</a></li>
            </ul>
          </li>
          <li className="btn-group dropup btnwrap">
            <button type="button" className="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown">
              <i className="fa fa-random" />&nbsp;边
              <span className="caret" />
            </button>
            <ul className="dropdown-menu" role="menu">
              <li method="showLinks"><a href="javascript:;">全部显示</a></li>
              <li method="hideLinks"><a href="javascript:;">全部隐藏</a></li>
              <li method="directedLine"><a href="javascript:;">显示箭头</a></li>
              <li method="undirectedLine"><a href="javascript:;">隐藏箭头</a></li>
              <li method="showLineLabel"><a href="javascript:;">显示标签</a></li>
              <li method="hideLineLabel"><a href="javascript:;">隐藏标签</a></li>
              <li method="Rline"><a href="javascript:;">实线</a></li>
              <li method="Vline"><a href="javascript:;">虚线</a></li>
            </ul>
          </li>
          <li id="line-type" className="btn-group dropup btnwrap">
            <button type="button" className="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown">
              <i className="fa fa-long-arrow-up" />
              <span id="line-name">直线</span>
              <span className="caret" />
            </button>
            <ul className="dropdown-menu" role="menu">
              <li className="lineType" type="direct"><a href="javascript:;">直线</a></li>
              <li className="lineType" type="curver"><a href="javascript:;">曲线</a></li>
              <li className="lineType" type="vlink"><a href="javascript:;">纵向折线</a></li>
              <li className="lineType" type="hlink"><a href="javascript:;">横向折线</a></li>
              <li className="lineType" type="vbezier"><a href="javascript:;">纵向曲线</a></li>
              <li className="lineType" type="hbezier"><a href="javascript:;">横向曲线</a></li>
              <li className="lineType" type="bezier"><a href="javascript:;">贝塞尔曲线</a></li>
            </ul>
          </li>
          <li id="entity-shape" className="btn-group dropup btnwrap">
            <button type="button" className="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown">
              <i className="fa fa-pinterest" />
              <span id="bg-name">点形状</span>
              <span className="caret" />
            </button>
            <ul className="dropdown-menu" role="menu">
              <li className="shape" type="circle"><a href="javascript:;">圆形</a></li>
              <li className="shape" type="rect"><a href="javascript:;">正方形</a></li>
              <li className="shape" type="ellipse"><a href="javascript:;">椭圆</a></li>
              <li className="shape" type="triangle"><a href="javascript:;">三角形</a></li>
              <li className="shape" type="star"><a href="javascript:;">五角星</a></li>
              <li className="shape" type="polygon"><a href="javascript:;">六边形</a></li>
              <li className="shape" type="text"><a href="javascript:;">文字</a></li>
            </ul>
          </li>
        </ul>
        <div className="right-panel">
          <span>节点：<label id="nodeNum">123</label></span>
          <span>边：<label id="linkNum">145</label></span>
        </div>
      </div>
    );
  }
}
export default connect(mapStateToProps)(Footer);
