import React, {Component} from 'react';
import echarts from 'echarts';
import {Modal, Form, Table, Input, InputNumber} from 'antd';

const EditableContext = React.createContext();
class EditableCell extends React.Component {
  getInput = () => {
    if (this.props.inputType === 'number') {
      return <InputNumber />;
    }
    return <Input />;
  };

  renderCell = ({getFieldDecorator}) => {
    const {
      editing,
      dataIndex,
      title,
      inputType,
      record,
      index,
      children,
      ...restProps
    } = this.props;
    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item style={{margin: 0}}>
            {getFieldDecorator(dataIndex, {
              rules: [
                {
                  required: true,
                  message: `Please Input ${title}!`,
                },
              ],
              initialValue: record[dataIndex],
            })(this.getInput())}
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  };

  render() {
    return <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>;
  }
}


export default class Charts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    this.myChart = null;
    this.options = {};
  }
  componentDidMount() {
    const data = [];
    this.renderChart(data);
  }
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
    this.myChart.setOption(this.options);
  }
  showModal() {
    console.log('xxxxxxx');
    console.log(this);
    this.setState({
      visible: true,
    });
  }
  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };
  handleOk = e => {
    this.setState({
      visible: false,
    });
    this.options.series[0].data = [80, 52, 200, 334, 190, 330, 220];
    this.myChart.resize();
    this.myChart.setOption(this.options);
  }
  render() {
    return (
      <div className="grid-stack-placeholder grid-stack-item" id={`grid${this.props.id}`} style={{display: 'none'}}>
        <Modal
          title="修改图表数据"
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onOk={this.handleOk}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
        <div className="widget grid-stack-item-content">
          <div className="widget-header">
            <div className="title" />
            <span className="tools">
              <a onClick={this.showModal.bind(this)} className="fa fa-edit reset-btn" title="编辑数据" />
              <a onClick={this.showModal.bind(this)} className="fa fa-close close-btn" title="删除" />
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
