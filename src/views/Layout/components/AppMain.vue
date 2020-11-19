<template>
  <div>
    <div id="test" :style="{ width: '1000px', height: '500px' }"></div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component({})
export default class Layout extends Vue {
  private testEcharts: any;
  private $echarts: any;

  private mounted() {
    this.testEcharts = this.$echarts.init(document.getElementById('test'));
    this.$nextTick(() => {
      setTimeout(this.testEcharts.resize);
      this.getEchartsOption();
    });
  }

  private getEchartsOption() {
    const customData = [
      {
        value: 100,
        name: 'test'
      },
      {
        value: 233,
        name: 'test1'
      }
    ];
    function renderItem(params: any, api: any) {
      console.log(params, api, 32323);
      const xValue = api.value(0);
      const currentSeriesIndices = api.currentSeriesIndices();
      const barLayout = api.barLayout({
        barGap: '30%', barCategoryGap: '20%', count: currentSeriesIndices.length - 1
      });

      const points = [];
      for (let i = 0; i < currentSeriesIndices.length; i++) {
        const seriesIndex = currentSeriesIndices[i];
        if (seriesIndex !== params.seriesIndex) {
          const point = api.coord([xValue, api.value(seriesIndex)]);
          point[0] += barLayout[i - 1].offsetCenter;
          point[1] -= 20;
          points.push(point);
        }
      }
      const style = api.style({
        stroke: api.visual('color'),
        fill: null
      });

      return {
        type: 'polygon',
        shape: {
          points
        },
        style
      };
    }

    const option = {
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['test', 'test1']
      },
      xAxis: {
        data: ['10.01', '10.02', '10.03']
      },
      yAxis: {},
      series: [{
        type: 'custom',
        name: 'trend',
        renderItem,
        itemStyle: {
          borderWidth: 2
        },
        data: customData,
        z: 100
      }]
    };
    this.testEcharts.setOption(option, true);
  }
}
</script>

<style lang="stylus" type="text/stylus" scoped>

</style>
