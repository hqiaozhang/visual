import React, {Component} from 'react';
import './index.scss';


export default class LeftSide extends Component {
  render() {
    return (
      <div className="left-toolbar">
        <ul id="left-tool-btns">
          <li type="zoom" method="zoomOut" title="放大"><i className="fa fa-plus-circle" /></li>
          <li type="zoom" method="zoomIn" title="缩小"><i className="fa fa-minus-circle" /></li>
          <li type="zoom" method="zoom1" title="1:1"><i className="fa fa-arrows-h" /></li>
          <li type="zoom" method="zoom11" title="居中" className="end"><i className="fa fa-support" /></li>
          <li type="coordi" method="zoomOut" title="坐标放大"><i className="fa fa-search-plus" /></li>
          <li type="coordi" method="zoomIn" title="坐标缩小"><i className="fa fa-search-minus" /></li>
          <li type="coordi" method="east" title="顺时针旋转"><i className="fa  fa-undo" /></li>
          <li type="coordi" method="west" title="逆时针旋转" className="end"><i className="fa fa-repeat" /></li>
          <li type="mode" method="normal" title="正常模式" className="active"><i className="fa fa-mouse-pointer" /></li>
          <li type="mode" method="select" title="框选模式"><i className="fa fa-crop" /></li>
          <li type="mode" method="drag" title="拖拽模式" className="end"><i className="fa fa-arrows" /></li>
          <li type="label" method="show" title="节点标签"><i className="fa fa-text-width" /></li>
          <li type="warptext" method="wrapText" title="节点包裹文字" className="end"><i className="fa fa-creative-commons" /></li>
          <li type="fisheye" method="true" id="fisheyeBtn" title="放大镜" className="end"><i className="fa fa-search" /></li>
          <li type="edit" method="addNode" title="添加一个节点"><i className="fa fa-plus-square" /></li>
        </ul>
      </div>
    );
  }
}
