import React, {Component} from 'react';
import echarts from 'echarts';
import {Modal} from 'antd';
import EditableTable from './table'


export default class Charts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      editData: [],
    };
    this.myChart = null;
    this.options = {};
  }
  
  componentDidMount() {
    const { sourceData } = this.props
    
    if(!sourceData) {
      return
    }
    this.setState({
      editData: sourceData
    })
    this.setChartData(sourceData);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      editData: nextProps.sourceData
    })
    this.setChartData(nextProps.sourceData);
  }
  /**
   * @description 设置图表数据
   * @param {*} data
   */
  setChartData(data) {
    const seriesData  = data.map(item => item.value)
    const xData = data.map(item => item.name)
    const dataSet = {
      seriesData: seriesData,
      xData: xData
    }
    this.renderChart(dataSet)
  }

  /**
   * @description 渲染图表
   * @param {*} dataSet
   */
  renderChart(dataSet) {
    this.myChart = echarts.init(document.getElementById(`chart${this.props.id}`));
    this.options = {
      color: ['#3398DB'],
      tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: dataSet.xData,
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '直接访问',
          type: 'bar',
          barWidth: '60%',
          data: dataSet.seriesData
        }
      ]
    };
    this.myChart.setOption(this.options);
  }
  /**
   * @description 显示弹窗
   */
  showModal() {
    this.setState({
      visible: true,
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
    });
    this.setChartData(this.state.editData)
  }
  /**
   * @description 获取子组件数据
   * @param {*} data
   */
  getChildData(data) {
    this.setState({
      editData: data
    })
  }
  render() {  
    return (
      <div className="grid-stack-placeholder grid-stack-item" id={`grid${this.props.id}`} style={{display: 'none'}}>
        <Modal
          title="修改图表数据"
          visible={this.state.visible}
          onCancel={this.handleCancel}
          okText="确认"
          cancelText="取消"
          onOk={this.handleOk}
        >
        <EditableTable  pfn={this.getChildData.bind(this)} handleSave={this.handleSave} sourceData={this.state.editData} />
        </Modal>
        <div className="widget grid-stack-item-content">
          <div className="widget-header">
            <div className="title" />
            <span className="tools">
              <a onClick={this.showModal.bind(this)} className="fa fa-edit reset-btn" title="编辑数据" />
              <a onClick={this.handleDel.bind(this)} className="fa fa-close close-btn" title="删除" />
            </span>
          </div>
          <div id={`chart${this.props.id}`} style={{width: 300, height: 320}} />
          <div className="ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se" style={{zZndex: 90}} />
        </div>
      </div>
    );
  }
}
