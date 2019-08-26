import React, {Component} from 'react';
import {connect} from 'react-redux';
 
import {menuData} from './data';
import './styles/index.scss';
import ChartPanel from './chartPanel'
import {
  chartDataRequest
} from '@/actions';
 
const mapStateToProps = ({customize}) => ({
  uuid: customize.uuid,
  chartData: customize.chartData
});


class LeftSide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuData,
      componnetArray: [],
      loading: false,
      chartData: []
    };
  }
  addComponent = (id) => {
    let arr = [...this.state.componnetArray];
    arr.push(id);
    this.setState({
        componnetArray: arr,
    })
  }
  /**
   * @description 渲染图表组件
   * @param {*} item
   * @param {*} id
   */
  renderChartsComponents(item, id) {
    return <div className="grid-stack-placeholder grid-stack-item" style={{display: 'none'}} id={`grid${id}`} key={id}>
            <ChartPanel chartType={item.chart} id={id} sourceData={this.props.chartData} />
          </div> 
  }

  /**
   * @description 拖动结束
   * @param {*} index
   * @param {*} parentIndex
   * @param {*} ev
   */
  dragEnd(index, parentIndex, ev) {
    ev.preventDefault();
   
    this.props.dispatch({type: 'UPDATEUUID'});
  }
  dragOver(ev) {
    ev.preventDefault();
  }
  /**
   * @description 开始拖拽
   */
  drag = (item, index, parentIndex, uuid, ev) => {
    // ev.persist()
    // 获取图表数据
    this.props.dispatch(chartDataRequest(item.url || 'fetchBaseChart'))
    this.addComponent(uuid)
    this.setSubMenuData(index, parentIndex, true);
    ev.dataTransfer.setData('Text', `grid${uuid}`);
   
  }

  /**
   * @description 设置菜单
   * @param {Number}  index
   * @param {Number}  parentIndex
   * @param {Boolean} flag
   */
  setSubMenuData(index, parentIndex, flag) {
    const curmenu = this.state.menuData; // 给对象赋值出来
    curmenu[parentIndex].children[index].show = flag; // 在新对象里面修改，然后赋值给需要改变的对象
    this.setState({
      menuData: curmenu,
      subIndex: index,
      parentIndex
    });
  }
 

  /**
   * @description 点击菜单
   * @param {Number} menuIndex 当前点击索引
   */
  handleMenu(menuIndex, ev) {
    ev.preventDefault();
    const curmenu = this.state.menuData; // 给对象赋值出来
    curmenu[menuIndex].show = !curmenu[menuIndex].show; // 在新对象里面修改，然后赋值给需要改变的对象
    this.setState({
      menuData: curmenu
    });
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.uuid !== this.props.uuid) {
    }
  }
  /**
   * @description 渲染子菜单
   * @param {Array} data 子菜单数据
   * @param {String} icon 菜单图标
   * @returns
   */
  renderChildrenMemu(data, icon, parentIndex) {
    const {uuid} = this.props;

    return data.map((item, i) => (
      <li
        id={`column${i}`}
        draggable="true"
        onDragOver={this.dragOver.bind(this)}
        onDragEnd={this.dragEnd.bind(this, i, parentIndex)}
        data-uuid={uuid}
        onDragStart={this.drag.bind(this, item,  i, parentIndex, uuid + i)}
        className="chart-item"
        key={i}>
       
        <a className="sidemenu-item">
          <span className={`sidemenu-icon fa ${icon}`} />
          <span className="sidemenu-text">{item.name}</span>
          {this.state.loading}
        </a>
        {item.show ? this.state.componnetArray.map((id) => {
          return this.renderChartsComponents(item, id)
          // return this.state.componnetArray.includes( uuid + i) ? this.renderChartsComponents(item, id) : ''
        }) : ''}
      </li>
    ));
  }

  render() {
    return (
      <div id="menu" className="main-sidebar sidemenu">
        <div className="menu-btn">
          <i className="fa fa-fw fa-dedent" />
        </div>
        <ul>
          {
            this.state.menuData.map((menu, i) => (
              <li className="meun-had" key={i}>
                <a className={`sidemenu-item ${menu.show ? 'open' : ''}`} onClick={this.handleMenu.bind(this, i)}>
                  <span className={`sidemenu-icon fa ${menu.icon}`} />
                  <span className="sidemenu-text">{menu.name}</span>
                  <span className="fa sidemenu-arrow" />
                </a>
                <ul>
                  {this.renderChildrenMemu(menu.children, menu.icon, i)}
                </ul>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default connect(mapStateToProps)(LeftSide);

