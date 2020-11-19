echarts组件封装在vue中的使用 支持typescript

vue - 2.6+
typescript - 4.0.5

功能设计：
  外部传入默认配置文件 - config
   ps： 用来配置组件本身的基础配置
  id - 组件ID
  是否触发渲染（重新获取数据） - isTriggerRender
  
  echarts图表默认配置 - defaultOptions
  例如
   标题/副标题 颜色 文本大小 位置调整等等
   是否存在（x/y）轴线
   图例默认位置，颜色 圆点大小配置
   等等
   
  echarts图表配置 - options
  图表配置项 - 没有配置的使用默认配置
  
  事件 - resize
  监听图表变化 - 重新绘制图表 以适应屏幕缩放
  window.addEventListener('resize', () => {})
  
  
  内置配置项 - BuiltInOptions
  针对于折线图/柱状图 饼图/漏斗图等业务场景相同，
  仅数据存在差异，可进行配置项抽离，写成内置的默认配置，用以减少代码量
  
使用方法：
  引入注册（局部/全局）传入属性，使用
