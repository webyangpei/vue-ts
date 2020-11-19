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
  private $echarts:any;

  mounted() {
    this.testEcharts = this.$echarts.init(document.getElementById('test'));
    this.$nextTick(() => {
      setTimeout(this.testEcharts.resize);
      this.getEchartsOption();
    });
  }

  getEchartsOption () {

    const customData = [
      {
        value: 100,
        name: 'test'
      },
      {
        value: 233,
        name: 'test1'
      }
    ]
    function renderItem(params:any, api:any) {
      console.log(params, api, 32323)
      let xValue = api.value(0);
      let currentSeriesIndices = api.currentSeriesIndices();
      let barLayout = api.barLayout({
        barGap: '30%', barCategoryGap: '20%', count: currentSeriesIndices.length - 1
      });

      let points = [];
      for (let i = 0; i < currentSeriesIndices.length; i++) {
        let seriesIndex = currentSeriesIndices[i];
        if (seriesIndex !== params.seriesIndex) {
          let point = api.coord([xValue, api.value(seriesIndex)]);
          point[0] += barLayout[i - 1].offsetCenter;
          point[1] -= 20;
          points.push(point);
        }
      }
      let style = api.style({
        stroke: api.visual('color'),
        fill: null
      });

      return {
        type: 'polygon',
        shape: {
          points: points
        },
        style: style
      };
    }

    let option = {
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
        renderItem: renderItem,
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
