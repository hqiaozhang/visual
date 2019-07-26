/*
 * @Author: zhanghongqiao
 * @Date: 2019-07-25 09:40:37
 * @Email: 991034150@qq.com
 * @Description: 右边菜单项
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2019-07-25 11:54:17
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Table, Slider} from 'antd';
import './index.scss';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 78,
  },
  {
    title: 'opt',
    dataIndex: 'opt',
    key: 'opt',
    render: text => (<Slider defaultValue={30} />),
  }
];

const data = [
  {
    key: '1',
    name: '点大小',
  },
  {
    key: '2',
    name: '度缩放比例',
  },
  {
    key: '3',
    name: '点颜色'
  }, {
    key: '4',
    name: '标签显示'
  }, {
    key: '5',
    name: '字体大小'
  }, {
    key: '6',
    name: '标签位置'
  },
];

const mapStateToProps = ({allSeting}) => ({
  isOpenSeting: allSeting.isOpenSeting
});

class SideRightMenu extends Component {
  /**
   * @description 关闭设置面板
   */
  handleCloseSeting() {
    this.props.dispatch({type: 'CLOSESETING'});
  }
  render() {
    const {isOpenSeting} = this.props;
    return (
      <div className="sideMenuContainer" style={{right: isOpenSeting ? 0 : -250}}>
        <div className="left-bar-header">
          <span className="title">自定义设置</span>
          <a className="slideCloseBtn" onClick={this.handleCloseSeting.bind(this)}><i className="fa fa-chevron-right" /></a>
        </div>
        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true" >
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="ds_head1">
              <h4 className="panel-title">
                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#nodeStyleSetter" aria-expanded="true" aria-controls="nodeStyleSetter" className="">点样式设置</a>
              </h4>
            </div>
          </div>
          <div id="nodeStyleSetter" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="ds_head1" >
            <div className="panel-body">
              <Table columns={columns} dataSource={data} pagination={false} showHeader={false} />
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(SideRightMenu);
