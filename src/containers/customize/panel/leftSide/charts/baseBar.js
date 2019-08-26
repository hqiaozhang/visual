import React, {Component} from 'react';
import echarts from 'echarts';
 
export default class Charts extends Component {
  constructor(props) {
    super(props);
    this.myChart = null;
    this.options = {};
  }
  
  componentDidMount() {
    const { sourceData } = this.props
    if(!sourceData) {
      return
    }
    this.setChartData(sourceData);
  }
  componentWillReceiveProps(nextProps) {
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
  render() {  
    return (
      <div id={`chart${this.props.id}`} style={{width: 300, height: 320}} />
    );
  }
}
