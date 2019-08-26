/*
 * @Author: zhanghongqiao 
 * @Date: 2019-08-19 13:42:59 
 * @Email: 991034150@qq.com 
 * @Description: 图表面板
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2019-08-26 17:50:00
 */



import React, {Component} from 'react';
import {Modal} from 'antd';
import EditableTable from './table'
import * as Charts from './charts/index';

export default class ChartPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      editData: [],
      chartData: [],
    };
    this.myChart = null;
    this.options = {};
  }
  /**
   * @description 显示弹窗
   */
  showModal() {
    
    this.setState({
      visible: true,
      editData: this.state.chartData
    });
  }
  /**
   * @description 点击取消
   */
  handleCancel = e => {
    this.setState({
      visible: false,
    });
  }
  handleDel = ev => {
    document.getElementById(`grid${this.props.id}`).remove()
  }
  /**
   * @description 点击ok
   */
  handleOk = e => {
    this.setState({
      visible: false,
      chartData: this.state.editData
    });
  }
   /**
   * @description 获取子组件数据
   * @param {*} data
   */
  getChildComponentData(data) {
    this.setState({
      editData: data
    })
  }
    /**
   * @description 图表类型
   * @param {*} type
   * @returns 
   */
  renderChartsComponent() {
    console.log('========', this.props.chartType)
    switch (this.props.chartType) {
      case 'BaseBar':
        return <Charts.BaseBar id={this.props.id} sourceData={this.state.chartData} />;
      case 'StacBar':
        return <Charts.StacBar id={this.props.id} sourceData={this.state.chartData} />;
      case 'tacBar':
        return <Charts.StacBar id={this.props.id} sourceData={this.state.chartData} />;
      default: ''
        return <Charts.StacBar id={this.props.id} sourceData={this.state.chartData} />;
    }
  } 
  
  componentDidMount() {
    const { sourceData } = this.props
    if(!sourceData) {
      return
    }
    this.setState({
      editData: sourceData,
      chartData: sourceData
    })
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      editData: nextProps.sourceData,
      chartData: nextProps.sourceData,
    })
  }
  render() {  
  
    if(!this.props.sourceData) {
      return ''
    }
    return (
      <React.Fragment>
        <Modal
          title="修改图表数据"
          visible={this.state.visible}
          onCancel={this.handleCancel}
          okText="确认"
          cancelText="取消"
          onOk={this.handleOk}
        >
        <EditableTable  pfn={this.getChildComponentData.bind(this)} handleSave={this.handleSave} sourceData={this.state.editData} />
        </Modal>
        <div className="widget grid-stack-item-content">
          <div className="widget-header">
            <div className="title" />
            <span className="tools">
              <a onClick={this.showModal.bind(this)} className="fa fa-edit reset-btn" title="编辑数据" />
              <a onClick={this.handleDel.bind(this)} className="fa fa-close close-btn" title="删除" />
            </span>
          </div>
          {/* <div id={`chart${this.props.id}`} style={{width: 300, height: 320}} >
            {this.renderChartsComponent()}
          </div> */}
          {this.renderChartsComponent()}
          <div className="ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se" style={{zZndex: 90}} />
        </div>
      </React.Fragment>
    );
  }
}