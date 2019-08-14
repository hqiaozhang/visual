/*
 * @Author: zhanghongqiao
 * @Date: 2019-07-25 11:36:26
 * @Email: 991034150@qq.com
 * @Description: 自定义
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2019-08-14 09:13:01
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Header, LeftSide} from './panel';
import EditableTable from './panel/leftSide/charts/table'
import './index.scss';

const mapStateToProps = ({customize}) => ({
  uuid: customize.uuid
});

class Customize extends Component {
  
  dragOver(ev) {
    ev.preventDefault();
  }
  dragEnd(ev) {
    console.log('xxxx')
  }
  drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData('Text');
    console.log('data', data)
    if (!data) {
      return;
    }
    var sourceNode = document.getElementById(data)
    ev.target.appendChild(sourceNode);
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <LeftSide />
        <div className="main" >
        {/* <EditableTable/> */}
          <div id="graph-panel" className="container-fluid" >
            <div id="chart-wrap" className="grid-stack" onDrop={this.drop.bind(this)} onDragEnd={this.dragEnd.bind(this)} onDragOver={this.dragOver.bind(this)} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps)(Customize);
