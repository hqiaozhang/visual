/*
 * @Author: zhanghongqiao
 * @Date: 2019-07-25 11:36:26
 * @Email: 991034150@qq.com
 * @Description: 自定义
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2019-07-26 17:23:39
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Header, LeftSide} from './panel';
import './index.scss';

class Customize extends Component {
  allowDrop(ev) {
    // this.props.dispatch({type: 'UPDATEUUID'});
    ev.preventDefault();
  }

  drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData('Text');
    if (!data) {
      return;
    }
    ev.target.appendChild(document.getElementById(data));
    // this.props.dispatch({type: 'ISDRAG', flag: false});
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <LeftSide />
        <div className="main" >
          <div id="graph-panel" className="container-fluid" >
            <div id="chart-wrap" className="grid-stack" onDrop={this.drop.bind(this)} onDragOver={this.allowDrop.bind(this)} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect()(Customize);
