import React, {Component} from 'react';
import echarts from 'echarts';

const data1 = [20, 30, 20, 30, 20];
const data2 = [9, 30, 9, 60, 70];
const data3 = [20, 30, 20, 30, 20];
const datacity = ['济南市', '青岛市', '淄博市', '枣庄', '东营'];

export default class Charts extends Component {
  componentDidMount() {
    const data = [];
    this.renderChart();
  }
  renderChart() {
    const myChart = echarts.init(document.getElementById(`chart${this.props.id}`));
    const option = {
      color: ['#388BFF', '#05C3FA', '#F6931C', '#FFD52E'],
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        top: '8%',
        data: ['存量', '新增', '拆除', '整改'],
      },
      grid: { //图表的位置
        top: '20%',
        left: '3%',
        right: '4%',
        bottom: '5%',
        containLabel: true
      },
      yAxis: [{
        type: 'value',
        axisLabel: {
          show: true,
          interval: 'auto',
          formatter: '{value} '
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed'
          }
        },
        show: true
      }],
      xAxis: [{
        type: 'category',
        axisLabel: {
          interval: 0,
          show: true,
          splitNumber: 15,
          textStyle: {
            fontSize: 10,
            color: '#000'
          },

        },
        data: datacity,
      }],
      series: [{
        name: '存量',
        type: 'bar',
        stack: 'sum',
        barWidth: '20px',
        data: data1

      },
      {
        name: '新增',
        type: 'bar',
        barWidth: '20px',
        stack: 'sum',
        data: data2,

      },
      {
        name: '拆除',
        type: 'bar',
        color: '#F6931C',
        stack: 'sum1',
        barWidth: '20px',
        data: data3
      }, {
        name: '整改',
        type: 'bar',
        color: '#FFD52E',
        stack: 'sum1',
        barWidth: '20px',
        data: data3

      },
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
