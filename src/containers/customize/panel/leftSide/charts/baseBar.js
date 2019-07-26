import React, {Component} from 'react';
import echarts from 'echarts';

export default class Charts extends Component {
  componentDidMount() {
    const data = [];
    this.showChart(data);
  }
  showChart(dataSet) {
    const myChart = echarts.init(document.getElementById(`chart${this.props.id}`));
    const option = {
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
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
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
          data: [10, 52, 200, 334, 390, 330, 220]
        }
      ]
    };
    myChart.setOption(option);
  }
  render() {
    return (
      <div className="grid-stack-placeholder grid-stack-item" id={`grid${this.props.id}`} style={{display: 'none'}}>
        <div className="widget grid-stack-item-content">
          <div className="widget-header">
            <div className="title" />
            <span className="tools">
              <a href="javascript:void(0);" className="fa fa-edit reset-btn" title="编辑数据" />
              <a href="javascript:void(0);" className="fa fa-close close-btn" title="删除" />
            </span>
          </div>
          {/* <div className="widget-body"> */}
          <div id={`chart${this.props.id}`} style={{width: 300, height: 320}} />
          {/* </div> */}
          <div className="ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se" style={{zZndex: 90}} />
        </div>
      </div>
    );
  }
}
