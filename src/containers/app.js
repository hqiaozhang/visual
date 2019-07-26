import React, {Component} from 'react';
import echarts from 'echarts';
import {hours, station, stationData} from './data';

const symbolSize = [5, 8, 16, 24, 32, 40];
const colors = ['#77E750', '#FFDF02', '#F67825', '#F93148', '#A4036E', '#690000'];
class App extends Component {
  state = {
  }
  componentWillMount() {

  }

  componentDidMount() {
    const data = [];
    this.showChart(data);
  }


  showChart(dataSet) {
    const myChart = echarts.init(document.getElementById('chart'));
    const days = station;
    const data = [];
    const yAxisData = [];
    stationData.map((item, i) => {
      item.data.map((val, j) => {
        data.push([j, i, val.value, val.level]);
      });
      yAxisData.push(item.name);
    });

    const option = {
      tooltip: {
        position: 'top',
        formatter(params) {
          return ` ${hours[params.value[0]]} <br/> ${days[params.value[1]]} <br/> AQI ${params.value[2]}`;
        }
      },
      grid: {
        left: 35,
        bottom: 10,
        right: 45,
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: hours,
        position: 'top',
        boundaryGap: false,
        axisLabel: {
          color: '#fff'
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#fff',
            type: 'dotted'
          }
        },
        axisLine: {
          show: false
        }
      },
      yAxis: {
        type: 'category',
        data: yAxisData,
        offset: 25,
        axisLine: {
          show: false
        },
        axisLabel: {
          color: '#fff'
        }
      },
      series: [{
        name: 'Punch Card',
        type: 'scatter',
        itemStyle: {
          color(params) {
            return colors[params.data[3] - 1];
          }
        },
        symbolSize(val) {
          return symbolSize[val[3] - 1];
        },
        data,
        animationDelay(idx) {
          // return idx * 5;
        }
      }]
    };
    myChart.setOption(option);
  }

  render() {
    return (
      <div className="vis-network">
        <div id="chart" style={{width: '100%', height: stationData.length * 44 + 100, minHeight: window.innerHeight - 100}} />
      </div>
    );
  }
}

export default App;
