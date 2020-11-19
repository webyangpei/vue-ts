<template>
  <div id="echarts-wrap">
    <div
        :id="config.id"
        :style="{ width: this.WIDTH + 'px', height: this.HEIGHT + 'px' }">
    </div>
  </div>
</template>

<script lang="ts">
import {Config} from './type';
import {Component, Vue, Prop} from 'vue-property-decorator';
import defaultOptions from './defaultOptions';
// 合并对象使用 - 支持深合并以及方法合并
import merge from 'lodash.merge';
import { cloneDeep } from 'lodash';

@Component({
  name: 'EnEcharts'
})
export default class Layout extends Vue {
  private $echarts: any;
  private chart: any;
  // 默认宽度
  private WIDTH: number = 1200;
  // 默认高度
  private HEIGHT: number = 450;
  // 组件配置项
  @Prop({
    type: Object,
    default: () => {
      return {
        id: 'en-echarts',
        isTriggerRender: false
      };
    }
  })
  private config: Config | undefined;

  // echarts 默认配置项 - 决定基础风格 - 支持传入
  @Prop({type: Object})
  private defaultOptions: any;

  // echarts 传入配置项
  @Prop({type: Object})
  private options: any;

  // echarts 内置配置图表 - (针对某些特例进行抽离的配置) - 此参数旨在说明调用方要使用的配置项参数说明
  private BuiltInOptions: any = {};

  private mounted() {
    this.$nextTick(() => {
      this.WIDTH = (document.getElementById('echarts-wrap') as Element).clientWidth;
      this.HEIGHT = (document.getElementById('echarts-wrap') as Element).clientHeight;
      this.chart = this.$echarts.init(document.getElementById((this.config as Config).id));
      // 渲染图表
      this.renderEcharts();
      // 在图标缩放时重新渲染数据
      window.addEventListener('resize', () => {
        this.WIDTH = (document.getElementById('echarts-wrap') as Element).clientWidth;
        this.HEIGHT = (document.getElementById('echarts-wrap') as Element).clientHeight;
        setTimeout(this.chart.resize);
        if (this.config?.isTriggerRender) {
          this.renderEcharts();
        }
      });
    });
  }

  // 渲染图表
  private renderEcharts() {
    const options = cloneDeep(merge(defaultOptions || this.defaultOptions || {}, this.options));
    this.chart.setOption(options, true);
  }
}
</script>

<style lang="stylus" type="text/stylus" scoped>
  #echarts-wrap {
    width 100%
  }
</style>
