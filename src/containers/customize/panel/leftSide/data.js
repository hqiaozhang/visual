const menuData = [
  {
    name: '柱图',
    icon: 'fa-bar-chart-o',
    children: [
      {
        name: '条形图',
        chart: 'BaseBar',
        url: 'fetchBaseChart',
      }, {
        name: '堆叠条形图',
        chart: 'StacBar',
      }, {
        name: '柱状图'
      }, {
        name: '堆叠柱状图'
      }, {
        name: '极坐标柱图'
      }, {
        name: '极坐标堆叠柱图'
      }
    ]
  }, {
    name: '饼图',
    icon: 'fa-pie-chart',
    children: [
      {
        name: '饼图'
      }, {
        name: '环形图'
      }, {
        name: '玫瑰图'
      }
    ]
  }, {
    name: '折线图',
    icon: 'fa-line-chart',
    children: [
      {
        name: '折线图'
      }, {
        name: '曲线图'
      }, {
        name: '面积图'
      }, {
        name: '堆叠折线图'
      }, {
        name: '堆叠面积图'
      }
    ]
  }, {
    name: '散点图',
    icon: 'fa-pie-chart',
    children: [
      {
        name: '散点图'
      }
    ]
  }, {
    name: '词云图',
    icon: 'fa-skyatlas',
    children: [
      {
        name: '词云图'
      }
    ]
  },
  {
    name: '漏斗图',
    icon: 'fa-filter',
    children: [
      {
        name: '漏斗图'
      },
      {
        name: '多系漏斗图'
      }
    ]
  }, {
    name: '雷达图',
    icon: 'fa-bullseye',
    children: [
      {
        name: '多边形雷达图'
      },
      {
        name: '圆形雷达图'
      }
    ]
  }, {
    name: '仪表盘',
    icon: 'fa-dashboard',
    children: [
      {
        name: '数字仪表盘'
      }
    ]
  }, {
    name: '关系图',
    icon: 'fa-joomla',
    children: [
      {
        name: '关系图'
      }
    ]
  }
];

export {menuData};

