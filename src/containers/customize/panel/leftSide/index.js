import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetch}from '@/util/request';
import {menuData} from './data';
import './index.scss';
import * as BarCharts from './charts/index';
 
const mapStateToProps = ({customizeSeting}) => ({
  uuid: customizeSeting.uuid
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
    console.log('arr', arr)
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
   
     
    const data = []
    // console.log('dd', this.state.chartData)
    return this.chartsType(item.chart, id, data)
   
  }
  /**
   * @description 图表类型
   * @param {*} type
   * @returns 
   */
  chartsType(type, id, data) {
    switch (type) {
      case 'BaseBar':
        return <BarCharts.BaseBar id={id} sourceData={data} />;
      case 'StacBar':
        return <BarCharts.StacBar id={id} sourceData={data} />;
      case 'tacBar':
        return <BarCharts.StacBar id={id} sourceData={data} />;
      default:
        return <BarCharts.StacBar id={id} sourceData={data} />;
    }
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
    
    this.setSubMenuData(index, parentIndex, true);
    this.addComponent(uuid)
    console.log(document.getElementById(`grid${uuid}`), uuid)
    if(!document.getElementById(`grid${uuid}`)) {
      return
    }
    ev.dataTransfer.setData('Text', `grid${uuid}`);
    //  fetch(item.url || 'fetchBaseChart', (data) => {
    //     this.setState({
    //       loading: true,
    //       chartData: data,
    //     })
    //     // this.addComponent(uuid)
    //     // const curmenu = this.state.menuData; // 给对象赋值出来
    //     // const isShow = curmenu[parentIndex].children[index].show; // 在新对象里面修改，然后赋值给需要改变的对象
    //     // if (isShow === false) {
    //     //   return;
    //     // }
    //     // this.setSubMenuData(index, parentIndex, true);
    //     // console.log(document.getElementById(`grid${uuid}`))
    //     // ev.dataTransfer.setData('Text', `grid${uuid}`);
        
    // })

   
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
        key={i} >
       
        <a className="sidemenu-item">
          <span className={`sidemenu-icon fa ${icon}`} />
          <span className="sidemenu-text">{item.name}</span>
          {this.state.loading}
        </a>
        {/* {item.show? this.state.componnetArray.map((id) => this.renderChartsComponents(item, uuid + i)   ) : ''} */}
        {item.show? this.state.componnetArray.map((id) => 
         {
           console.log(uuid + i == id, uuid + i , id)
          return uuid + i == id ? this.renderChartsComponents(item, uuid + i) : ''
         }
          ) : ''}
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

